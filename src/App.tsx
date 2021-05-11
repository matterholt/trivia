import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import PageLayout from './components/general/PageLayout'
import QuizQuestion from './components/pages/QuizQuestion'
import QuizResults from './components/pages/QuizResults'

const WebRoute = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <Router>
            <PageLayout>
                <Switch>{children}</Switch>
            </PageLayout>
        </Router>
    )
}

function App() {
    const [question, setQuestion] = useState([])

    return (
        <Router>
            <WebRoute>
                <Route exact path="/">
                    <Home setQuestion={setQuestion} />
                </Route>
                <Route exact path="/QuizQuestion">
                    <QuizQuestion triviaQuestion={question} />
                </Route>
                <Route exact path="/QuizResults">
                    <QuizResults />
                </Route>
            </WebRoute>
        </Router>
    )
}

export default App
