import { fetchApi } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { CompetitionCategory } from "../dto/CompetitionCategory";

export const useCompetitionCategories = () => {
  return useQuery({
    queryKey: ["competitionCategories"],
    queryFn: async () => {
      return fetchApi<CompetitionCategory[]>("competition-categories");
    },
  });
};
