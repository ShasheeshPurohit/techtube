import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import VideoDetail from './pages/VideoDetail/VideoDetail';
import Playlist from './pages/Playlist/Playlist';
import {Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/Signup';
import Liked from './pages/LikedVideos/Liked';
import PlaylistDetail from './pages/PlaylistDetail/PlaylistDetail';
import SideNav from './Components/SideNav/SideNav';
import BottomNav from './Components/BottomNav/BottomNav';
import {ToastContainer} from "react-toastify"

function App() {
  return (
    <div className="App">
      <Navbar/>

    <div className="app-display">
      <div className="sidebar">
      <SideNav/>
      </div>
      <div className="video-area">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/videos/:videoId" element={<VideoDetail/>}/>
        <Route path="/playlists" element={<Playlist/>}/>
        <Route path="/liked" element={<Liked/>}/>
        <Route path="/playlist/:playlistName" element={<PlaylistDetail/>}/>
      </Routes>
      <ToastContainer position="top-right" theme="dark" autoClose={3000} />
      </div>

      </div>
      <div className="bottom-nav">
        <BottomNav/>
      </div>
    </div>
  );
}

export default App;
