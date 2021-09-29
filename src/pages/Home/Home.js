import "./Home.css"
import {data} from "../../data"
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import SideNav from "../../Components/SideNav/SideNav";
import { usePlayList } from "../../Context/PlaylistContext";
import Loader from "../../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";
const axios = require('axios')




export default function Home(){

    const navigate = useNavigate()

    

    const{allVideosData} = usePlayList();
    return (
        <div className="home-layout">
            <div className="video-display">
                {allVideosData === undefined? <Loader/>:(allVideosData.map((video)=>{
                   
                   return(
                       <div className="video-player-home" onClick={()=>navigate(`/videos/${video._id}`)}>
                           <img  className="video-player-home-thumbnail" src={video.items[0].snippet.thumbnails.standard.url}/>
                           
                         <p className="video-title"><Link className="home-video-title" to={`/videos/${video._id}`}>{video.items[0].snippet.title}</Link></p>
                           
                       
                       </div>
                   )
               }))}
               
            </div>
      
        </div>
    );
}