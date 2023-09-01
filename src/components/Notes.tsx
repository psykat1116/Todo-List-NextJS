"use client";
import React, { useContext } from "react";
import { useSearchParams } from "next/navigation";
import NoteContext, { Note } from "@/context/NoteContext";

const Notes = () => {
  //importing the context and handling the null case
  const context = useContext(NoteContext);
  if (context === null) {
    throw new Error("Context is null");
  }
  const { notes, setNotes } = context;

  //filtering the notes based on the complete property
  let filterNotes: Note[] = notes;
  let seacrhParams = useSearchParams();
  let type: string = seacrhParams.get("todos") || "all";
  if(type === "active"){
    filterNotes = filterNotes.filter((note: Note) => !note.complete);
  }
  else if(type === "completed"){
    filterNotes = filterNotes.filter((note: Note) => note.complete);
  }

  //toggle complete function for checkbox
  const toggleComplete = (id: number): void => {
    const newNotes = notes.map((note: Note) => {
      if (note.id === id) {
        return {
          ...note,
          complete: !note.complete,
        };
      }
      return note;
    });
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  //delete note function
  const handleDelete = (id: number): void => {
    const newNotes = notes.filter((note: Note) => note.id !== id);
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  return (
    <ul>
      {filterNotes.map((note: Note) => (
        <li key={note.id}>
          <input
            type="checkbox"
            id={`todo-${note.id}`}
            checked={note.complete}
            onChange={() => toggleComplete(note.id)}
          />
          <label htmlFor={`todo-${note.id}`}>{note.text}</label>
          {note.complete && (
            <button
              onClick={() => handleDelete(note.id)}
              id="deletebtn"
              type="button"
            >
              delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Notes;
