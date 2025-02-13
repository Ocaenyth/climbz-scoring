import { fetchApi } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { Climber } from "../dto/Climber";

export const useClimbers = () => {
  return useQuery({
    queryKey: ["climbers"],
    queryFn: async () => {
      return fetchApi<Climber[]>("climbers");
    },
  });
};
