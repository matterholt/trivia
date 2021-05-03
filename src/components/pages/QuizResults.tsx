import { Redirect } from "react-router-dom";
import { useAnsweredQuestions } from "../../context/userAnswerContext"

const QuizResults = () => {
    const { answeredToQuestions, setAnsweredToQuestions } = useAnsweredQuestions()
    const didClearAnswer = 0 === answeredToQuestions.length

    if(didClearAnswer) {
        return (<Redirect to="/" />)
    }


    return (
        <div>
            <h2>Results Page</h2>
            <div>
                <p>Answered question, then redirect to results</p>
                <p>Should update a</p>
                { JSON.stringify(answeredToQuestions)}
                <button onClick={()=>setAnsweredToQuestions([])}>Try Again</button>
            </div>
        </div>
    )
}
export default QuizResults