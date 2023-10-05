"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const Navbar = () => {
  const searchParams = useSearchParams();
  const todosFilter = searchParams.get("todo");
  return (
    <nav>
      <Link href="/" className={todosFilter === null ? "active" : ""}>
        All
      </Link>
      <Link
        href="/?todo=active"
        className={todosFilter === "active" ? "active" : ""}
      >
        Active
      </Link>
      <Link
        href="/?todo=completed"
        className={todosFilter === "completed" ? "active" : ""}
      >
        Completed
      </Link>
    </nav>
  );
};

export default Navbar;
