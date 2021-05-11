import styled from "@emotion/styled"

interface questionCardProps {
    children: JSX.Element,
    category :string,
    question: string
}

const QuestionStyleCard = styled.div`
padding: 15px 25px;
border-radius: 15px;
max-width:385px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: rgba(255, 255, 255, .7);
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);
`

const QuestionCard = ({ category, question, children }: questionCardProps) =>{
return(
    <QuestionStyleCard>
        <h2>{ category}</h2>
        <p>{question}</p>
        { children}
    </QuestionStyleCard>
)}
export default QuestionCard