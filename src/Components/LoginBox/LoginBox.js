// import { useLoginBox } from "../../Context/loginBoxContext";
// import "./LoginBox.css"


// export default function LoginBox(){
//     const {loginHandler, token, logoutHandler} = useAuth();

//     const {loginShow} = useLoginBox();

//     const [loginUsername, setLoginUsername] = useState("")
//     const [loginPassword, setLoginPassword] = useState("")

//     return(
//         <div className="login-box" style={{visibility: loginBox?"initial":"hidden"}}>
//       <input className="login-field auth-field" type="text" placeholder="Username" onChange={(event)=>setLoginUsername(event.target.value)}/>
//       <input className="login-field auth-field" type="password" placeholder="Password" onChange={(event)=>setLoginPassword(event.target.value)}/>      
//       <button className="login-button auth-field" onClick={()=>{
//         loginHandler (loginUsername, loginPassword)
//         setLoginBox(!loginBox)}}>Login</button>
//     </div>
//     );
// }