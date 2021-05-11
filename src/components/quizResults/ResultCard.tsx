import styled from '@emotion/styled'

type CardProps = {
    isCorrect: boolean
}

const ResultCardStyle = styled.li<CardProps>`
    display: grid;
    background-color: ${(props) => (props.isCorrect ? '#bbe1bb' : '#f4c2c2')};
    margin-bottom: 10px;
    padding: 15px;
    font-size: 1rem;
    border-radius: 15px;
    min-width: 375px;
    width: min-content;
`

interface ResultCardProps {
    children: React.ReactNode
    isCorrect: boolean
    key: number
}
const ResultCard = ({ children, key, isCorrect }: ResultCardProps) => {
    return (
        <ResultCardStyle key={key} isCorrect={isCorrect}>
            {children}
        </ResultCardStyle>
    )
}
export default ResultCard
