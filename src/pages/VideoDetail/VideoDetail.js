import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {playlist} from "../../data"
import "./VideoDetail.css"
import { baseurl } from "../../Utils/apiCalls";
import Loader from "../../Components/Loader/Loader";
import { useAuth } from "../../Context/AuthContext";
import { addToLiked, removeFromLiked } from "../../Utils/likedVideos";
import { addToPlaylist, createPlaylist } from "../../Functions/PlaylistFunctions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const axios = require('axios')

export default function VideoDetail(){
  const { videoId } = useParams();
  const [video, setVideo] = useState([]);
  const [playlistBox, setPlaylistBox] = useState(false)
  const [newPlaylistName, setNewPlaylistName] = useState("")
  const [playlistName, setPlaylistName] = useState("")

  const {state,dispatch,token} = useAuth();

  const notifyLoginLike = () => toast.error("Login to like the video");
  const notifyLoginPlaylist = () => toast.error("Login to create a playlist");
  

  useEffect(() => {
    (async function () {
      try{
      const response = await axios.get(
        `${baseurl}/api/videos`
      );
      setVideo(response.data.data);
      
      }
      catch(error){
        // ("error")
      }
    })();
  }, []);

  function getVideoDetails(videos , videoId) {

    return videos.find((vid) => vid._id === videoId);
    
  }
  const displayVideo = getVideoDetails(video, videoId);

  const item = state?.likedVideos?.filter(item => item?._id == videoId)
  
  
  // {displayVideo.items[0].snippet.title}  {displayVideo.items[0].snippet.channelTitle}
    return(
        <div className="video-detail-page">
          <ToastContainer />
          {displayVideo === undefined ? <Loader/>:(
          
          <div className="video-container">
          <div className="video-detail-player">  
          <iframe
          width='100%'
          height='100%'
          src={`https://www.youtube.com/embed/${displayVideo.items[0].id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>
          
                            <div className="video-player-detailPage">
                            <div className="video-card-details">
                          <p className="video-title-detailPage">{displayVideo.items[0].snippet.title}</p>
                          
                            </div>
                            <div className="video-author-details">
                            <p className="video-author-name">{displayVideo.items[0].snippet.channelTitle}</p>
                            <div className="icon-buttons">
                            <i class="fas fa-plus playlist-button" onClick={()=>setPlaylistBox(!playlistBox)}></i>
                            <i class="fas fa-thumbs-up like-button" style={{color:item?.length>0 ? "red":"white"}} onClick={()=>{
                              token?(item.length>0 ? removeFromLiked(displayVideo, token, dispatch):addToLiked(displayVideo, token, dispatch)):notifyLoginLike()
                            }}></i>
                          
                            </div>
                            </div>

                            </div>
                            <div className="playlist-create-box" style={{height: playlistBox?"max-content":"0" , width:playlistBox?"18rem":"0"}}>
                            {token?<div className="playlist-create-box" style={{height: playlistBox?"max-content":"0" , width:playlistBox?"18rem":"0"}}>
                              <input className="playlist-create-field" style={{visibility: playlistBox?"initial":"hidden"}} placeholder="Playlist name" onChange={(event)=>setNewPlaylistName(event.target.value)}></input>
                              <button className="playlist-create-button" style={{visibility: playlistBox?"initial":"hidden"}} onClick={()=>createPlaylist(newPlaylistName, token, dispatch)}>Create</button>

                              <div className="playlists-name-section">
                              <p style={{visibility: playlistBox?"initial":"hidden"}}>Existing Playlists:</p>
                              <ul className="playlist-name-list" style={{visibility: playlistBox?"initial":"hidden"}}>
                              {state===undefined?<Loader/>:(token?(state.playlists === undefined? <Loader/>: (state.playlists.length === 0? "No playlists":(state.playlists.map((playlist)=>{
                                return(<li><p className="playlist-item" >  
                                <input type="checkbox"  onChange={()=>addToPlaylist(playlist.playlistName, displayVideo, token, dispatch)} />
                                   {playlist.playlistName}
                                </p></li>)
                              })))):"")}
                              </ul>
                              <button className="playlist-box-close-btn" style={{visibility: playlistBox?"initial":"hidden"}} onClick={()=>setPlaylistBox(!playlistBox)}>Close</button>
                              
                              </div>
                              </div>:<p style={{visibility: playlistBox?"initial":"hidden", color:"white"}}>Login to see/create playlists</p>}
                            </div>
                            <div className="video-desc">
                                <p>{displayVideo.items[0].snippet.description}</p>
                            </div>
                            </div>
                            )}
                          
                        </div>
        
    );
}