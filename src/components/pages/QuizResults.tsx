import styled from '@emotion/styled';

import { Redirect } from "react-router-dom";

import { useAnsweredQuestions } from "../../context/userAnswerContext"
import AnsweredQuestions from "../quizResults/AnsweredQuestions"
import ResultsHeader from '../quizResults/ResultsHeader'

import correctAnswerCount from "../../utils/correctAnswerCount"

const ResultsLayout = styled.div`
display:flex;
flex-flow:column;
`

const QuizResults = () => {
    const { answeredToQuestions, setAnsweredToQuestions } = useAnsweredQuestions()
    const totalQuestionCount = answeredToQuestions.length
    const didClearAnswer = 0 === totalQuestionCount
    const answeredCorrectly  = correctAnswerCount(answeredToQuestions)

    if(didClearAnswer || !totalQuestionCount) {
        return (<Redirect to="/" />)
    }
  


    return (
      <ResultsLayout>
        <ResultsHeader
          answeredCorrectly={answeredCorrectly }
          totalQuestionCount={totalQuestionCount }
          setAnsweredToQuestions={setAnsweredToQuestions }
         />
          <AnsweredQuestions userAnswers={answeredToQuestions} />
      
        </ResultsLayout>
    )
}
export default QuizResults