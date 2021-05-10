
import ResultsContainer from './ResultsContainer'
    import ActionButton from "../ActionButton"


interface ResultsHeaderProps{
    answeredCorrectly : number
    totalQuestionCount: number  
    setAnsweredToQuestions: ([])=> void
}
const defaultButtonStyle = `
grid-column: 2;
grid-row: 1 / span2;
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
const ResultsHeader = ({answeredCorrectly,totalQuestionCount ,setAnsweredToQuestions}:ResultsHeaderProps) => {
    return(
<ResultsContainer>
            <h2>Results Page</h2>
             <p>You scored {answeredCorrectly}/{totalQuestionCount}</p>
            <ActionButton
                styleAttributes = {defaultButtonStyle}
                isDisabled={false}
                clickAction={()=>setAnsweredToQuestions([])}
                name="Play Again"
                >Play<br/> Again </ActionButton>
        </ResultsContainer>
    )
}
export default ResultsHeader