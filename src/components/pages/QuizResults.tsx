import { Redirect } from "react-router-dom";
import { useAnsweredQuestions } from "../../context/userAnswerContext"
import AnsweredQuestions from "../quizResults/AnsweredQuestions"


const QuizResults = () => {
    const { answeredToQuestions, setAnsweredToQuestions } = useAnsweredQuestions()
    const didClearAnswer = 0 === answeredToQuestions.length
    const answeredCorrectly  = 3 

    if(didClearAnswer) {
        return (<Redirect to="/" />)
    }


    return (
        <div>
            <h2>Results Page</h2>
            <div>
                <p>You scored {answeredCorrectly}/10</p>
                
                <AnsweredQuestions userAnswers={answeredToQuestions} />
                <button onClick={()=>setAnsweredToQuestions([])}>Play Again</button>
            </div>
        </div>
    )
}
export default QuizResults