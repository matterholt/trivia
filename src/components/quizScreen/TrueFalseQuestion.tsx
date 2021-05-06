import AnswerButton from "./AnswerButton"
import styled from "@emotion/styled"

interface AnswerProps{
    userInputAnswer:string,
        handleAnsweredUpdate :(users_answer :string)=>void
}

const AnswerContainer = styled.div`
display:flex;
justify-content: space-evenly;
width: 100%;
`

const TrueFalseQuestion = ({userInputAnswer,handleAnsweredUpdate }:AnswerProps) => {
    return (   
        <AnswerContainer>
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
        </AnswerContainer>
    )
}

export default TrueFalseQuestion