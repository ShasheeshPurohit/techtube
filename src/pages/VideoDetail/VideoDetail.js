import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {data} from "../../data"
import "./VideoDetail.css"
import { baseurl } from "../../Utils/apiCalls";
import Loader from "../../Components/Loader/Loader";
const axios = require('axios')

export default function VideoDetail(){
  const { videoId } = useParams();
  const [video, setVideo] = useState([]);
  const [playlistBox, setPlaylistBox] = useState(false)

  useEffect(() => {
    (async function () {
      try{
      const response = await axios.get(
        `${baseurl}/api/videos`
      );
      setVideo(response.data.data);
    
      }
      catch(error){
        // console.log("error")
      }
    })();
  }, []);

  function getVideoDetails(videos , videoId) {
    return videos.find((vid) => vid._id === videoId);
  }
  const displayVideo = getVideoDetails(video, videoId);


  
  // {displayVideo.items[0].snippet.title}  {displayVideo.items[0].snippet.channelTitle}
    return(
        <div className="video-detail-page">
          {displayVideo === undefined ? <Loader/>:(<><iframe className="video-player-frame"  src={`https://www.youtube.com/embed/${displayVideo.items[0].id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div className="video-player-detailPage">
                            <div className="video-card-details">
                          <p className="video-title-detailPage">{displayVideo.items[0].snippet.title}</p>
                          
                            </div>
                            <div className="video-author-details">
                            <p className="video-author-name">{displayVideo.items[0].snippet.channelTitle}</p>
                            <div className=" like-button">
                            <i class="fas fa-plus" onClick={()=>setPlaylistBox(!playlistBox)}></i>
                            <i class="far fa-thumbs-up"></i>
                          
                            </div>
                            </div>

                            </div>
                            <div className="playlist-create-box" style={{height: playlistBox?"9rem":"0" , width:playlistBox?"18rem":"0"}}>
                              <input className="playlist-create-field" style={{height: playlistBox?"initial":"0" , width:playlistBox?"initial":"0" , visibility: playlistBox?"initial":"hidden"}} placeholder="Playlist name"></input>
                              <button className="playlist-create-button" style={{height: playlistBox?"initial":"0" , width:playlistBox?"initial":"0" , visibility: playlistBox?"initial":"hidden"}}>Create</button>
                            </div>
                            <div className="video-reviews-detailPage">
                                <h1>Too Good !</h1>
                            </div></>)}
                          
                        </div>
        
    );
}