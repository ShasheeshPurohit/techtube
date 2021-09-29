import { createContext, useContext, useReducer, useEffect, useState } from "react";
import { baseurl } from "../Utils/apiCalls";
// import { useAuth } from "./AuthContext";
// import { cartReducer } from "./Reducers/CartReducer";
const axios = require('axios');



export const PlayListContext = createContext();

export const PlayListProvider = ({ children }) => {
  
  const [allVideosData, setAllVideosData] = useState();
  // const [tokenn, setTokenn] = useState(null)

  useEffect(() => {
    (async function () { 
      const response = await axios.get(`${baseurl}/api/videos`);
      setAllVideosData(response.data.data);
    })();
  }, []);
  
  

  return (
    <PlayListContext.Provider
      value={{  allVideosData }}
    >
      {children}
    </PlayListContext.Provider>
  );
};

export const usePlayList = () => {
  return useContext(PlayListContext);
};

