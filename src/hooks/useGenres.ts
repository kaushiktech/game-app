import useData from "./useData";
export interface Genre {
    id: number;
    name: string;
    image_background:string;
}

const useGenres= ()=>useData<Genre>('genre');

export default useGenres;