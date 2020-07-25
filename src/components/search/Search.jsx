import React from "react";

export default function Search(props) {
  return (
    <input
      type="search"
      name="search"
      id="search"
      className="px-5 py-3 bg-white rounded-lg"
      placeholder="Search..."
      value={props.value}
      onChange={(e) => props.handleChange(e)}
    />
  );
}
