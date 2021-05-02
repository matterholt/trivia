import { useState} from 'react'

import CurrentQuestion from "../quizScreen/CurrentQuestion"

const sampleData = [{
    category: "Entertainment:video",
    type: "boolean",
    difficulty: "hard",
    question : "Some random question 1 that is not false",
    correct_answer: "true",
    incorrect_answer: [ 'False']
},{
    category: "Entertainment:video---12",
    type: "boolean",
    difficulty: "hard",
    question : "Some random question 2 that is not false",
    correct_answer: "true",
    incorrect_answer: [ 'False']
},
]




const TriviaQuiz = () => {
    const DataFromContext = sampleData

    const [currentQuestionId, setCurrentQuestionId] = useState(0);

    // update the user input
    const [userAnsweredToQuestions, setUserAnsweredToQuestions] = useState([{
        question: "Some random question that is not false",
        correct_answer: "true",
        users_answer: "false"
    }])


    function updateAnsweredQuestions(userCurrentAnswer :{question: string, correct_answer: string,users_answer: string}) {
        // take the current displayed question, update user answer 3
        console.log('update user answer', userCurrentAnswer)
        setCurrentQuestionId(currentQuestionId + 1)
        // setUserAnsweredToQuestions(
        //     ([...userAnsweredToQuestions, userCurrentAnswer])
        // )
    }


    return (
        <CurrentQuestion
            triviaQuestion={DataFromContext[currentQuestionId]}
            updateAnsweredQuestions={updateAnsweredQuestions}/>
  );
}
export default TriviaQuiz