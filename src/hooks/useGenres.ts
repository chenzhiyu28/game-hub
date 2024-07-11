import { Genre } from "../Entity/Genre";
import useData from "./useData";


const useGenres = () => useData<Genre>("/genres")

export default useGenres;
