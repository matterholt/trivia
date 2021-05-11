import styled from '@emotion/styled'
import { Redirect } from "react-router-dom";

import useTriviaData from '../../hooks/useTriviaData'

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


const Home = ({ setQuestion }: {setQuestion:any}) => {
  const triviaOptions = {
    triviaType: { type: "boolean", typeName: "True or False" },
    questionAmount: 10,
    triviaDifficulty: "hard"
  }
  const [state, fetchData]=useTriviaData()


  if (state.status === "idle") {
    return (
      <HomeCard>
        <h1 >Welcome to the Trivia Challenge</h1>
        <p>You will be precented with {triviaOptions.questionAmount} {triviaOptions.triviaType.typeName} questions</p>
        <button onClick={fetchData(triviaOptions)}>Begin</button>
        <p>Can you score 100%</p>
      </HomeCard>
    )
  };
  if (state.status === "pending") {
    <HomeCard>
      <h2>Getting Questions Ready</h2>
    </HomeCard>
  }
  if (state.status === "success") {
    console.log(state.triviaQuestions)

setQuestion(state.triviaQuestions)
   return <Redirect to="/QuizQuestion" />
  }

  return null
};

export default Home;
