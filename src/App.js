import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.min.css'
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login'
import { Router } from 'react-router';

function App() {
  const name = "noah";
  return (
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/home" component={Home}/>
    </Switch>
  );
}

export default App;
