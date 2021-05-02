
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/pages/Home'
import PageLayout from "./components/PageLayout"
import Trivia from "./components/pages/TrivaQuestion"

function Questions() {
  return <h2>Questions</h2>;
}



const WebRoute = ({ children }: {children: JSX.Element| JSX.Element[]}) => {
    return (
      <Router>
        <PageLayout>
          <Switch>{children}</Switch>
          </PageLayout>
    </Router>
  );
}

function App() {
  return (
    <Router>
      <WebRoute>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/trivia">
          <Trivia />
        </Route>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/questions">questions</Link>
            </li>
            <li>
              <Link to="/results">results</Link>
            </li>
          </ul>
      </nav>
         <Switch>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/questions">
            <Questions />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */}
      </WebRoute>
    
 </Router>
  );
}

export default App;
