"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Navbar = () => {

  let seacrhParams = useSearchParams();
  let type: string = seacrhParams.get("todos") || "all";

  return (
    <nav>
      <Link href="/" className={type === "all" ? "active" : ""}>
        All
      </Link>
      <Link href="/?todos=active" className={type === "active" ? "active" : ""}>
        Active
      </Link>
      <Link href="/?todos=completed" className={type === "completed" ? "active" : ""}>
        Completed
      </Link>
    </nav>
  );
};

export default Navbar;
