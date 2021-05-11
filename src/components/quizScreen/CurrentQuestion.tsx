
import TrueFalseQuestion from "../quizScreen/TrueFalseQuestion"
import QuestionCard from "../quizScreen/QuestionCard"

interface AnswerProps{
    questionType: string,
    userInputAnswer:string,
    possibleAnswers: string[],
    handleAnsweredUpdate :(users_answer :string)=>void
}

const QuizAnswerFormat = ({userInputAnswer, questionType, possibleAnswers,handleAnsweredUpdate }: AnswerProps) => {
    // Controls the type of question layout that user has decided --Future Feature-- 

    if (questionType === "boolean"){
        return (
            <TrueFalseQuestion
                handleAnsweredUpdate={handleAnsweredUpdate}
                userInputAnswer={userInputAnswer} />
        )
    }

    return <p>Having difficulty formatting {questionType} question, please try again</p>

}


interface TriviaQuestionProps{
    triviaQuestion: {
        category: string,
        type: string,
        question : string,
        correct_answer: string,
        incorrect_answers: string[]
    }
    userInputAnswer :string,
    handleAnsweredUpdate:(users_answer :string)=>void
}


const CurrentQuestion = ({userInputAnswer, triviaQuestion,handleAnsweredUpdate }: TriviaQuestionProps) => {
    const { category, question, correct_answer, incorrect_answers, type } = triviaQuestion
    
    
    return(
        <QuestionCard category={category} question={question }>
            <QuizAnswerFormat
                userInputAnswer ={userInputAnswer}
                handleAnsweredUpdate={handleAnsweredUpdate }
                questionType={ type }
                possibleAnswers={[...incorrect_answers,correct_answer ] }
                 />
      </QuestionCard>
      
      )
}
export default CurrentQuestion;