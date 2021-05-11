import { useState } from "react"
import { Redirect } from "react-router-dom";
import styled from '@emotion/styled'

import userAnswerIs from "../../utils/userAnswerIs"
import CurrentQuestion from "../quizScreen/CurrentQuestion"
import ActionButton from "../ActionButton"
import NextArrowSVG from '../NextArrowSVG'

import { useAnsweredQuestions } from "../../context/userAnswerContext"
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

const QuestionLayout = styled.div`
    display:grid;
    row-gap: 15px;
    grid-template-rows: 1fr 50px 25px;
    align-items: center;
    justify-items: center;
`


const QuizQuestion = ({ triviaQuestion }: TriviaQuestionProps) => {

    const [currentQuestionId, setCurrentQuestionId] = useState(0);
    const [userInputAnswer, setUserInputAnswer] = useState('')
    const {answeredToQuestions,setAnsweredToQuestions} = useAnsweredQuestions()
    const triviaQuestionLength = triviaQuestion.length
    const didAnswerAllQuestions = currentQuestionId === triviaQuestionLength


    function confirmAnswer() {

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
        <QuestionLayout>
            <CurrentQuestion
                userInputAnswer={userInputAnswer}
                triviaQuestion={triviaQuestion[currentQuestionId]}
                handleAnsweredUpdate= {handleAnsweredUpdate}
            />
                <p>
                    {currentQuestionId + 1} of {triviaQuestionLength}
                </p>
            <ActionButton
                styleAttributes = {`border:none; background:none; cursor: pointer;`}
                isdisabled={userInputAnswer === ""}
                clickAction={confirmAnswer}
                name="Next buttons"
            >
            <NextArrowSVG isdisabled={userInputAnswer === ""}/>
            </ActionButton>
        </QuestionLayout>
  );
}
export default QuizQuestion