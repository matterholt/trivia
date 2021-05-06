import { useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { useAnsweredQuestions } from "../../context/userAnswerContext"
import AnsweredQuestions from "../quizResults/AnsweredQuestions"

import correctAnswerCount from "../../utils/correctAnswerCount"

const QuizResults = () => {
    const { answeredToQuestions, setAnsweredToQuestions } = useAnsweredQuestions()
    const totalQuestionCount = answeredToQuestions.length
    const didClearAnswer = 0 === totalQuestionCount
    const answeredCorrectly  = correctAnswerCount(answeredToQuestions)

    if(didClearAnswer) {
        return (<Redirect to="/" />)
    }

    // useEffect(() => {
    //     window.addEventListener('popstate', (event) => {
    //         alert("You message");
    //         });
    // },[])


    return (
        <div>
            <h2>Results Page</h2>
            <div>
                <p>You scored {answeredCorrectly}/{totalQuestionCount }</p>

                <AnsweredQuestions userAnswers={answeredToQuestions} />
                <button onClick={()=>setAnsweredToQuestions([])}>Play Again</button>
            </div>
        </div>
    )
}
export default QuizResults