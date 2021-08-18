import "./Liked.css"
import SideNav from "../../Components/SideNav/SideNav"
import { useAuth } from "../../Context/AuthContext";
import Loader from "../../Components/Loader/Loader";
import {Link} from "react-router-dom";

export default function Liked(){


    const {state} = useAuth();

    console.log(state.likedVideos)

    return (
        <div className="liked-layout">
            <div className="liked-side-nav">
                <SideNav/>
            </div>
            <div className="liked-display-section">
                {state === undefined? "Login to karle bhai":(state.likedVideos === undefined?<Loader/>:(state.likedVideos.length>0?((state.likedVideos.map((video)=>{
                    return(
                        
                        <div className="video-player-home">
                            {video.items === undefined?<Loader/>:(<><iframe src={`https://www.youtube.com/embed/${video.items[0].id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            
                            <p className="video-title"><Link className="home-video-title" to={`/videos/${video._id}`}>{video.items[0].snippet.title}</Link></p></>)}
                            
                            
                        
                        </div>
                    )
                }))):<h1>Like some videos to see them here</h1>))}
            </div>
        </div>
    );
}