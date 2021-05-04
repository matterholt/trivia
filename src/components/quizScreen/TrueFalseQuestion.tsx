
interface AnswerProps{
    possibleAnswers: string[],
        handleAnsweredUpdate :(users_answer :string)=>void
}

const TrueFalseQuestion = ({possibleAnswers,handleAnsweredUpdate }:AnswerProps) => {
    return (
                
        <div>
            <button
                name="answerTrue"
                type="button"
                value="True"
                onClick ={()=> handleAnsweredUpdate('True')}
                >True</button>
        
            <button
                name="answerFalse"
                value="False"
                type="button"
                onClick ={()=> handleAnsweredUpdate('False')}
            >False</button>
        </div>
    )
}

export default TrueFalseQuestion