import React, { useEffect, useRef, useState } from 'react';
import Typography from '@material-ui/core/Typography';

import styles from './timer.mod.scss';


const Timer = ({ id, label = '00:00', onFinish, stopTimer }) => {

  const [timer, setTimer] = useState(0);
  const [interval, setTimerInterval] = useState(0);
  const countRef = useRef(0);
  countRef.current = interval;

  useEffect(() => {

    clearInterval(countRef.current);
    setTimer(1000);
    setTimerInterval(setInterval(() => { setTimer(state => state + 1000); }, 1000))

    return () => { clearInterval(interval) }
  }, []);

  useEffect(() => { stopTimer && clearInterval(countRef.current) }, [stopTimer]);

  const seconds = timer % 60000 / 1000;
  const minute = parseInt(timer / 60000);
  const time = `0${minute}:${seconds < 10 ? `0${seconds}` : seconds}`;

  return (
    <div className={styles.root}>
      <Typography {...{
        children: time,
        variant: 'overline',
        color: 'secondary',
        component: 'p'
      }} />
    </div>
  )
};

export default Timer;
