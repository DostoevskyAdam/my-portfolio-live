import React, { useState, useEffect } from "react";
import Pages from "./pages";
import Whoops404 from "./pages/Errors";


// useFetch.js
export function useFetch(uri) {
  //create state variables
  const [gitData, setGitData] = useState();
  //initial loading state is true
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    if (!uri) return;
    fetch(uri)
      .then((gitData) => gitData.json())
      .then(setGitData)
      // after component loads, set loading state to false
      .then(() => setLoading(false))
      .catch(setError);
    // call useEffect on first render and when there's a new uri
  }, [uri]);

  return { loading, gitData, error };
}

//App.js, import { useFetch } from "./useFetch"
function App({ login }) {
  const uri = "https://gitconnected.com/v1/portfolio/";
  const { loading, gitData, error } = useFetch(
    `${uri}${login}`
  );
  if (loading) return <h1>Loading...</h1>;
  if (!gitData || error) return <Whoops404/>;
  return <Pages gitData={gitData} />;
}

export default App;
