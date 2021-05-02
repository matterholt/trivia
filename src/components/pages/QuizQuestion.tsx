import { useState} from 'react'
import { Redirect } from "react-router-dom";

import CurrentQuestion from "../quizScreen/CurrentQuestion"

interface TriviaQuestionProps {
    triviaQuestion: {
        category: string,
        type: string,
        difficulty: string,
        question: string,
        correct_answer: string,
        incorrect_answer: string[]
    }[]
}

const QuizQuestion = ({ triviaQuestion }: TriviaQuestionProps) => {
    
    const [currentQuestionId, setCurrentQuestionId] = useState(0);
    // const {answeredToQuestions, setAnsweredToQuestions} = useAnsweredQuestions

    const [answeredToQuestions, setAnsweredToQuestions] = useState([{
        question: "Some random question that is not false--0",
        correct_answer: "true",
        users_answer: "false"
    }])

    const triviaQuestionLength = triviaQuestion.length
    const didAnswerAllQuestions = currentQuestionId === triviaQuestionLength

    function updateAnsweredQuestions(userCurrentAnswer :{question: string, correct_answer: string,users_answer: string}) {
        // take the current displayed question, update user answer 3
        const userAnsweredQuestions = { ...userCurrentAnswer, questionId: currentQuestionId }
        
        setCurrentQuestionId(currentQuestionId + 1)

        setAnsweredToQuestions(
            ([...answeredToQuestions,userAnsweredQuestions])
        )
    }

    if (didAnswerAllQuestions) {
        return (<Redirect to="/QuizResults" />)
        // return (<p>{JSON.stringify(answeredToQuestions) }</p>)
    }

    return (
        <div>

        <CurrentQuestion
            triviaQuestion={triviaQuestion[currentQuestionId]}
                updateAnsweredQuestions={updateAnsweredQuestions} />
            <p>{currentQuestionId + 1 } of {triviaQuestionLength} </p>
        </div>
  );
}
export default QuizQuestion