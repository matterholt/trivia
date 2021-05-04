import React, { useState } from 'react'


const AnswerContext = React.createContext(undefined);

function AnswerContextProvider({ children }) {


    const [answeredToQuestions, setAnsweredToQuestions] = useState([
      {
        userDidAnswer: "correct",
          correctAnswer: "True",
          question: "Some random question 1 that is not false",
         questionId: 1000,
          userInputAnswer: "True"
      },
    ]);

        return (
          <AnswerContext.Provider value={{answeredToQuestions,setAnsweredToQuestions}}>
            {children}
          </AnswerContext.Provider>
    );
}
        
function useAnsweredQuestions() {
    const context = React.useContext(AnswerContext);
    if (context === undefined) {
        throw new Error(
          "useAnsweredQuestions must be used within a AnswerContextProvider"
        );
    }
    return context;
}

export { AnswerContextProvider, useAnsweredQuestions };

