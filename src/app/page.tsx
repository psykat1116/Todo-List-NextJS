"use client";
import React from "react";
import AddTodo from "@/components/AddTodo";
import Notes from "@/components/Notes";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <main>
        <h1>TODO - NEXT + TYPESCRIPT</h1>
        <Navbar/>
        <AddTodo/>
        <Notes/>
    </main>
  );
};

export default page;
