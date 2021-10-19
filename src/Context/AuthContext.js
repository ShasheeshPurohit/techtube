import { createContext, useContext, useState, useReducer,useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router";
import { reducerFunc } from "./Reducers/reducerFunction";
import { baseurl } from "../Utils/apiCalls";
import { toast } from "react-toastify";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const savedToken = JSON.parse(localStorage.getItem("token")) ||  null;
    const [token, setToken] = useState(savedToken)
    const navigate = useNavigate()
    const [loginState, setLoginState] = useState("")

    const [state, dispatch] = useReducer(reducerFunc, {});

    useEffect(() => {
        (async function() {
            try{
          const response = await axios.get(`${baseurl}/api/playlist`, {
            headers: { authorization: token },
          });
        
          if (response.data.status === "success") {
            dispatch({
              type: "INITIAL_LOAD",
              payload: response.data.playlistData,
            });
          }
        }
        catch(error){
            // (error)
        }
        })();
      }, [token]);

    //   useEffect(() => {
    //     (async function() {
    //       const response = await axios.get(`${baseurl}/api/history`, {
    //         headers: { authorization: token },
    //       });
    //       // (response)
    //       if (response.data.status === "success") {
    //         dispatch({
    //           type: "INITIAL_LOAD_HISTORY",
    //           payload: response.data.history,
    //         });
    //       }
    //     })();
    //   }, [token]);

      useEffect(() => {
        (async function() {
            try{
          const response = await axios.get(`${baseurl}/api/liked`, {
            headers: { authorization: token },
          });
         
          // (response.data.likedVideos.likedVideos)
          if (response.data.status === "success") {
            dispatch({
              type: "INITIAL_LOAD_LIKED_VIDEOS",
              payload: response.data.likedVideos.likedVideos,
            });
          }
        }
        catch(error){
            // (error)
        }
        })();
      }, [token]);


    
     const logoutHandler = () => {
        localStorage.removeItem("token")
        setToken(null)
        setLoginState("")
        dispatch({type: "LOG_OUT"})
    }

    const loginHandler  = async (userName, password) => {
        try{
            const response = await axios.post(`${baseurl}/api/user/login`,
         {userName, password},
         { headers: {
            "Content-Type" : "application/json" 
         }
        })
        setLoginState(response.data.status)
        if(response.data.status === "login success"){ 
            toast.success("Logged in successfully")
            localStorage.setItem("token", JSON.stringify( response.data.token));
            // localStorage.setItem("login", JSON.stringify({loginStatus: true, token: response.data.token}));
            setToken(response.data.token)
            setLoginState("login success")
            
        }
        if(response.data.status==="User not found"){
          return toast.error("Wrong username or password")
        }
        }catch(error){
          toast.error("Wrong username or password")
        
        }
    }
    return(
        <AuthContext.Provider value={{dispatch, state, token, loginState, loginHandler, logoutHandler}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}