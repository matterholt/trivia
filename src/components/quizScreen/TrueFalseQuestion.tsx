
interface AnswerProps{
    possibleAnswers: string[],
        handleUpdate :(users_answer :string)=>void
}

const TrueFalseQuestion = ({possibleAnswers,handleUpdate }:AnswerProps) => {
    return (
                
        <div>
            <button
                name="answerTrue"
                type="button"
                value="True"
                onClick ={()=> handleUpdate('True')}
                >True</button>
        
            <button
                name="answerFalse"
                value="False"
                type="button"
                onClick ={()=> handleUpdate('False')}
            >False</button>
        </div>
    )
}

export default TrueFalseQuestion