import axios from "axios";
import { Profile } from "../types";
export const getHeroList = async () => {
  return axios
    .get("https://hahow-recruit.herokuapp.com/heroes")
    .then((res) => res.data)
    .catch((_) => ({}));
};

export const getHeroProfile = async (id: string) => {
  return axios
    .get(`https://hahow-recruit.herokuapp.com/heroes/${id}/profile`)
    .then((res) => res.data)
    .catch((_) => ({}));
};

export const patchHeroProfile = async (id: string, param: Profile) => {
  return axios
    .patch(`https://hahow-recruit.herokuapp.com/heroes/${id}/profile`, param)
    .then((res) => res.data)
    .catch((err) => ({
      code: 400,
      msg: err,
    }));
};
