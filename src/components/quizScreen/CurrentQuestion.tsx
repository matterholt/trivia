import { useState} from 'react'

import TrueFalseQuestion from "../quizScreen/TrueFalseQuestion"
import QuestionCard from "../quizScreen/QuestionCard"

interface AnswerProps{
    questionType: string,
    possibleAnswers: string[],
    handleUpdate :(users_answer :string)=>void
}


const QuizAnswerFormat = ({ questionType, possibleAnswers,handleUpdate }: AnswerProps) => {
    // Controls the type of question layout that user has decided --Future Feature-- 

    if (questionType === "boolean"){
        return (
            <TrueFalseQuestion handleUpdate={ handleUpdate} possibleAnswers={possibleAnswers }/>
        )
    }

    
    return <p>Having difficulty formatting {questionType } question, please try again</p>

    
}

interface TriviaQuestionProps{
    triviaQuestion: {
        category: string,
        type: string,
        difficulty: string,
        question : string,
        correct_answer: string,
        incorrect_answer: string[]
    }
    updateAnsweredQuestions: (userCurrentAnswer: {question: string, correct_answer: string,users_answer: string})=>void
}
const CurrentQuestion = ({ triviaQuestion,updateAnsweredQuestions }: TriviaQuestionProps) => {
    const { category, question, correct_answer, incorrect_answer, type } = triviaQuestion
    
    const users_answer = "working"
    
    function handleUpdate(users_answer :string) {
        updateAnsweredQuestions({
        question,
        correct_answer,
        users_answer})
    }
    
    return(
        <QuestionCard category={category} question={question }>
            <QuizAnswerFormat
                handleUpdate={handleUpdate }
                questionType={ type }
                possibleAnswers={[...incorrect_answer,correct_answer ] }
                 />
      </QuestionCard>
      
      )
}
export default CurrentQuestion;