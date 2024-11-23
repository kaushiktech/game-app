import useData, {Platform} from "./useData";


const usePlatforms= ()=>useData<Platform>('platforms/lists/parents');

export default usePlatforms;