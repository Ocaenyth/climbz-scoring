import { fetchApi } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Zone } from "../dto/Zone";

export const useDeleteZone = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      return fetchApi<Zone[]>(`zones/${id}`, {
        method: "DELETE",
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["zones"],
      });
    },
  });
};
