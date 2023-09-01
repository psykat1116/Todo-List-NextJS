"use client";

// Type for the note object
export type Note = {
  id: number;
  text: string;
  complete: boolean;
  createTime: Date;
};

// Type for the context
export type NoteContextType = {
  notes: Note[];
  //call signature
  addNote: (text: string) => void;
  setNotes: (notes: Note[]) => void;
};

import { createContext } from "react";

const NoteContext = createContext<NoteContextType | null>(null);

export default NoteContext;