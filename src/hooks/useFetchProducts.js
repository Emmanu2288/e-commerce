import { useState, useEffect } from "react";

export const useFetchProducts = (fetchFn, deps = []) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle");

  const fetchData = async () => {
    setStatus("loading");
    try {
      const result = await fetchFn();
      setData(result);
      setStatus("ready");
    } catch (err) {
      console.error("Error al cargar productos:", err);
      setStatus("error");
    }
  };

  useEffect(() => {
    fetchData();
  }, deps);

  return { data, status, refetch: fetchData };
};