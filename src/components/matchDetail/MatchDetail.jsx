import React from "react";

export default function MatchDetail({ match }) {
  const {
    date,
    show,
    participants,
    typePrimary,
    typeSecondary,
    title,
    outcome,
  } = match;

  return (
    <table className="w-full m-4 bg-white border-separate table-fixed">
      <thead>
        <tr>
          <th>Date</th>
          <th>Show Name</th>
          <th>Participants</th>
          <th>Match Type</th>
          <th>Additional Type(s)</th>
          <th>Title(s)</th>
          <th>Outcome</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2 border">{date}</td>
          <td className="px-4 py-2 border">{show}</td>
          <td className="px-4 py-2 border">
            {participants.map((participant) => (
              <div key={participant}>{participant}</div>
            ))}
          </td>
          <td className="px-4 py-2 border">{typePrimary}</td>
          <td className="px-4 py-2 border">
            {typeSecondary.map((type) => (
              <div key={type}>{type}</div>
            ))}
          </td>
          <td className="px-4 py-2 border">
            {title.map((tyetal) => (
              <div key={tyetal}>{tyetal}</div>
            ))}
          </td>
          <td className="px-4 py-2 border">{outcome}</td>
        </tr>
      </tbody>
      {/* {ringNames.map((name) => (
        <span key={name} className="flex flex-col m-1 text-center">{name}</span>
      ))} */}
    </table>
  );
}
