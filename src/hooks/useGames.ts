
import useData, {Platform} from "./useData";
import {GameQuery} from "../App";
export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platform}[]
    metacritic:number;
}
const useGames= (gameQuery:GameQuery | null)=>useData<Game>('games',{params:{genres:gameQuery?.genre?.id,platforms:gameQuery?.platform?.id,order:gameQuery?.order}},[gameQuery])
export default useGames;