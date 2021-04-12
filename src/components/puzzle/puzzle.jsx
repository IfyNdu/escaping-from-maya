import fp from 'lodash/fp';
import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import moment from 'moment';
import { red } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import styles from './puzzle.mod.scss';


const maxWidth = 800;
const fpMap = fp.map.convert({ cap: false });
const calcWidth = length => maxWidth / (length < 4 ? length : 4);

const Video = ({ imgTitle, src, width }) => {

  return (
    <iframe {...{
      width,
      height: "315",
      src,
      title: imgTitle,
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: true
    }} />
  )
}

const useStyles = makeStyles({
  avatar: {
    backgroundColor: red[500],
  },
  root: {
    maxWidth,
  },
  media: {
    height: 450,
  },
});

const Puzzle = ({
  answer,
  body,
  mediaData = ['https://material-ui.com/static/images/cards/contemplative-reptile.jpg'],
  mediaType = 'image',
  imgTitle,
  onChange,
  onSubmit,
  options,
  question,
  timer,
  title,
  type
}) => {

  const imageLength = fp.size(mediaData)
  const classes = useStyles();
  const renderImages = (src, index) => {

    return (
      <div key={`image-${index}`} className={styles.image} style={{ maxWidth: calcWidth(imageLength) - 4 }}>
        {mediaType === 'image' && (
          <ReactImageMagnify {...{
            enlargedImagePosition: 'over',
            enlargedImageContainerStyle: { zIndex: 90 },
            enlargedImageContainerDimensions: {
              width: '200%',
              height: '200%'
            },
            smallImage: {
              isFluidWidth: true,
              src,
              height: 200,
              width: 200 - 4
            },
            largeImage: {
              src,
              width: 1800,
              height: 1200
            }
          }} />
        )}
        {mediaType === 'video' && (
          <Video {...{
            src: 'https://www.youtube.com/embed/k5iJV2cYCt8',
            width: calcWidth(imageLength) - 4
          }} />
        )}
      </div>
    )
  }
  const renderAnswer = () => {

    if (type === 'MULTIPLE_CHOICE') {

      return fp.map(({ checked, id, label }) => {

        return (
          <FormControlLabel key={id} {...{
            control: <Checkbox {...{
              checked,
              onChange,
              name: id
            }} />,
            label
          }} />
        )
      }, options)
    }

    return (
      <TextField {...{
        onChange,
        value: answer,
        variant: 'outlined',
        margin: 'normal',
        required: true,
        fullWidth: true,
        id: 'answer',
        placeholder: 'Enter your answer',
        name: 'answer',
        autoComplete: 'answer',
        autoFocus: true
      }} />
    )
  }

  return (
    <Card className={classes.root}>
      <CardHeader {...{
        avatar: <Avatar {...{
          'aria-label': 'puzzle',
          children: body?.[0] ?? 'I',
          className: classes.avatar
        }} />,
        action: timer,
        subheader: moment().format('MMMM Do YYYY, h:mm:ss a'),
        title
      }}
      />
      <div>
        <div className={styles.imageContainer}>
          {fpMap(renderImages, mediaData)}
        </div>
        <CardContent>
          <Typography {...{
            children: body,
            variant: 'body2',
            color: 'textSecondary',
            component: 'p'
          }} />
          <div style={{ marginTop: '24px' }}>
            <Typography {...{
              children: question,
              variant: 'body2',
              color: 'primary',
              component: 'p'
            }} />
          </div>
        </CardContent>
      </div>
      <CardActions>
        {renderAnswer()}
        <Button {...{
          children: 'SUBMIT',
          size: 'small',
          color: 'primary',
          onClick: onSubmit
        }} />
      </CardActions>
    </Card>
  );
};

export default Puzzle;
