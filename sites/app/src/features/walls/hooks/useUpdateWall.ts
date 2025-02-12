import { fetchApi } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateWall, Wall } from "../dto/Wall";

export interface UpdateWallParam extends UpdateWall {
  id: string;
}

export const useUpdateWall = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...wall }: UpdateWallParam) => {
      return fetchApi<Wall[]>(`walls/${id}`, {
        method: "PATCH",
        json: wall,
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["walls"],
      });
    },
  });
};
