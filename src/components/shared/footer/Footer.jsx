import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-400 p-5 flex justify-between">
      <div className="flex-col md:flex-row">
        <span className="p-1">Creation & Design: Jordan Cruz-Correa</span>
        <span className="p-1">&copy; {new Date().getFullYear()}</span>
      </div>
      <div>
        <span>link</span>
      </div>
    </footer>
  );
}
