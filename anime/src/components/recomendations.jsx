import { useEffect, useState } from "react"
import { useAnimeContext } from "./Context";
import {Link} from "react-router-dom"
import WatchList from "./WatchList";

function Recomendations(){
 const{data,animeData,animeByGenre,setAnimeByGenre,setAnimeBySearch,page,genre,addtolist,Watchlist}=useAnimeContext();
    
    const url = `https://api.jikan.moe/v4/anime?page=${page}&&genres=${genre}`;
useEffect(()=>{
  
    if(animeByGenre){fetch(url).then((res)=>res.json()).then((res)=>{console.log(res.data); console.log(res.data[0].images); animeData(res.data)}).catch((err)=>console.log(err));
    }
},[page,genre])


    return (
        <>
          <div className=" flex flex-wrap w-screen h-[130vh]  bg-zinc-200 ">
          {
           page<data.length?(   
            data.map((anime)=>(

             <> 
                    <div  className=" bg-white h-[400px] w-[300px] flex flex-col font-bold items-center border mx-4 ml-12 mt-5 border-red-500 ">
                        <div className=" h-[180px] w-full object-fill overflow-hidden flex justify-center"> <img className="h-full w-full object-fill" src={anime.images.jpg.image_url} /></div>
                        <div className=" text-center">Title: <span className="font-normal">{anime.title_english}</span></div>
                        <div className=" text-center">Anime-Duration :<span className="font-normal">{anime.duration}</span></div>
                        <div className=" text-center">No. Of Episodes: <span className="font-normal">{anime.episodes}</span></div>
                        <a target="_blank" href={`https://hianime.to/search?keyword=${anime.title_english}`}>  <button className="mt-9 bg-blue-300 text-white font-bold p-3 border">Watch Now </button>
                        </a> <button onClick={()=>{addtolist(anime); console.log(Watchlist);}} className="bg-blue-300 text-white font-bold p-3 border">Add to my List</button>
                 </div>
               
                </>
             
            )
            )  
            ):(<div>No More Results</div>)

          } </div>
        </>
    )
}
export default Recomendations