import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const [itemId, setItemId] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      setMethod(method);
    }

    if (method === "DELETE") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json"
        }
      });

      setItemId(data);
      setMethod(method);
    }
  };

  useEffect(() => {
    const fetchData = async () => {

      setLoading(true);

      try {
        const res = await fetch(url);

        const json = await res.json();

        setData(json);
      } catch (error) {
        setError(error.message);
      }

      setLoading(false);

    };

    fetchData();
  }, [url]);

  useEffect(() => {
    const httpRequest = async () => {

      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        const json = await res.json();

        setCallFetch(json);
      }

      if (method === "DELETE") {
        const deleteUrl = url + `/${itemId}`;
        let fetchOptions = [deleteUrl, config];

        const res = await fetch(...fetchOptions);

        const json = await res.json();

        setCallFetch(json);
      }

      const res = await fetch(url);

      const json = await res.json();

      setData(json);

    };

    httpRequest();
  }, [config, method, url, itemId]);

  return { data, httpConfig, callFetch, loading, error };
};