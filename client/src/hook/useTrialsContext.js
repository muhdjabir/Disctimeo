import { TrialsContext } from "../context/TrialsContext";
import { useContext } from "react";

export const useTrialsContext = () => {
  const context = useContext(TrialsContext);

  if(!context) {
    throw Error('useTrialsContext must be used inside an TrialsContextProvider');
  }

  return context;
}