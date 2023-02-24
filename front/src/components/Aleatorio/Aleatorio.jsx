export default function Aleatorio(props){
    const aleatorio = Math.floor(Math.random() * 826)+1;

    return(
        <div>
            <button onClick={()=>props.onSearch(aleatorio)}>Personaje<br/>Aleatorio</button>
        </div>
    )
}