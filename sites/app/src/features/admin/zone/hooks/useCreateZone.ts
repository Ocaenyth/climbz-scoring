import { fetchApi } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateZone, Zone } from "../dto/Zone";

export const useCreateZone = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newZone: CreateZone) => {
      return fetchApi<Zone[]>("zones", {
        method: "POST",
        json: newZone,
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["zones"],
      });
    },
  });
};
