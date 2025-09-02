import { useState, useEffect } from "react";
import { fetchEarthquakes } from "../api/earthquake";

export default function useEarthquakes() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEarthquakes()
      .then((quakes) => setData(quakes))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
