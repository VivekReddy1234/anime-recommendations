import { createContext, useContext } from "react"

export  const animeContext= createContext({
    Watchlist:[],
    addtolist:()=>{},
    removelist:()=>{},
    changePage:()=>{},
    changeGenre:()=>{},
    data:[],
    animeData:()=>{},
    page:1,
    genre:1
})

export const useAnimeContext=()=>{
    return useContext(animeContext);
}
export const AnimeProvider=animeContext.Provider;