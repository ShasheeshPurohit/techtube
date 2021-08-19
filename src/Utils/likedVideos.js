import axios from 'axios'
import { baseurl } from './apiCalls';

export const addToLiked = async (video, token, dispatch) => {
    const videoId= video._id;
    (video)
    try{
        const response = await axios.post(`${baseurl}/api/liked/${videoId}`,{},
    { headers: { authorization: token } }
    )
    if(response.status === 200){
        ("video Added to liked!")
        dispatch({type: "ADD_TO_LIKED", payload: video })
      }
    }catch(error){
        (error.response)
    }
};

export const removeFromLiked = async (video, token, dispatch) => {
    (token)
    const videoId= video._id;
    try{
        const response = await axios.delete(`${baseurl}/api/liked/${videoId}`,
    { headers: { authorization: token } }
    )
    if(response.status === 200){
        ("hatadiyaa bhai jo nahi pasand")
        dispatch({type: "REMOVE_FROM_LIKED", payload: video })
      }
    }catch(error){
        (error.response)
    }
};