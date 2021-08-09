import "./Home.css"
import {data} from "../../data"
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import SideNav from "../../Components/SideNav/SideNav";
import { usePlayList } from "../../Context/PlaylistContext";
import Loader from "../../Components/Loader/Loader";
const axios = require('axios')




export default function Home(){

    const{allVideosData} = usePlayList();
    return (
        <div className="home-layout">
            <div className="nav-section">
                <SideNav/>
            </div>
            <div className="vid-section">
            <div className="video-display">
                {allVideosData === undefined? <Loader/>:(allVideosData.map((video)=>{
                   
                   return(
                       <div className="video-player-home">
                           <iframe src={`https://www.youtube.com/embed/${video.items[0].id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                           
                         <p className="video-title"><Link className="home-video-title" to={`/videos/${video._id}`}>{video.items[0].snippet.title}</Link></p>
                           
                       
                       </div>
                   )
               }))}
               
            </div>
            </div>
        </div>
    );
}