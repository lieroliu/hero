import { useQuery } from "@tanstack/react-query";
import { Hero } from "../../types";
import { getHeroList, getHeroProfile } from "./apis";

export const useHeros = () => {
  return useQuery<Hero[]>({
    queryKey: ["heros"],
    queryFn: () => getHeroList(),
    initialData: [],
  });
};

export const useHeroProfile = (id: string) => {
  return useQuery<Hero>({
    queryKey: ["heros", { id }],
    queryFn: () => getHeroProfile(id),
  });
};

export default useHeros;
