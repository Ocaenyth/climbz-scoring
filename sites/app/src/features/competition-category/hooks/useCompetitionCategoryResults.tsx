import { fetchApi } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { CategoryResult } from "../dto/CategoryResult";

export const useCompetitionCategoryResults = (categoryId: string) => {
  return useQuery({
    queryKey: [],
    queryFn: async () => {
      return fetchApi<CategoryResult[]>(
        `competition-categories/${categoryId}/results`
      );
    },
  });
};
