import { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";

export function useMovies () {
    const value = useContext(MoviesContext)

    return value
}