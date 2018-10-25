import React from 'react';
import ReactDOM from 'react-dom';
import { 
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
// import FastClick from 'fastclick';
import 'babel-polyfill';
import {
  Home,
  ButtonDemo,
  CellDemo,
  BlankDemo,
  ActionSheetDemo,
  ChexkboxDemo,
  FlexDemo,
  InputDemo,
  ModalDemo,
  PickerDemo,
  SwitchDemo,
  RadioDemo,
  AccordionDemo,
  IconDemo,
  ToastDemo,
} from './pages';
import './app.css';

// window.addEventListener('load', () => {
//   const body = document.body || document.documentElement;
//   FastClick.attach(body);
// });

const routers = [
  {path: '/', component: Home, exact: true},
  {path: '/button', component: ButtonDemo},
  {path: '/cell', component: CellDemo},
  {path: '/blank', component: BlankDemo},
  {path: '/actionsheet', component: ActionSheetDemo},
  {path: '/checkbox', component: ChexkboxDemo},
  {path: '/input', component: InputDemo},
  {path: '/flex', component: FlexDemo},
  {path: '/modal', component: ModalDemo},
  {path: '/picker', component: PickerDemo},
  {path: '/switch', component: SwitchDemo},
  {path: '/radio', component: RadioDemo},
  {path: '/accordion', component: AccordionDemo},
  {path: '/icon', component: IconDemo},
  {path: '/toast', component: ToastDemo},
];

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {
            routers.map(({path, component, exact}) => (
              <Route key={path} path={path} component={component} exact={exact} />
            ))
          }
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
