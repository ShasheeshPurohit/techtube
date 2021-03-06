import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import SideNav from "../../Components/SideNav/SideNav"
import { useAuth } from "../../Context/AuthContext";
import { deletePlaylistHandler } from "../../Functions/PlaylistFunctions";
import "./Playlist.css"

export default function Playlist(){
    const {state, token, dispatch} = useAuth();
    const Navigate = useNavigate();

    
    return(
        <div>
            <div className="playlist-layout">
                <div className="playlist-display-section">
                    <div className="playlist-display-section-playlists">
                    {token?(state===undefined?<h1>Please login to see your playlists</h1>:(state.playlists === undefined?<Loader/>:(state.playlists.length<1?<h1>No Playlists found</h1>:(state.playlists.map((playlist)=>{
                       if(playlist.videos.length>=1){
                           
                        return(
                            <div key={playlist._id} className="playlist-display-box">
                                <div className="playlist-thumbnail-container">
                                <img className="playlist-thumbnail" src={playlist.videos[0]===undefined? <Loader/> :(playlist.videos[0].items[0].snippet.thumbnails.standard.url)}></img></div>                                
                                <p className="playlist-title"  onClick={()=>Navigate(`/playlist/${playlist.playlistName}`)}>{playlist.playlistName}</p>
                                <button className="playlist-remove-btn" onClick={()=>deletePlaylistHandler(playlist.playlistName, token, dispatch)}>Remove</button>
                            </div>
                        );
                       }
                       if(playlist.videos.length<1){
                        deletePlaylistHandler(playlist.playlistName, token, dispatch)
                       }
                    }))))):<h1>Login to see your playlist</h1>}
                    </div>
                </div>
            </div>
        </div>
    );
}