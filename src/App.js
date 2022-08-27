import Title from './Title';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MedicineDetails from './MedicineDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/medicines/:id">
              <MedicineDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
