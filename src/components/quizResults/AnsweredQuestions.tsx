import styled from '@emotion/styled'


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

// copied from another place .. should 
const ResultContainer = styled.ul`
padding: 15px 25px;
border-radius: 15px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: rgba(255, 255, 255, .7);
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);
list-style:none;
`;

const AnsweredQuestions = ({ userAnswers }:UserAnswers) => {
 
    return (
        <ResultContainer>
            {userAnswers.map((x) => <Answered userAnswerInput={x } />)}
        </ResultContainer>
        

    )
}
export default AnsweredQuestions