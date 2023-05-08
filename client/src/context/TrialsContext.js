import { createContext, useReducer } from "react";

export const TrialsContext = createContext();

export const trialsReducer = (state, action) => {
    switch (action.type) {
      case 'SET_TRIALS':
        return { 
          trials: action.payload 
        }
      case 'CREATE_TRIAL':
        return { 
          trials: [action.payload, ...state.trials] 
        }
      case 'DELETE_TRIAL':
        return { 
          trials: state.trials.filter(w => w._id !== action.payload._id) 
        }
      case 'JOIN_TRIAL':
        const joinState = state.trials.filter(w => w._id !== action.payload._id);
        return { 
          trials: [action.payload, ...joinState]
        }
      case 'LEAVE_TRIAL':
        const leaveState = state.trials.filter(w => w._id !== action.payload._id);
        return { 
          trials: [action.payload, ...leaveState]
        }
      default:
        return state
    }
  }

export const TrialsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(trialsReducer, {
        trials: null
    });

    return (
        <TrialsContext.Provider value={{...state, dispatch }}>
            { children }
        </TrialsContext.Provider>
    )
}