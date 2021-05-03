import React, { useState } from 'react'

interface QuestionState{
    question: string,
    correct_answer: string,
    users_answer: string
}
type Dispatch = (question: QuestionState) => void

const AnswerContext = React.createContext<QuestionState[] | []>([]);

function AnswerContextProvider({ children }:{children: JSX.Element| JSX.Element[]}) {

    const [answeredToQuestions, setAnsweredToQuestions] = useState<QuestionState[] | []>([{
        question: "Some random question that is not false--0",
        correct_answer: "true",
        users_answer: "false"
        }]);
    


        return (
          <AnswerContext.Provider value={answeredToQuestions}>
            {children}
          </AnswerContext.Provider>
    );
}
        
function useAnsweredQuestions() {
    const context = React.useContext < QuestionState[]>(AnswerContext);
    if (context === undefined) {
        throw new Error("useCount must be used within a CountProvider");
    }
    return context;
}

export { AnswerContextProvider, useAnsweredQuestions };