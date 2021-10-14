import React from 'react'
import logo from '../img/logo2.1.png'
import { useHistory } from "react-router-dom";
import './styles/Inicio.css'

export const Inicio = () => {
    let history = useHistory();
    return (
        <div className='containerInicio'>
            <nav className='navBar'>
                <img src={logo} alt='palicoscafe' className='logo' />
            </nav>
            <div className='containerButton'>
                <button onClick={() => { history.push('/menu'); }} className='buttonIndex' id='ButtonOne'>TOMAR PEDIDO</button>

                <button onClick={() => {history.push('/ready'); }} className='buttonIndex' id='ButtonTwo'>PEDIDOS LISTOS</button>

                <button onClick={() => { history.push('/cooking'); }} className='buttonIndex' id='ButtonThree'>COCINA</button>
            </div>

        </div>
    )
}
export default Inicio

