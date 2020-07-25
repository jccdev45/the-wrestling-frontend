import React from "react";

export default function WrestlerDetail({ wrestler }) {
  const {
    name,
    ringNames,
    dob,
    nationality,
    promotions,
    championships,
  } = wrestler;

  return (
    <table className="w-full m-4 bg-white border-separate table-fixed">
      <thead>
        <tr>
          <th>Name</th>
          <th>Ring Name(s)</th>
          <th>Date of Birth</th>
          <th>Nationality</th>
          <th>Promotion(s)</th>
          <th>Championship(s)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2 border">{name}</td>
          <td className="px-4 py-2 border">
            {ringNames.map((name) => (
              <div key={name}>{name}</div>
            ))}
          </td>
          <td className="px-4 py-2 border">{dob}</td>
          <td className="px-4 py-2 border">{nationality}</td>
          <td className="px-4 py-2 border">
            {promotions.map((promotion) => (
              <div key={promotion}>{promotion}</div>
            ))}
          </td>
          <td className="px-4 py-2 border">
            {championships.map((championship) => (
              <div key={championship}>{championship}</div>
            ))}
          </td>
        </tr>
      </tbody>
      {/* {ringNames.map((name) => (
        <span key={name} className="flex flex-col m-1 text-center">{name}</span>
      ))} */}
    </table>
  );
}
