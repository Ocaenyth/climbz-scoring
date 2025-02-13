import { fetchApi } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateZone, Zone } from "../dto/Zone";

export interface UpdateZoneParam extends UpdateZone {
  id: string;
}

export const useUpdateZone = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...zone }: UpdateZoneParam) => {
      return fetchApi<Zone[]>(`zones/${id}`, {
        method: "PATCH",
        json: zone,
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["zones"],
      });
    },
  });
};
