import { fetchApi } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  CompetitionCategory,
  CreateCompetitionCategory,
} from "../dto/CompetitionCategory";

export const useCreateCompetitionCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newCompetitionCategory: CreateCompetitionCategory) => {
      return fetchApi<CompetitionCategory[]>("competition-categories", {
        method: "POST",
        json: newCompetitionCategory,
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["competitionCategories"],
      });
    },
  });
};
