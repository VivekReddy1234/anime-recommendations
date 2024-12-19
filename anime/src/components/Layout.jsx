import { useState,useEffect } from 'react'
import { AnimeProvider } from './Context';
import { useAnimeContext } from './Context';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function Layout(){
    const [genre,setGenre]=useState("");
 const [page,setPage]=useState(1);
 const[data,setanimeData]=useState([]);
 const [Watchlist,setWatchlist]=useState([]);
 const [search,setSearch]=useState("");
 const[animeByGenre,setAnimeByGenre]=useState(false);
 const[animeBySearch,setAnimeBySearch]=useState(false);
 const addtolist=(anime)=>{
    const found =Watchlist.find((list)=> list.mal_id===anime.mal_id)
 if(!found)setWatchlist((prev)=>[...prev,anime]);
 }
 const changeGenre=(genre)=>{
  setGenre(genre);
  setPage(1);
 }
 const changePage=(page)=>{
  setPage(page);
 }
 const animeData=(data)=>{
  setanimeData(data);
 }
 const  removelist=(id)=>{
   
    setWatchlist((prev)=> prev.filter(anime=>anime.mal_id!==id));
 }
    return(
        <AnimeProvider value={{changePage,changeGenre,page,genre,Watchlist,setAnimeByGenre,setAnimeBySearch,animeByGenre,animeBySearch,addtolist,setSearch,removelist,data,animeData}}>
        <Outlet/>
        </AnimeProvider>
    )
}