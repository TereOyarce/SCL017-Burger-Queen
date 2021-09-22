import React from 'react'
import logo from '../img/logo2.1.png'

export const Inicio = () => {
    return (
        <div className='containerInicio'>
            <nav className='navBar'>
            <img src={logo} className='logo' />
            </nav>
            <div className='containerButton'>
                <button className='buttonIndex' id='ButtonOne'>TOMAR PEDIDO</button>
                <button className='buttonIndex' id='ButtonTwo'>PEDIDOS LISTOS</button>
                <button className='buttonIndex' id='ButtonThree'>COCINA</button>
            </div>
           
        </div>
    )
}
export default Inicio

