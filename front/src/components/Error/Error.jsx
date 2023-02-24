import { useNavigate,useLocation } from "react-router-dom"
import { useEffect } from "react";


export default function Error(){

    const navigate=useNavigate();
    const location=useLocation();

    useEffect(()=>{
        navigate('/error')}
        ,[navigate])
    
    if(location.pathname==="/error"){
    return(
        <div>
            <h1>Error 404:This is not the web page you are looking for</h1>
        </div>
    )}
}