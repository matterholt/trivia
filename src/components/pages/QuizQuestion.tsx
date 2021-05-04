import { useState } from 'react'
import { Redirect } from "react-router-dom";

import userAnswerIs from '../../utils/userAnswerIs'

import CurrentQuestion from "../quizScreen/CurrentQuestion"

import {useAnsweredQuestions } from "../../context/userAnswerContext"
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
    const [userInputAnswer, setUserInputAnswer] = useState('')

    const {answeredToQuestions,setAnsweredToQuestions} = useAnsweredQuestions()
    const triviaQuestionLength = triviaQuestion.length
    const didAnswerAllQuestions = currentQuestionId === triviaQuestionLength


    function confirmAnswer() {
        console.log('fired')
        const { question, correct_answer, incorrect_answer } = triviaQuestion[currentQuestionId]

        const userDidAnswer = userAnswerIs(userInputAnswer,incorrect_answer )
        const userAnsweredQuestions = {userDidAnswer, correctAnswer: correct_answer, question, questionId:currentQuestionId, userInputAnswer  }

        setCurrentQuestionId(currentQuestionId + 1)
        setUserInputAnswer("")
        setAnsweredToQuestions(
            ([...answeredToQuestions,userAnsweredQuestions])
        )
    }



    if (didAnswerAllQuestions) {
        return (<Redirect to="/QuizResults" />)
    }

    function handleAnsweredUpdate(input:string) {
        setUserInputAnswer(input )
    }

    return (
        <div>
        <CurrentQuestion
                triviaQuestion={triviaQuestion[currentQuestionId]}
                handleAnsweredUpdate= {handleAnsweredUpdate}
            />
            <button
                disabled={userInputAnswer === "" ?  true : false }
                onClick={confirmAnswer}>NEXT</button>
            <p>
                {currentQuestionId + 1} of {triviaQuestionLength}
            </p>
        </div>
  );
}
export default QuizQuestion