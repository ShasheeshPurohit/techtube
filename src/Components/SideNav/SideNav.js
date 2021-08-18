import "./SideNav.css"
import { Link } from "react-router-dom"

export default function SideNav(){

    return(
        <div className="nav-panel-icons">
            <Link className="sidebar-links" to="/"><i className="fas fa-home"></i>
            <p>Home</p></Link>
            <Link className="sidebar-links" to="/playlists"><i className="fas fa-list"></i>
            <p>Playlists</p></Link>
            <Link className="sidebar-links" to="/liked">
            <i className="fas fa-thumbs-up"></i>
            <p>Liked</p>
            </Link>
            <Link className="sidebar-links" to="/">
            <i className="fas fa-history"></i>
            <p>History</p>
            </Link>
            </div>
    )
}