import axios from "axios";
import { baseurl } from "../Utils/apiCalls";

export const deletePlaylistHandler = async (playlistName, token, dispatch) => {
  const response = await axios.delete(`${baseurl}/api/playlist/${playlistName}`, {
    headers: { authorization: token },
  });
  if(response.status === 200){
    dispatch({ type: "REMOVE_PLAYLIST", payload: playlistName })
  }
};

export const deleteVideoHandler = async (playlistName, videoId, token,dispatch) => {
  try {
    const response = await axios.delete(
      `${baseurl}/api/playlist/${playlistName}/${videoId}`,
      { headers: { authorization: token } }
    );
    if(response.status === 200){
      dispatch({type: "REMOVE_FROM_PLAYLIST", payload:{playlistName, videoId}})
    }
  } catch (error) {
    // (error.response);
  }
};

export const addToPlaylist = async (playlistName, video, token, dispatch) => {
  // (playlistName, video._id, token)
  try {
    // ("Added bhaiii!")
    const response = await axios.post(
      `${baseurl}/api/playlist/${playlistName}/${video._id}`,{},
      { headers: { authorization: token } }
    );
    if(response.status === 200){
      dispatch({type: "ADD-VIDEO-TO-PLAYLIST", payload: {playlistName, videoObj: video }})
    }
  } catch (error) {
    // (error.response);
  }
};

export const createPlaylist = async (playlistName, token, dispatch) => {
  try {
      // ("Aagayaa yahaa")
    const response = await axios.post(
      `${baseurl}/api/playlist/${playlistName}`,
      {  },
      {
        headers: { authorization: token },
      }
    );
    if(response.status === 200){
      dispatch({ type: "ADD_PLAY_LIST_NAME", payload: playlistName })
    }
  } catch (error) {
    // (error.response);
  }
};
