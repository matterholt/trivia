import styled from '@emotion/styled'

import ResultCard from './ResultCard'

interface UserAnswer {
    userAnswerInput: {
        questionId: number
        question: string
        userDidAnswer: string
        correctAnswer: string
        userInputAnswer: string
    }
}

const Question = styled.h3`
    grid-row: 1;
    grid-column: 1 / span 2;
    font-weight: 500;
`
type QResultProps = {
    isCorrect: boolean
}
const QuestionResult = styled.p<QResultProps>`
    grid-row: 2;
    grid-column: 1;
    font-weight: 800;
    text-transform: uppercase;
    color: ${(props) => (props.isCorrect ? '#4f5f4f;' : '#b51111')};
    font-size: 1rem;
`

const AnswersContainer = styled.div`
    grid-row: 2;
    grid-column: 2;
`

const QuestionResults = ({ userAnswerInput }: UserAnswer) => {
    const {
        questionId,
        question,
        userDidAnswer,
        correctAnswer,
        userInputAnswer,
    } = userAnswerInput

    const isCorrect = userDidAnswer === 'correct'

    return (
        <ResultCard key={questionId} isCorrect={isCorrect}>
            <Question> {question}</Question>

            <QuestionResult isCorrect={isCorrect}>
                {userDidAnswer}
            </QuestionResult>

            <AnswersContainer>
                {userDidAnswer === 'correct' ? null : (
                    <p>
                        Correct Answer :{' '}
                        <span style={{ fontWeight: 900 }}>{correctAnswer}</span>{' '}
                    </p>
                )}
                <p>
                    Your Answer:{' '}
                    <span style={{ fontWeight: 900 }}>{userInputAnswer}</span>
                </p>
            </AnswersContainer>
        </ResultCard>
    )
}

export default QuestionResults
