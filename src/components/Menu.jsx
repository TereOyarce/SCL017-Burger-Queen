import React from 'react'
import logo from '../img/logo2.1.png'
import { useHistory } from "react-router-dom";
import Inicio from './Inicio';



export const Menu = () => {

    const [menuBF, setmenuBF] = React.useState([])

    React.useEffect(() => {
        getMenuBF()
    }, [])
    const getMenuBF = async () => {
        const data = await fetch('menuData.json')
        const menuData = await data.json()
        setmenuBF(menuData.menu);

    }
    

    return (
        <div className='containerMenu'>

            <nav className='navMenu'>
                <img src={logo} className='logo' />
            </nav>

            <div className='subMenu'>
                <section className='client'>
                    <select id="tableClient">
                        <option selected value="0">Seleccione Mesa</option>
                        <option value="1" className="tables1" id='table1'>Mesa 1</option>
                        <option value="2" className="tables2" id='table2'>Mesa 2</option>
                        <option value="3" className="tables3" id='table3'>Mesa 3</option>
                        <option value="4" className="tables4" id='table4'>Mesa 4</option>
                    </select>
                </section>

                <button className='buttonMenu' id='breakfastButton' onClick={getMenuBF}>DESAYUNO</button>


                <button className='buttonMenu' id='principalMenuButton'>MENÚ PRINCIPAL</button>

                <section className='waiter'>
                    <select id="waiterlist">
                        <option selected value="0">Mesero</option>
                        <option value="1" className="waiters" id='navirou'>Navirou</option>
                        <option value="2" className="waiters" id='hinoa'>Hinoa</option>
                        <option value="3" className="waiters" id='fuhen'>Fuhen</option>
                    </select>
                </section>
            </div>

            <div className='bodyMenu'>
                <div className='divMenu' id='idMenu'>
                    {menuBF.map((menu) => (
                        <div className='individualMenu' key={menu.name}>{menu.name}-{menu.info}</div>
                        
    ))}
                </div>
                <div className='detailsOrder' id='idDetailsOrder'></div>
            </div>
        </div>
    )
}
export default Menu;