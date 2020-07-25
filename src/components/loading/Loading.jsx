import React from "react";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 mx-auto my-10">
      <div className="w-20 h-20 ease-linear border-8 border-t-8 rounded-full lg:w-64 lg:h-64 loader"></div>
      <div className="w-20 h-20 ease-linear border-8 border-t-8 rounded-full opacity-75 lg:w-64 lg:h-64 loader2"></div>
    </div>
  );
}
