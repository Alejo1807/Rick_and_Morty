import React from "react";
import validate from "./validation";

export default function Form (props){
    const [userData, setUserData] = React.useState({ username: '', password: '' });
    const [error,Seterror]=React.useState({ username: '', password: '' })

    const handleInputChange = (e)=>{

            setUserData(
                {...userData,
                    [e.target.name]:e.target.value}
            )

            Seterror(validate({...userData,
                [e.target.name]:e.target.value})
            )
    }

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        const errores=Object.values(error);
        if(errores.length===0){
            props.login(userData)
        } else {
            alert("Debes corregir los errores");
        }

    }

    return <div>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" name="username" onChange={handleInputChange} />
                {error.username?<p className='danger'>{error.username}</p>:""}
                <label>Password</label>
                <input type="password" name="password" onChange={handleInputChange} />
                {error.password?<p className='danger'>{error.password}</p>:""}
                <button type='submit'>Login</button>
                <p>hint: username "rick@prueba.com" es password es "rick123"</p>
            </form>
           </div>
    
}