import styled from '@emotion/styled'
import QuestionResults from './QuestionResults'

interface UserAnswers {
    userAnswers: {
        questionId: number
        question: string
        userDidAnswer: string
        correctAnswer: string
        userInputAnswer: string
    }[]
}

// copied from another place .. should
const ResultContainer = styled.ul`
    padding: 25px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.8);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    list-style: none;
`

const AnsweredQuestions = ({ userAnswers }: UserAnswers) => {
    return (
        <ResultContainer>
            {userAnswers.map((x) => (
                <QuestionResults key={x.questionId} userAnswerInput={x} />
            ))}
        </ResultContainer>
    )
}
export default AnsweredQuestions
