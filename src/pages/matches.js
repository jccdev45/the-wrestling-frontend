import React, { useState } from "react";
import Layout from "../components/shared/layout";
import useFetchData from "../util/hooks/useFetchData";
import Search from "../components/search/Search";
import Loading from "../components/loading/Loading";
import MatchDetail from "../components/matchDetail/MatchDetail";

export default function Matches() {
  const path = "/matches";
  const [search, setSearch] = useState("");
  const { data, loading, error } = useFetchData(path, search);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const matchMap = data.map((match) => (
    <MatchDetail key={match._id} match={match} />
  ));

  return (
    <Layout>
      <div style={{ display: `grid`, placeItems: `center` }}>
        <Search search={search} handleChange={(e) => handleChange(e)} />
        {loading && <Loading />}
        {error && <h1>There was an error please refresh.</h1>}
        {matchMap}
      </div>
    </Layout>
  );
}
