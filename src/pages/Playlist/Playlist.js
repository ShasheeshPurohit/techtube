import SideNav from "../../Components/SideNav/SideNav"
import "./Playlist.css"

export default function Playlist(){
    return(
        <div>
            <div className="playlist-layout">
                <div className="playlist-side-nav">
                    <SideNav/>
                </div>
                <div className="playlist-display-section">
                    <h1>Your Playlists</h1>
                </div>
            </div>
        </div>
    );
}