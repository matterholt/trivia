import {useState} from 'react'
import styled from '@emotion/styled'

import LinkButton from '../LinkButton'

const HomeCard = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: var(--main-Color-dark);
  background: linear-gradient(137deg, #f1f1f1, #afafaf);
  padding: 20px;
  margin: 5px;
  border-radius: 10px;
  background-color: white;
  width: 80vw;
`


const Home = () => {
  const [triviaOptions, setTriviaOptions] = useState(
    {
      triviaType: { type: "boolean", typeName: "True or False" },
      questionAmount: 10,
      triviaDifficulty : "hard"
    })
  
  return(
  <HomeCard>
      <h1 >Welcome to the Trivia Challenge</h1>
      <p>You will be precented with {triviaOptions.questionAmount} {triviaOptions.triviaType.typeName } questions</p>
      <p>Can you score 100</p>
     <LinkButton linkText="Begin" toLink="/QuizQuestion"/>
  </HomeCard>
)};
export default Home;
