import { fetchApi } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { Wall } from "../dto/Wall";

export const useWalls = () => {
  return useQuery({
    queryKey: ["walls"],
    queryFn: async () => {
      return fetchApi<Wall[]>("walls");
    },
  });
};
