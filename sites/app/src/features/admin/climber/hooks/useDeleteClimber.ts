import { fetchApi } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Climber } from "../dto/Climber";

export const useDeleteClimber = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      return fetchApi<Climber[]>(`climbers/${id}`, {
        method: "DELETE",
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["climbers"],
      });
    },
  });
};
