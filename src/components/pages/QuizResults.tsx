
import { Redirect } from "react-router-dom";

import { useAnsweredQuestions } from "../../context/userAnswerContext"
import AnsweredQuestions from "../quizResults/AnsweredQuestions"
import ResultsContainer from '../quizResults/ResultsContainer'
import ActionButton from "../ActionButton"

import correctAnswerCount from "../../utils/correctAnswerCount"

const defaultButtonStyle = `
  padding: 1em 3.2em;
  text-transform: uppercase;
  border-radius: 5px;
  transition: scale 100ms ease-in-out;
  text-align: center;
  margin: 20px;
  background-color: var(--main-blue);
  color: white;
  border:none;
  &:hover {
    scale: 1.01;
    box-shadow: 6px 4px 7px #494949;
    background-color: var(--main-lite);
    color: var(--main-blue);
    cursor: pointer;
  }
  &:active{
    color: #fff;
    background-color: var(--main-ltBlue);
  }
`

const QuizResults = () => {
    const { answeredToQuestions, setAnsweredToQuestions } = useAnsweredQuestions()
    const totalQuestionCount = answeredToQuestions.length
    const didClearAnswer = 0 === totalQuestionCount
    const answeredCorrectly  = correctAnswerCount(answeredToQuestions)

    if(didClearAnswer) {
        return (<Redirect to="/" />)
    }

    // useEffect(() => {
    //     window.addEventListener('popstate', (event) => {
    //         alert("You message");
    //         });
    // },[])


    return (
      <div>
        <ResultsContainer>
          <div>
            
            <h2>Results Page</h2>
             <p>You scored {answeredCorrectly}/{totalQuestionCount}</p>
</div>
  
            <ActionButton
                styleAttributes = {defaultButtonStyle}
                isDisabled={false}
                clickAction={()=>setAnsweredToQuestions([])}
                name="PlayAgain"
                >PlayAgain </ActionButton>
                </ResultsContainer>
                <AnsweredQuestions userAnswers={answeredToQuestions} />
                <button onClick={()=>setAnsweredToQuestions([])}>Play Again</button>
      
        </div>
    )
}
export default QuizResults