import React, { useState, useContext } from "react";
import NoteContext from "@/context/NoteContext";
import { NoteContextType } from "@/context/NoteContext";

const AddTodo = (): React.ReactElement => {
  //importing the context and handling the null case
  const context = useContext<NoteContextType | null>(NoteContext);
  if(context === null){
    throw new Error("Context is null");
  }
  const { addNote } = context;

  // state for the input text field
  const [text, setText] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // function to handle the form submission
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNote(text);
    setText("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        id="text"
        name="text"
        value={text}
        autoFocus
        onChange={handleChange}
        placeholder="Enter Your Name Here"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
