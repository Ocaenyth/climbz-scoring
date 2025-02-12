import { fetchApi } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Climber, CreateClimber } from "../dto/Climber";

export const useCreateClimber = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newClimber: CreateClimber) => {
      return fetchApi<Climber[]>("climbers", {
        method: "POST",
        json: newClimber,
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["climbers"],
      });
    },
  });
};
