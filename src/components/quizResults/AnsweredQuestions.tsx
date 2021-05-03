

interface UserAnswer {
    userAnswerInput:{
    questionId: number,
    question: string,
    users_answer: string,
    correct_answer: string,
    userDidAnswer :string
    }
}

const Answered = ({userAnswerInput}:UserAnswer)=>{
    const { questionId, question, users_answer, correct_answer, userDidAnswer } = userAnswerInput
    return (
        <li key={questionId}>
            <p>{question}</p>
            <p>{users_answer}</p>
            <p>{correct_answer}</p>
            <p>{userDidAnswer }</p>
        </li>
    )
}

interface UserAnswers {
    userAnswers:{
    questionId: number,
    question: string,
    users_answer: string,
        correct_answer: string,
    userDidAnswer :string
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