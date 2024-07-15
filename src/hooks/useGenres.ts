//import { Genre } from "../Entity/Genre";
//import useData from "./useData";
import genres from "../data/genres";


//const useGenres = () => useData<Genre>("/genres")
const useGenres2 = () => ({
    data: genres, isLoading: false, error: " "
})

export default useGenres2;
