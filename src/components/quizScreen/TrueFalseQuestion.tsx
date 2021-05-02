
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
                value="true"
                onClick ={()=> handleUpdate('true')}
                >True</button>
        
            <button
                name="answerFalse"
                value="false"
                type="button"
                onClick ={()=> handleUpdate('false')}
            >False</button>
        
        </div>
    )
}

export default TrueFalseQuestion