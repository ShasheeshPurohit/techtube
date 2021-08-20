import "./Liked.css"
import SideNav from "../../Components/SideNav/SideNav"
import { useAuth } from "../../Context/AuthContext";
import Loader from "../../Components/Loader/Loader";
import {Link} from "react-router-dom";
import { removeFromLiked } from "../../Utils/likedVideos";

export default function Liked(){


    const {state, token,dispatch} = useAuth();

 

    return (
        <div className="liked-layout">
            <div className="liked-side-nav">
                <SideNav/>
            </div>
            <div className="liked-display-section">
                {token?(state === undefined? <Loader/>:(state.likedVideos === undefined?<Loader/>:(state.likedVideos.length>0?((state.likedVideos.map((video)=>{
                    return(
                        
                        <div className="video-player-home">
                            {video.items === undefined?<Loader/>:(<><iframe src={`https://www.youtube.com/embed/${video.items[0].id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div className="liked-video-title">
                            <p className="video-title"><Link className="home-video-title" to={`/videos/${video._id}`}>{video.items[0].snippet.title}</Link></p>
                            </div>
                            </>)}
                            
                            <button className="liked-video-remove-btn" onClick={()=>removeFromLiked(video, token, dispatch)}>Remove</button>
                        
                        </div>
                    )
                }))):<h1>Like some videos to see them here</h1>))):<h1>Login to see liked videos</h1>}
            </div>
        </div>
    );
}