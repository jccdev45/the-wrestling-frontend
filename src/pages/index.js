import React from "react";
import { Link } from "gatsby";
import Layout from "../components/shared/layout";

export default function Landing() {
  return (
    <Layout>
      <div
        className="w-2/3 p-10 mx-auto bg-gray-400"
        style={{ display: `grid`, placeItems: `center` }}
      >
        You've landed you fucken mark
        <span className="flex">
          <Link to="/wrestlers">
            <button className="mx-3 rounded-lg p-4 bg-green-100">Wrestlers</button>
          </Link>
          <Link to="/matches">
            <button className="mx-3 rounded-lg p-4 bg-green-100">Matches</button>
          </Link>
        </span>
      </div>
    </Layout>
  );
}
