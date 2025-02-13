import { fetchApi } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { Zone } from "../dto/Zone";

export const useZones = () => {
  return useQuery({
    queryKey: ["zones"],
    queryFn: async () => {
      return fetchApi<Zone[]>("zones");
    },
  });
};
