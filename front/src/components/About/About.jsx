import style from './About.module.css'

export default function About(){
    return(
        <div className={style.div}>
            <h1>Creador de App: Alejandro Orozco</h1>
            <h3>Propósito: Apliar los conocimientos de Frontend y Backend
                con una App interactiva, divertida y que permita dar un paso para el uso de 
                herramientas como React, Redux, Express y más!
            </h3>
            <h3>Espero que sea una experiencia fácil, entretenida y con un diseño agradable para
                los usuarios de esta App
            </h3>
            <h3>Saludos!!</h3>
        </div>
    )
}