

interface UserAnswer {
    userAnswerInput:{
        questionId: number,
        question: string,
        userDidAnswer: string,
        correctAnswer: string,
        userInputAnswer:string,
    }
}



const Answered = ({userAnswerInput}:UserAnswer)=>{
    const { questionId,
        question,
        userDidAnswer,
        correctAnswer,
        userInputAnswer } = userAnswerInput
    return (
        <li key={questionId}>
            <p>Q:{question}</p>
            <p>UA:{userInputAnswer}</p>
            <p>CA:{correctAnswer}</p>
            <p>iscorrect:{userDidAnswer }</p>
        </li>
    )
}

interface UserAnswers {
    userAnswers:{
        questionId: number,
        question: string,
        userDidAnswer: string,
        correctAnswer: string,
        userInputAnswer:string,
    }[]
}

const AnsweredQuestions = ({ userAnswers }:UserAnswers) => {
 
    return (
        <ul>
            {userAnswers.map((x) => <Answered userAnswerInput={x } />)}
        </ul>
        

    )
}
export default AnsweredQuestions