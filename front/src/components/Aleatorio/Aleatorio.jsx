import style from './Aleatorio.module.css'

export default function Aleatorio(props){
    const aleatorio = Math.floor(Math.random() * 826)+1;

    return(
        <div className={style.divAleatorio}>
                <button onClick={()=>props.onSearch(aleatorio)} className={style.aleatorio}>Personaje<br/>Aleatorio</button>
        </div>
    )
}