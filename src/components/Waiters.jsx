import React from 'react'
import data from './menuData.json'
import Menu from './Menu'
import AddMenuCart from './AddMenuCart'
import  home from '../img/homeicon.png';
import  logo from '../img/logo2.1.png';
import { useHistory } from "react-router-dom";
import './styles/Waiters.css'


export const Waiters = () => {

    let history = useHistory();

    const [actuallyData, setDataActually] = React.useState(data.MenuPrincipal);
    const [actuallyCart, setCartActually] = React.useState([]);


    const showBF = () => {
        setDataActually(data.Desayuno);
    };
    const showMP = () => {
        setDataActually(data.MenuPrincipal);
    };
    const showDr = () =>{
        setDataActually(data.Bebidas)
    }

    const addItemCart = (item) => {
        setCartActually([...actuallyCart, item])
    }

    const removeItemCart = (item) => {
        let copyCart = [...actuallyCart];
        copyCart = copyCart.filter((cartItem) =>
            cartItem.id !== item.id);
        setCartActually(copyCart);
    }

    return (

        <div className='containerMenu'>

            <nav className='navMenu'>
                <img src={home} alt='Home' className='btnHome' onClick={() => { history.push('/'); }} />
            </nav>
            <div className='imgLogo'>
                <img src={logo} alt='palicoscafe' className='logo' />
            </div>
            <div className='subMenu'>
                <section className='client'>
                    <select id="tableClient">
                        <option selected value="0">Seleccione Mesa ▼</option>
                        <option value="1" className="tables1" id='table1'>Mesa 1</option>
                        <option value="2" className="tables2" id='table2'>Mesa 2</option>
                        <option value="3" className="tables3" id='table3'>Mesa 3</option>
                        <option value="4" className="tables4" id='table4'>Mesa 4</option>
                    </select>
                </section>

                <section className='waiter'>
                    <select id="waiterlist">
                        <option selected value="0">Mesero ▼</option>
                        <option value="1" className="waiters" id='navirou'>Navirou</option>
                        <option value="2" className="waiters" id='hinoa'>Hinoa</option>
                        <option value="3" className="waiters" id='fuhen'>Fuhen</option>
                    </select>
                </section>
                <button className='buttonMenu' id='breakfastButton' onClick={showBF}>DESAYUNO</button>
                <button className='buttonMenu' id='principalMenuButton' onClick={showMP}>PRINCIPAL</button>
                <button className='buttonMenu' id='drinkButton' onClick={showDr}>BEBIDAS</button>

            </div>
            <Menu
                actuallyData={actuallyData}
                addItemCart={addItemCart}
            />
            <AddMenuCart
                actuallyCart={actuallyCart}
                removeItemCart={removeItemCart}
            />
        </div>
    )
}
