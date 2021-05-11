
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/pages/Home'
import PageLayout from "./components/PageLayout"
import QuizQuestion from "./components/pages/QuizQuestion"
import QuizResults from './components/pages/QuizResults'

const sampleData = [{
    category: "Entertainment:video----1",
    type: "boolean",
    difficulty: "hard",
    question : "Some random question 1 that is not false",
    correct_answer: "True",
    incorrect_answer: [ 'False']
},{
    category: "Entertainment:video---2",
    type: "boolean",
    difficulty: "hard",
    question : "Some random question 2 that is not false",
    correct_answer: "True",
    incorrect_answer: [ 'False']
},
]

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
  const [question, setQuestion] = useState([])
  
  
  return (
    <Router>
      <WebRoute>
        <Route exact path="/">
          <Home setQuestion={ setQuestion}/>
        </Route>
        <Route exact path="/QuizQuestion">
          <QuizQuestion triviaQuestion={ question }/>
        </Route>
        <Route exact path="/QuizResults">
          <QuizResults />
        </Route>
      </WebRoute>
 </Router>
  );
}

export default App;
