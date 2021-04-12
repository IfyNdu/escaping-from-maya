import fp from 'lodash/fp';
import React, { useEffect, useState } from 'react';
import { Puzzle, Timer } from '../components';
import PUZZLE_DATA, { PUZZLES } from './config/puzzle-data';

import styles from './quiz.mod.scss';


const Quiz = () => {

  const [currentPuzzleIndex, setPuzzleIndex] = useState(0);
  const [position, setPosition] = useState(0);
  const [stopTimer, setStopTimer] = useState(false);
  const [answer, setAnswer] = useState('');
  const [multipleChoice, setMultipleChoice] = useState([]);

  const puzzle = fp.get(`${PUZZLES[currentPuzzleIndex]}.[${position}]`, PUZZLE_DATA)

  const onChangeAnswer = ({ target }) => {

    if (puzzle.type === 'TEXT') {
      setAnswer(target.value)
    } else {
      setMultipleChoice(state => {

        return fp.map(data => {

          if (data.id === target.name) {

            return { ...data, checked: target.checked }
          }

          return data
        }, state)
      })
    }
  }

  const onSubmit = () => {

    const puzzleSize = fp.size(fp.getOr([], `${PUZZLES[currentPuzzleIndex]}`, PUZZLE_DATA));

    const nextPuzzle = () => { setPosition(prevPositon => prevPositon + 1) }
    const nextChapter = () => { setPuzzleIndex(prevPositon => prevPositon + 1) }
    const getMultipleChoiceAnswer = fp.flow(
      fp.filter(({ checked }) => checked),
      fp.map('id'),
      fp.join(', ')
    )

    if (puzzle.type === 'MULTIPLE_CHOICE') {

      if (getMultipleChoiceAnswer(multipleChoice) === puzzle.answer) {

        if (position < puzzleSize) { nextPuzzle(); }

        if (position + 1 === puzzleSize && currentPuzzleIndex < fp.size(PUZZLES)) {

          nextChapter();
          setPosition(0);

          if (currentPuzzleIndex + 1 === fp.size(PUZZLES)) {
            setStopTimer(true);
            setPuzzleIndex(0)
          }
        }
      }
    } else {

      if (answer === puzzle.answer) {

        if (position < puzzleSize) { nextPuzzle(); }

        if (position + 1 === puzzleSize && currentPuzzleIndex < fp.size(PUZZLES)) {

          nextChapter();
          setPosition(0);

          if (currentPuzzleIndex + 1 === fp.size(PUZZLES)) {
            setStopTimer(true);
            setPuzzleIndex(0)
          }
        }
      }
    }
  }

  useEffect(() => {

    if (puzzle.type === 'MULTIPLE_CHOICE') {

      setMultipleChoice(puzzle.options);
    } else {
      setAnswer('');
    }
  }, [puzzle.id])

  return (
    <div className={styles.root}>
      <React.Fragment>
        <Puzzle {...{
          answer,
          body: puzzle.body,
          mediaData: puzzle.mediaData,
          onChange: onChangeAnswer,
          onSubmit,
          options: multipleChoice,
          question: puzzle.question,
          timer: <Timer {...{
            id: puzzle.id,
            stopTimer,
            label: '00:00',
            onTimeout: puzzle.onTimeout,
            timeLeft: puzzle.timeLeft
          }} />,
          title: puzzle.title,
          type: puzzle.type
        }} />
      </React.Fragment>
    </div>
  )
};

export default Quiz;
