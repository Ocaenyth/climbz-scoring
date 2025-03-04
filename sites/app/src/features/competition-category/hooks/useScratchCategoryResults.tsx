import { Gender } from "@/features/climber/dto/Gender";
import { fetchApi } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { CategoryResult } from "../dto/CategoryResult";
import { ScratchCategory } from "../dto/ScratchCategory";

export const useScratchCategoryResults = (
  scratchCategory: ScratchCategory,
  gender: Gender
) => {
  return useQuery({
    queryKey: [],
    queryFn: async () => {
      return fetchApi<CategoryResult[]>(
        `competition-categories/scratch/${scratchCategory}/${gender}/results`
      );
    },
  });
};
