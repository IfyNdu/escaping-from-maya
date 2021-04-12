import Login from '../../login/login';
import Quiz from '../../quiz/quiz';
import SplashScreen from '../../splash-screen/splash-screen';


export default [{
  component: Login,
  exact: true,
  key: 'login',
  path: '/'
}, {
  component: SplashScreen,
  exact: false,
  key: 'home',
  path: '/home'
}, {
  component: Quiz,
  exact: false,
  key: 'quiz',
  path: '/quiz'
}];
