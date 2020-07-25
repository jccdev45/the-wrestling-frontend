import React, { useState } from "react";
import Layout from "../components/shared/layout";
import useFetchData from "../util/hooks/useFetchData";
import Search from "../components/search/Search";
import Loading from "../components/loading/Loading";
import WrestlerDetail from "../components/wrestlerDetail/WrestlerDetail";

export default function Wrestlers() {
  const path = "/wrestlers";
  const { data, loading, error } = useFetchData(path);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const wrestlerMap = () => {
    let filtered = data.filter((wrestler) => {
      if (wrestler.name.toLowerCase().includes(search.toLowerCase())) {
        return wrestler;
      }
      if (wrestler.dob.toLowerCase().includes(search.toLowerCase())) {
        return wrestler;
      }
      if (wrestler.nationality.toLowerCase().includes(search.toLowerCase())) {
        return wrestler;
      }
    });

    return filtered.map((wrestler) => (
      <WrestlerDetail key={wrestler._id} wrestler={wrestler} />
    ));
  };

  return (
    <Layout>
      <div style={{ display: `grid`, placeItems: `center` }}>
        <Search search={search} handleChange={(e) => handleChange(e)} />
        {loading && <Loading />}
        {error && <h1>There was an error please refresh.</h1>}
        {data.length ? wrestlerMap() : ""}
      </div>
    </Layout>
  );
}
