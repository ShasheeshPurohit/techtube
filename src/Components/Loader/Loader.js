import "./Loader.css"
import { PulseLoader } from "react-spinners";

export default function Loader(){
    return(
        <div className="loader"> <PulseLoader color="red"/> </div>
    );
}