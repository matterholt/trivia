import {useReducer} from 'react'


const initialState = {
  triviaQuestions: [],
    status: "idle", //pending, success, error
    error : null
}


type ActionType =
  | { type: 'idle' }
  | { type: 'pending' }
  | { type: 'success'; payload: string }
  | { type: 'error'; payload: string }

  
function statusReducer(state: typeof initialState, action:ActionType) {
  switch (action.type) {
    case 'idle': {
      return {...state, triviaQuestions: [], status:'idle', error:null}
    }
    case "pending": {
      return {...state, status:'pending'}
    }
    case "success": {
      return { ...state, triviaQuestions: action.payload ,status:'success'}
    }
    case "error": {
      return { ...state ,status:'error',error:action.payload}
      }
    default: {
      throw new Error(`Unhandled type`)
    }
  }
  
}

interface triviaOptionsProps{
        triviaType: { type: string, typeName: string },
    questionAmount: number,
    triviaDifficulty:string
}

function useTriviaData() {
      const [data, dispatch] = useReducer(statusReducer, initialState)


    function fetchQuestion(triviaOptions:triviaOptionsProps) {
      const { triviaType, questionAmount, triviaDifficulty } = triviaOptions;
      const API = `https://opentdb.com/api.php?amount=${questionAmount}&difficulty=${triviaDifficulty}&type=${triviaType.type}`;

      async function getTriviaQuestions() {
        dispatch({ type: "pending" });
        try {
          const response = await fetch(API);
          if (response.ok) {
            const json = await response.json();
            console.log(json);
            dispatch({ type: "success", payload: json["results"] });
          }
          dispatch({ type: "success" });
        } catch (error) {
          dispatch({ type: "error", payload: error });
        }
      }
      getTriviaQuestions();
    }



    return [data, fetchQuestion]
}

export default useTriviaData