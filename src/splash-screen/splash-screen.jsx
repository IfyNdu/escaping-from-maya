import React from 'react';
import { useHistory } from 'react-router-dom';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { buttonText, para1, para2, title } from './config/config';


const useStyles = makeStyles(theme => ({
  button: {
    marginTop: '100px',
    width: '100%'
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green
  },
});

const SplashScreen = () => {

  const classes = useStyles();
  const history = useHistory();

  const onClick = () => { history.push('/quiz'); };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container {...{
        component: 'main',
        className: classes.main,
        maxWidth: 'sm'
      }}>
        <Typography variant='h2' component='h1' gutterBottom>
          {title}
        </Typography>
        <Typography variant='h5' component='h2' gutterBottom>
          {para1}
          {para2}
        </Typography>
        <ThemeProvider theme={theme}>
          <Button {...{
            children: buttonText,
            variant: 'contained',
            color: 'primary',
            onClick,
            size: 'large',
            className: classes.button,
            startIcon: <SaveIcon />
          }} />
        </ThemeProvider>
      </Container>
    </div>
  );
}

export default SplashScreen;
