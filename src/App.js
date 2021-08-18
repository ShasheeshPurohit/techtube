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

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/videos/:videoId" element={<VideoDetail/>}/>
        <Route path="/playlists" element={<Playlist/>}/>
        <Route path="/liked" element={<Liked/>}/>
      </Routes>

    </div>
  );
}

export default App;
