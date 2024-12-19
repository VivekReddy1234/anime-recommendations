import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";
import Recomendations from './components/recomendations';
import { AnimeProvider } from './components/Context';
import { useAnimeContext } from './components/Context';
import Genres from './components/Genres';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Search from './components/Search';
function App() {
 const {page,changeGenre,changePage,data}=useAnimeContext();
 const[totalpage,setTotalPage]=useState(0);
 useEffect(()=>{
  setTotalPage(data.length);
 },[data])
  
  return (
 
 <><div className=' h-screen w-screen flex  items-center flex-col' >
 <div className=' bg-blue-200 w-screen p-3 '>
    <h1 className=' text-blue-950 text-center'> Anime Recomendations</h1>
    <div className='flex  justify-around'>

    {/* Here is the buttons to change page from one to another  */}
      <div className=' font-bold text-blue-700'>Current Page:{page} of  {totalpage}</div>
     <button className='bg-blue-300 font-bold border-black-2  hover:bg-blue-700' onClick={()=>{changePage(page+1)}}>Next Page..</button>
      <button className='bg-red-400 font-bold border-2 hover:bg-red-800' onClick={()=>{ page>1?changePage(page-1):changePage(page)}}> Prev Page.</button> 
      <Link to="/watch"><button> My WatchList.</button> </Link>
      
      </div> </div>
      {/* This is the genres area of the page where the options are being generated */}
     <Genres />
     {/* <Search/> */}
     <Search/>
{/* 
     This is the main part which shows the images and data of the anime genreated */}
     
      <Recomendations/>  
      </div> 
    </>

  )
}

export default App
