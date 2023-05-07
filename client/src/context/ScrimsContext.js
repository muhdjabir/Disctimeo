import { createContext, useReducer } from "react";

export const ScrimsContext = createContext();

export const scrimsReducer = (state, action) => {
    switch (action.type) {
      case 'SET_SCRIMS':
        return { 
          scrims: action.payload 
        }
      case 'CREATE_SCRIM':
        return { 
          scrims: [action.payload, ...state.scrims] 
        }
      case 'DELETE_SCRIM':
        return { 
          scrims: state.scrims.filter(w => w._id !== action.payload._id) 
        }
      case 'JOIN_SCRIM':
        const joinState = state.scrims.filter(w => w._id !== action.payload._id);
        return { 
          scrims: [action.payload, ...joinState]
        }
      case 'LEAVE_SCRIM':
        const leaveState = state.scrims.filter(w => w._id !== action.payload._id);
        return { 
          scrims: [action.payload, ...leaveState]
        }
      default:
        return state
    }
  }

export const ScrimsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(scrimsReducer, {
        scrims: null
    });

    return (
        <ScrimsContext.Provider value={{...state, dispatch }}>
            { children }
        </ScrimsContext.Provider>
    )
}