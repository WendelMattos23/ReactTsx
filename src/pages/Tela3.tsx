import { useNavigate } from "react-router-dom";

export function Tela3(){
    const navi = useNavigate();
    return(
        <>
            <h3>Tela 3</h3>
            <button onClick={()=>{navi('/')}} >Menu</button>
        </>
    );
}