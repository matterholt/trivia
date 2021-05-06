import AnswerButton from "./AnswerButton"

interface AnswerProps{
    userInputAnswer:string,
        handleAnsweredUpdate :(users_answer :string)=>void
}

const TrueFalseQuestion = ({userInputAnswer,handleAnsweredUpdate }:AnswerProps) => {
    return (   
        <div>
              <AnswerButton
                label="True"
                selectValue={userInputAnswer }
                handleAnsweredUpdate={ handleAnsweredUpdate }
                 />

            <AnswerButton
                label="False"
                selectValue={userInputAnswer }
                handleAnsweredUpdate={ handleAnsweredUpdate }
                 />
        </div>
    )
}

export default TrueFalseQuestion