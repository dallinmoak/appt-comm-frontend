import "./App.css";

import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000");
        const data = await response.text();
        setMessage(data);
      } catch (e) {
        setError(e.message);
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <div>loading data...</div>}
      {message && <div>{message}</div>}
      {error && <div>{error}</div>}
    </>
  );
}

export default App;
