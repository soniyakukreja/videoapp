import Allvideos from './Allvideos'
import Video from './Video'
import Home from './Home'
import {BrowserRouter as Router, Route,Redirect,Switch} from "react-router-dom"

function App() {
  return (
    <>
    <Router>

      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/video/:id" exact component={Video} />
      <Route path="/myvideos" exact component={Allvideos} />
        <Route path="/*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
