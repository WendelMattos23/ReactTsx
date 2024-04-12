import { useNavigate } from 'react-router-dom';
import './App.css'

export function Menu() {
const navi = useNavigate();
  return (
    <>
    <div className='container'>
      <h2>Menu</h2>
      <button onClick={()=>{navi('/tela1')}} >Tela 1</button>
      <button onClick={()=>{navi('/tela2');}}>Tela 2</button>
      <button onClick={()=>{navi('/tela3');}} >Tela 3</button>
    </div>
    </>
  )
}


