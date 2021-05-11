import React, { useState } from 'react'

const AnswerContext = React.createContext(undefined)

function AnswerContextProvider({ children }) {
    const [answeredToQuestions, setAnsweredToQuestions] = useState([])
    return (
        <AnswerContext.Provider
            value={{ answeredToQuestions, setAnsweredToQuestions }}
        >
            {children}
        </AnswerContext.Provider>
    )
}

function useAnsweredQuestions() {
    const context = React.useContext(AnswerContext)
    if (context === undefined) {
        throw new Error(
            'useAnsweredQuestions must be used within a AnswerContextProvider'
        )
    }
    return context
}

export { AnswerContextProvider, useAnsweredQuestions }
