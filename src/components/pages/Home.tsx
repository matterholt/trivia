import {useState} from 'react'
import styled from '@emotion/styled'

import LinkButton from '../LinkButton'

const HomeCard = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding:10px 30px;
  margin: 5px;
  border-radius: 10px;
  background: rgba(255, 255, 255, .7);
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px);
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
     <LinkButton linkText="Begin" toLink="/QuizQuestion"/>
      <p>Can you score 100%</p>
  </HomeCard>
)};
export default Home;
