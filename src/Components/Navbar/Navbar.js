import { useState } from "react";
import { Link } from "react-router-dom"
import "./Navbar.css"
import { useAuth } from "../../Context/AuthContext";
import { baseurl } from "../../Utils/apiCalls";
const axios = require('axios')

export default function Navbar(){

  const {loginHandler, token, logoutHandler} = useAuth();

  const [loginBox, setLoginBox] = useState(false)
  const [signupBox, setSignupBox] = useState(false)

  const [loginUsername, setLoginUsername] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  const [signupName, setSignupName] = useState("")
  const [signupUsername, setSignupUsername] = useState("")
  const [signupEmail, setSignupEmail] = useState("")
  const [signupPassword, setSignupPassword] = useState("")


  async function SignUpHandler(name, username, email, password){
    try{
        const response = await axios.post(`${baseurl}/api/user/signup`,{
            name: name, email: email, username: username, password: password
        },{
            headers:{
                ContentType: "application/json",
            },
        });
        if(response.status === 200){
            console.log(username, password)
            return loginHandler(username, password)
        }
    }
    catch(error){
        console.log(error.response);   
    }
}

    return (
        <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand brand-icons" href="#">
    {/* <i className="fas fa-bars nav-button"></i> */}
     <Link className="brand-link" to="/"><i className="fab fa-youtube logo"></i></Link>TechTube
    </a>
    <ul className="nav-list-mobile">
      {token?<li onClick={()=>logoutHandler()}>Logout</li>:(<>
        <li onClick={()=>{setLoginBox(!loginBox)
      if(signupBox){
        setSignupBox(!signupBox)
      }}}>Login</li>
      <li onClick={()=>{
      setSignupBox(!signupBox)
      if(loginBox){
        setLoginBox(!loginBox)
      }}}>Sign up</li>
      </>)}
      
    </ul>

    <div className="login-box" style={{visibility: loginBox?"initial":"hidden"}}>
      <input className="login-field" placeholder="Username" onChange={(event)=>setLoginUsername(event.target.value)}/>
      <input className="login-field" placeholder="Password" onChange={(event)=>setLoginPassword(event.target.value)}/>      
      <button onClick={()=>{
        loginHandler (loginUsername, loginPassword)
        setLoginBox(!loginBox)}}>Login</button>
    </div>
    <div className="signup-box" style={{visibility: signupBox?"initial":"hidden"}}>
    <input className="signup-field" placeholder="Name" onChange={(event)=>setSignupName(event.target.value)}/>
    <input className="signup-field"  placeholder="Username" onChange={(event)=>setSignupUsername(event.target.value)}/>
      <input className="signup-field" type="email"  placeholder="Email"onChange={(event)=>setSignupEmail(event.target.value)}/>
      <input className="signup-field" type="password" placeholder="Password" onChange={(event)=>setSignupPassword(event.target.value)}/> 
      <button onClick={()=>{SignUpHandler(signupName, signupUsername, signupEmail, signupPassword)
      setSignupBox(!signupBox)}}>Sign up</button> 
    </div>
  </div>
</nav>
    );
}