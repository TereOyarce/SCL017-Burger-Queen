import React from 'react'
import logo from '../img/logo2.1.png'
import { useHistory } from "react-router-dom";
import { Breakfast } from './GetMenus';
import { PrincipalMenu } from './GetMenus';


export const Menu = () => {
    let history = useHistory();
    // const [menuBF, setmenuBF] = React.useState([])


    // const getMenuBF = async () => {
    //     const data = await fetch('menuData.json')
    //     const menuData = await data.json()
    //     setmenuBF(menuData.Desayuno);


    // }
    // const [menuP, setmenuP] = React.useState([])

    // const getMenuP = async () => {
    //     const data = await fetch('menuData.json')
    //     const menuData = await data.json()
    //     setmenuP(menuData.MenuPrincipal);

    // }


    return (
        <div className='containerMenu'>

            <nav className='navMenu'>
                <button className='btnIndex' onClick={() => { history.push('/'); }}>Inicio</button>
            </nav>
            <div className='imgLogo'>
                <img src={logo} className='logo' />
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
            </div>

            <div className='bodyMenu'>
                <div className='divMenu' id='idMenu'>
                        <Breakfast/>
                       
                </div>
                <div className='detailsOrder' id='idDetailsOrder'></div>
            </div>
        </div>
    )
}
export default Menu;
