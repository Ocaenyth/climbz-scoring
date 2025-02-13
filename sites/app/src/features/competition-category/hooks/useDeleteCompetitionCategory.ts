import { fetchApi } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CompetitionCategory } from "../dto/CompetitionCategory";

export const useDeleteCompetitionCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      return fetchApi<CompetitionCategory[]>(`competition-categories/${id}`, {
        method: "DELETE",
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["competitionCategories"],
      });
    },
  });
};
