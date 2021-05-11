import { useReducer } from 'react'

const initialState = {
    triviaQuestions: [],
    status: 'idle', //pending, success, error
    error: '',
}

function statusReducer(state, action) {
    switch (action.type) {
        case 'idle': {
            return { ...state, triviaQuestions: [], status: 'idle', error: '' }
        }
        case 'pending': {
            return { ...state, status: 'pending' }
        }
        case 'success': {
            return {
                ...state,
                triviaQuestions: action.payload,
                status: 'success',
            }
        }
        case 'error': {
            return { ...state, status: 'error', error: action.payload }
        }
        default: {
            throw new Error(`Unhandled type`)
        }
    }
}

function useTriviaData() {
    const [data, dispatch] = useReducer(statusReducer, initialState)

    function fetchQuestion(triviaOptions) {
        const { triviaType, questionAmount, triviaDifficulty } = triviaOptions
        const API = `https://opentdb.com/api.php?amount=${questionAmount}&difficulty=${triviaDifficulty}&type=${triviaType.type}`

        async function getTriviaQuestions() {
            dispatch({ type: 'pending' })
            try {
                const response = await fetch(API)
                if (response.ok) {
                    const json = await response.json()
                    console.log(json)
                    dispatch({ type: 'success', payload: json['results'] })
                }
            } catch (error) {
                dispatch({ type: 'error', payload: error })
            }
        }

        getTriviaQuestions()
    }

    return [data, fetchQuestion]
}

export default useTriviaData
