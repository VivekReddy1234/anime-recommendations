import { useState } from "react";
import { useAnimeContext } from "./Context";
import { useEffect } from "react";

export default function Genres(){
    
    const {changeGenre,animeBySearch,setAnimeByGenre,setAnimeBySearch,changePage,animeByGenre} =useAnimeContext();
    const[genre,setGenre]=useState("");
const [genredata,setGenredata]=useState([]);
const url="https://api.jikan.moe/v4/genres/anime";
useEffect(()=>{
    fetch(url).then((res)=>res.json()).then((res)=>{console.log(res.data); setGenredata(res.data);}).catch((err)=>console.log(err));

},[])
const setThings=()=>{
    changePage(1);
    setAnimeByGenre(true);
    setAnimeBySearch(false);
}
    return(
        <> <div  className=" bg-blue-200 w-screen flex justify-center">
        {
            genredata.length>0?
            <select multiple={false} className=" w-[300px] text-center"  onChange={(e)=>{setGenre(e.target.value);  setThings(); changeGenre(e.target.value);}} value={genre}>
           { genredata.map((genre)=>(

                 <option className="bg-white" value={genre.mal_id}>{genre.name}</option>
            )) }
            </select>
            :<div>Loading...</div> 
        } 
        </div>
        </>
    )
}