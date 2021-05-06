
interface questionCardProps {
    children: JSX.Element,
    category :string,
    question: string
}
const QuestionCard = ({ category, question, children }: questionCardProps) =>{
return(
    <div>
        <h2>{ category}</h2>
            <p>{question}</p>
            <div>
            { children}
            </div>
    </div>
)}
export default QuestionCard