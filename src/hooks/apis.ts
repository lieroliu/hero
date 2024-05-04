import axios from "axios";
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
