import React from "react";
import validate from "./validation";
import style from "./Form.module.css"
import image from "./png-clipart-rick-sl.png"

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

    return <div className={style.form}>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>LOGIN</h1>
                    <label>Username:   </label>
                    <input type="text" name="username" onChange={handleInputChange} />
                    {error.username?<p className={style.danger}>{error.username}</p>:<div className={style.divInvisible}>------------------------------</div> }
                    <label>Password:   </label>
                    <input type="password" name="password" onChange={handleInputChange} />
                    {error.password?<p className={style.danger}>{error.password}</p>:<div className={style.divInvisible}>------------------------------</div>}
                    <button type='submit'>Login</button>
                    <p>hint: username "rick@prueba.com" es password es "rick123"</p>
                </div>
                    <figure><img src={image} alt="Rick-Thinking" className={style.img}/></figure>
            </form>
            
           </div>
    
}