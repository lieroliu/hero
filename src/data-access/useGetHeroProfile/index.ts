import { useQuery } from "@tanstack/react-query";
import { Profile } from "../../types";
import { getHeroProfile } from "../apis";

export const useGetHeroProfile = ({ id }: { id: string }) => {
  return useQuery<Profile>({
    queryKey: ["heros-profile", { id }],
    queryFn: () => getHeroProfile(id),
  });
};
