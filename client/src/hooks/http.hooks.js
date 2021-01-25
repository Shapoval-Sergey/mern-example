import { useCallback, useState } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setLoading(true);
      try {
        const response = await fetch(url, { method, body, headers });
        const data = response.json();

        if (!response.ok) {
          throw new Error(data.message || "Что-то пошло не так");
        }

        setLoading(false);

        return data;
      } catch (error) {
        setLoading(false);
        setError(error.message);
        throw error;
      }
    },
    [],
  );

  const clearError = () => setError(null);
  return { loading, request, error, clearError };
};
