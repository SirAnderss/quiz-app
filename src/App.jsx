import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Quiz from './components/Quiz';
import ScoreBoard from './components/ScoreBoard';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={ScoreBoard} />
          <Route path="/finish" exact component={ScoreBoard} />
          <Route path="/:user" exact component={Quiz} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
