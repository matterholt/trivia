import { useReducer } from 'react'
import client from '../utils/apifetch'

const initialState = {
    triviaQuestions: [],
    status: 'idle', //pending, success, error
    error: '',
}
interface stateProp {
        triviaQuestions: any,
    status: string
    error: string,
}

type ACTIONTYPE =
    | { type: 'pending' }
    | { type: 'idle' }
    | { type: 'success', payload:any }
    | { type: 'error',payload:string }


function statusReducer(state:stateProp , action:ACTIONTYPE) {
    switch (action.type) {
        case 'idle': {
            return { ...state,  triviaQuestions: [], status: 'idle', error: '' }
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


    function fetchQuestion() {
        const triviaSettings = {
              triviaDifficulty: 'hard',
              questionAmount: 10,
            triviaType: 'boolean',
        }
        async function getTriviaQuestions() {
            dispatch({ type: 'pending' })
   
            client(triviaSettings).then(
                (triviaQuestions) => {
                    dispatch({
                        type: 'success',
                        payload: triviaQuestions['results'],
                    })
                },
                error => {
                    dispatch({ type: 'error', payload: error })
                }
            )
        }
        getTriviaQuestions()

    }


    return [data, fetchQuestion]
}

export default useTriviaData
