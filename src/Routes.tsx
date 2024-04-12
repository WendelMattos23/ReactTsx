import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Tela1 } from './pages/Tela1';
import { Tela2 } from './pages/Tela2';
import { Tela3 } from './pages/Tela3';
import { Menu } from './Menu';

export function RouteApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Menu />}/>
                <Route path='/tela1' element={<Tela1/>} />
                <Route path='/tela2' element={<Tela2 />} />
                <Route path='/tela3' element={<Tela3 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteApp;
