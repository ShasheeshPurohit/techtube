import { useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import { useAuth } from "../../Context/AuthContext";
import { playlist } from "../../data";
import { Link } from "react-router-dom";
import "./PlaylistDetail.css"
import SideNav from "../../Components/SideNav/SideNav";
import { deleteVideoHandler } from "../../Functions/PlaylistFunctions";

export default function PlaylistDetail(){

    const {state, token, dispatch} = useAuth();
    const{playlistName} = useParams();

    function getPlaylist(playlists, playlistName){
        while(playlists!=undefined)
        {
            return playlists.filter((item)=>item.playlistName === playlistName)
        }
        
    }

    const playlist = getPlaylist(state.playlists, playlistName)
   

    return(
        <div className="playlist-detail-layout">
            <div className="playlist-video-lists">
            {state===undefined?<Loader/>:(playlist===undefined?<Loader/>:(playlist[0].videos.map((video)=>{
               return(
                <div className="video-player-home">
                    <iframe src={`https://www.youtube.com/embed/${video.items[0].id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                    <div className="video-player-details">
                  <p className="video-title"><Link className="home-video-title" to={`/videos/${video._id}`}>{video.items[0].snippet.title}</Link></p>
                    </div>
                  <button className="playlist-remove-btn" onClick={()=>deleteVideoHandler(playlistName, video._id, token, dispatch)}>Remove</button>
                </div>
            );
            })))}
        </div>
        </div>
    );
}