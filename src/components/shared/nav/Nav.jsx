import React from "react";
import { Link } from "gatsby";

export default function Nav() {
  return (
    <nav className="sticky top-0 flex items-center p-5 bg-blue-400 justify-evenly">
      <Link to="/">The Wrestling</Link>
      {/* <span>
        <input
          type="search"
          name="search"
          id="search"
          className="px-5 py-3 bg-white rounded-full"
          placeholder="Search"
        />
      </span> */}
      <span>
        <button className="px-3 py-2 mx-1 bg-red-300 rounded-lg">Login</button>
        <button className="px-3 py-2 mx-1 bg-red-300 rounded-lg">
          Register
        </button>
      </span>
    </nav>
  );
}
