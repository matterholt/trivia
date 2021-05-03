import React, { useState } from 'react'


const AnswerContext = React.createContext(undefined);

function AnswerContextProvider({ children }) {

    const [answeredToQuestions, setAnsweredToQuestions] = useState([{
        question: "Some random question that is not false--0",
        correct_answer: "true",
        users_answer: "false"
        }]);

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

