import useData from "./useData";

export interface Genres {
  id: string;
  name: string;
}

export default function useGenres() {
  return useData<Genres>("/genres");
}
