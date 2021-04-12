import fp from 'lodash/fp';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Credentials } from '../config/credentials';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://escaping-from-maya.s3.eu-west-2.amazonaws.com/pexels-cottonbro-5592401.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {

  const classes = useStyles();
  const history = useHistory();

  const [username, setUsername] = useState('');
  const onChangeUsername = ({ target }) => { setUsername(target.value) }

  const [password, setPassword] = useState('');
  const onChangePassword = ({ target }) => { setPassword(target.value) }

  const textFields = [{
    onChange: onChangeUsername,
    value: username,
    variant: 'outlined',
    margin: 'normal',
    required: true,
    fullWidth: true,
    id: 'name',
    label: 'Username',
    name: 'name',
    autoComplete: 'name',
    autoFocus: true
  }, {
    onChange: onChangePassword,
    value: password,
    variant: 'outlined',
    margin: 'normal',
    required: true,
    fullWidth: true,
    name: 'password',
    label: 'Password',
    type: 'password',
    id: 'password',
    autoComplete: 'current-password'
  }]

  const onSubmit = event => {

    event.preventDefault();

    const user = Credentials?.[username]

    if (user === password) { history.push('/home') }
  }

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid {...{
        item: true,
        xs: false,
        sm: 4,
        md: 7, className: classes.image
      }} />
      <Grid {...{
        item: true,
        xs: 12,
        sm: 8,
        md: 5,
        component: Paper,
        elevation: 6,
        square: true
      }}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={onSubmit}>
            {fp.map(field => <TextField key={field.id} {...field} />, textFields)}
            <Button {...{
              children: 'Sign In',
              type: 'submit',
              fullWidth: true,
              variant: 'contained',
              color: 'primary',
              className: classes.submit
            }} />
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Login;
