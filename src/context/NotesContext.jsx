import { createContext } from "react";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const initialNotesState = {
    notes: [],
    archives: [],
  };
  const notesReducer = (state, { type, payload }) => {
    switch (type) {
      case "":
        return state;
      default:
        return state;
    }
  };
  const [notesState, notesStateDispatch] = useReducer(
    notesReducer,
    initialNotesState
  );
  return (
    <NotesContext.Provider value={{ notesState, notesStateDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error(`use useNotes must be used inside a context provider`);
  }
  return context;
};
