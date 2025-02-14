import { fetchApi } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  CompetitionCategory,
  UpdateCompetitionCategory,
} from "../dto/CompetitionCategory";

export interface UpdateCompetitionCategoryParam
  extends UpdateCompetitionCategory {
  id: string;
}

export const useUpdateCompetitionCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      ...competitionCategory
    }: UpdateCompetitionCategoryParam) => {
      return fetchApi<CompetitionCategory[]>(`competition-categories/${id}`, {
        method: "PATCH",
        json: competitionCategory,
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["competitionCategories"],
      });
    },
  });
};
