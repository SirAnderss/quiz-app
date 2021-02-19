import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Questions from './components/Questions';
import ScoreBoard from './components/ScoreBoard';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={ScoreBoard} />
          <Route path="/:user" exact component={Questions} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
