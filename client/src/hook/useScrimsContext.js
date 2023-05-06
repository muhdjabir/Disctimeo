import { ScrimsContext } from "../context/ScrimsContext";
import { useContext } from "react";

export const useScrimsContext = () => {
  const context = useContext(ScrimsContext);

  if(!context) {
    throw Error('useScrimsContext must be used inside an ScrimsContextProvider');
  }

  return context;
}