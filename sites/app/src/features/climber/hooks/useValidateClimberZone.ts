import { fetchApi } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ValidateZones } from "../dto/ValidateZone";

export const useValidateClimberZone = (climberId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (validateZones: ValidateZones) => {
      return fetchApi(`climbers/${climberId}/validateZones`, {
        method: "POST",
        json: validateZones,
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["routes"],
      });
    },
  });
};
