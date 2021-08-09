import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import VideoDetail from './pages/VideoDetail/VideoDetail';
import Playlist from './pages/Playlist/Playlist';
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/videos/:videoId" element={<VideoDetail/>}/>
        <Route path="/playlists" element={<Playlist/>}/>
      </Routes>

    </div>
  );
}

export default App;
