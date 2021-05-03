
interface UserAnswers {
    userAnswers:{
    questionId: number,
    question: string,
    users_answer: string,
    correct_answer: string
    }[]
}
interface UserAnswer {
    userAnswerInput:{
    questionId: number,
    question: string,
    users_answer: string,
    correct_answer: string
    }
}


const Answered = ({userAnswerInput}:UserAnswer)=>{
    const { questionId, question, users_answer, correct_answer } = userAnswerInput
    return (
        <li key={questionId}>
            <p>{question}</p>
            <p>{users_answer}</p>
            <p>{correct_answer}</p>
        </li>
    )
}

const AnsweredQuestions = ({ userAnswers }:UserAnswers) => {
    const AnswerList = userAnswers.map((x) => { return (<Answered userAnswerInput={x} />) })
    return (
        {AnswerList}
    )
    

}
export default AnsweredQuestions