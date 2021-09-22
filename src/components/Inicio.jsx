import React from 'react'
import logo from '../img/logo2.1.png'
import Menu from './Menu'
import Ready from './ListOrder';
import Cooking from './Cooking';
import { useHistory } from "react-router-dom";

export const Inicio = () => {
    let history = useHistory();
    return (
        <div className='containerInicio'>
            <nav className='navBar'>
                <img src={logo} className='logo' />
            </nav>
            <div className='containerButton'>
                <button onClick={() => { Menu(); history.push('/menu'); }} className='buttonIndex' id='ButtonOne'>TOMAR PEDIDO</button>

                <button onClick={() => { Ready(); history.push('/ready'); }} className='buttonIndex' id='ButtonTwo'>PEDIDOS LISTOS</button>

                <button onClick={() => { Cooking(); history.push('/cooking'); }} className='buttonIndex' id='ButtonThree'>COCINA</button>
            </div>

        </div>
    )
}
export default Inicio

