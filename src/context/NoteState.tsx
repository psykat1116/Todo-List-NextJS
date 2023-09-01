"use client";
import React, { useState } from "react";
import NoteContext, { Note } from "./NoteContext";

const NoteState = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>(():Note[] => {
    let newTodos = "[]";
    if(typeof window !== "undefined"){
      newTodos = localStorage.getItem("notes") || "[]";
    }
    return JSON.parse(newTodos) as Note[];
  });

  const addNote = (text: string): void => {
    if(text === ""){
      return;
    }
    const newNote: Note = {
      id: Math.floor(Math.random() * 10000),
      text,
      complete: false,
      createTime: new Date(),
    };
    localStorage.setItem("notes", JSON.stringify([newNote, ...notes]));
    setNotes([newNote, ...notes]);
  };

  return (
    <NoteContext.Provider value={{ addNote, notes, setNotes }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteState;
