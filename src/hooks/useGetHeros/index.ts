import { useQuery } from "@tanstack/react-query";
import { Hero } from "../../types";
import { getHeroList } from "../apis";

export const useGetHeros = () => {
  return useQuery<Hero[]>({
    queryKey: ["heros"],
    queryFn: () => getHeroList(),
    initialData: [],
  });
};
