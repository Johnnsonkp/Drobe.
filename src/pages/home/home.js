import "./home.scss";

import React, { useEffect, useState } from "react";

import { Directory } from "../../components/directory/Directory";
import { Link } from "react-router-dom";
import { LoadingSpinner } from "../../components/common/loadSpinner/loadSpinner";
import { fetchData } from "../../routes/localFetchCalls";

export const HomePage = (props) => {
  const [data, setFetchedData] = useState(null);

  const refresh = async () => {
    await fetchData(window.location.pathname).then((newData) => {
      setFetchedData(newData);
    });
  };

  useEffect(() => {
    refresh();
  }, []);

  const loaded = () => {
    return (
      <div>
        <Link to="/c/">Categories</Link>
        <Directory data={data} />
      </div>
    );
  };
  return data ? loaded() : <LoadingSpinner />;
};
