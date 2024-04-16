import { useQuery } from "react-query";
import { useMemo } from "react";
import { ParamsModelsData } from "./type";

const baseUrl = " http://localhost:8080";

async function fetchParams() {
  const response = await fetch(`${baseUrl}/params`);
  if (!response.ok) {
    throw new Error("Failed to fetch params");
  }
  return response.json();
}

async function fetchModels() {
  const response = await fetch(`${baseUrl}/models`);
  if (!response.ok) {
    throw new Error("Failed to fetch models");
  }
  return response.json();
}

export function useParamsModels() {
  const { data, isLoading, isError } = useQuery<ParamsModelsData>(
    "paramsModels",
    async () => {
      const [params, models] = await Promise.all([
        fetchParams(),
        fetchModels(),
      ]);
      return { params, models };
    }
  );

  const memoizedData = useMemo(() => {
    if (!data) return { params: [], models: [] };
    return data;
  }, [data]);

  return { paramsModels: memoizedData, isLoading, isError };
}
