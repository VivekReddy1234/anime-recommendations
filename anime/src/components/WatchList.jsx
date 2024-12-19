import {  useAnimeContext } from "./Context"

export default function WatchList(){

const {Watchlist,removelist} = useAnimeContext();
    return( 
        <>
            <div className="text-center bg-red-600 font-extrabold h-[70px] text-[50px]"><h1>Welcome To Your Watchlist ..</h1></div>
            {console.log(Watchlist.length)}
            {  Watchlist.length>0?(
                Watchlist.map((anime)=>(
                    
                    <div className=" bg-zinc-500 h-[400px] w-screen flex font-bold items-center border mx-4 ml-12 mt-5 border-red-500 ">
                        <div className=" h-[350px] w-[300px] object-fill overflow-hidden flex justify-center"> <img className="h-full w-full object-fill" src={anime.images.jpg.image_url} /></div>
                        <div className="flex flex-col h-full w-[900px] justify-center ml-10 ">
                        <div className=" ">Title: <span className="font-normal">{anime.title_english}</span></div>
                        <div className=" ">Anime-Duration :<span className="font-normal">{anime.duration}</span></div>
                        <div className=" ">No. Of Episodes: <span className="font-normal">{anime.episodes}</span></div> 
                        <div className="">Status: <span className="font-normal">{anime.status}</span></div>
                        <div className=" flex flex-wrap">Synopsis:<p className="font-normal">{anime.synopsis}</p></div>
                        <button onClick={()=>{removelist(anime.mal_id); console.log(Watchlist);}} className="bg-blue-300 text-white font-bold p-3 border">Remove From my List</button> </div>
                 </div>
                ))):(<div>No anime in your WatchList..</div>)
                
            }
        </>
    )
}