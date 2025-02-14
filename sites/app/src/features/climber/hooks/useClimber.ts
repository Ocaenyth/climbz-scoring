import { Climber } from "@/features/climber/dto/Climber";
import { fetchApi } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const useClimber = (climberId: string) => {
  return useQuery({
    queryKey: ["climbers", climberId],
    queryFn: async () => {
      return fetchApi<Climber>(`/climbers/${climberId}`);
    },
  });
};
