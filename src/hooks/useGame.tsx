import useData from "./useData";

export interface Platform {
  id: string;
  name: string;
  slug: string;
}
export interface Games {
  id: string;
  name: string;
  backgroundImage: string;
  parent_Platforms: { platform: Platform }[];
  miniatricScore: number;
}

const useGame = useData<Games>("/games");

export default useGame;
