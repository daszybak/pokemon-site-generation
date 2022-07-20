import axios from "axios";

export const pokemon = axios.create({
  baseURL: "https://jherr-pokemon.s3.us-west-1.amazonaws.com/",
});
