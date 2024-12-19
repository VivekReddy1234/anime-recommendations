import React, { useState ,useEffect} from 'react'
import { useAnimeContext } from './Context';
function Search() {
     const {data,animeData,page,changePage,setSearch,setAnimeByGenre,setAnimeBySearch,animeBySearch}=useAnimeContext();
     const[query,setQuery]=useState("");
    const url=`https://api.jikan.moe/v4/anime?q=${query}&page=${page}`;

    const setThings=()=>{
      changePage(1);
      setAnimeByGenre(false);
      setAnimeBySearch(true);
    }

    const search=()=>{
  
   
        fetch(url).then((res)=>res.json()).then((res)=>{console.log(res); animeData(res.data); }).catch((err)=>console.log(err));
    
    }
        useEffect(()=>{
       if(query && animeBySearch) search();
    } ,[page])
  return (
    <div className='h-[50px] w-[300px] border' onClick={setThings}>
      <input className='h-[30px] w-[200px]' value={query} type="text" onChange={(e)=>(setQuery(e.target.value))}></input>
      <button onClick={search}>Search Now</button>
    </div>
  )
}

export default Search
