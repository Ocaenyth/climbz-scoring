import { fetchApi } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Climber, UpdateClimber } from "../dto/Climber";

export interface UpdateClimberParam extends UpdateClimber {
  id: string;
}

export const useUpdateClimber = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...climber }: UpdateClimberParam) => {
      return fetchApi<Climber[]>(`climbers/${id}`, {
        method: "PATCH",
        json: climber,
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["climbers"],
      });
    },
  });
};
