
import useData, {Platform} from "./useData";
import {Genre} from "./useGenres";
export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platform}[]
    metacritic:number;
}


const useGames= (selectedGenre:Genre | null,selectedPlatorm:Platform | null)=>useData<Game>('games',{params:{genres:selectedGenre?.id,platforms:selectedPlatorm?.id}},[selectedGenre?.id,selectedPlatorm?.id])
export default useGames;