import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome'
import Gameplay from './components/Gameplay'

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route path="/gameplay" component={Gameplay}/>
        </Switch>
      </>
    </Router>
  );
}



export default App;
