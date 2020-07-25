import React, { useState } from "react";
import Layout from "../components/shared/layout";
import useFetchData from "../util/hooks/useFetchData";
import Search from "../components/search/Search";
import Loading from "../components/loading/Loading";
import WrestlerDetail from "../components/wrestlerDetail/WrestlerDetail";

export default function Wrestlers() {
  const path = "/wrestlers";
  const [search, setSearch] = useState("");
  const { data, loading, error } = useFetchData(path);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const wrestlerMap = data.map((wrestler) => (
    <WrestlerDetail key={wrestler._id} wrestler={wrestler} />
  ));

  return (
    <Layout>
      <div style={{ display: `grid`, placeItems: `center` }}>
        <Search search={search} handleChange={(e) => handleChange(e)} />
        {loading && <Loading />}
        {error && <h1>There was an error please refresh.</h1>}
        {wrestlerMap}
      </div>
    </Layout>
  );
}
