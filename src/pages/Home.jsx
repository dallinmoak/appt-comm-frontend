import { useEffect, useState } from "react";
import CommType from "../components/Type";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_BACKEND_URL);
        const data = await response.json();
        setTypes(data);
      } catch (e) {
        setError(e.message);
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const [types, setTypes] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const typesElements = (
    <>
      <h2>Communication Types</h2>
      <ul>
        {types?.map((type) => {
          return <CommType key={type._id} type={type} />;
        })}
      </ul>
    </>
  );

  return (
    <div>
      <h1>Home Page</h1>
      {loading && <div>loading data...</div>}
      {types && typesElements}
      {error && <div>{error}</div>}
    </div>
  );
}
