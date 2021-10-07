import React from 'react'
import logo from '../img/logo2.1.png'
import home from '../img/icons8-casa.svg'
import { useHistory } from "react-router-dom";
import data from '../components/menuData.json';
import AddToCart from './OrderSummary';

export const Menu = () => {
    let history = useHistory();
  

    const [actuallyData, setDataActually] = React.useState(data.MenuPrincipal);

    const showBF = () => {
        setDataActually(data.Desayuno);
    };
    const showMP = () => {
        setDataActually(data.MenuPrincipal);
    };

    return (
        <div className='containerMenu'>

            <nav className='navMenu'>
                <img src={home} className='btnHome' onClick={() => { history.push('/'); }} />
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
                <button className='buttonMenu' id='breakfastButton' onClick={showBF}>DESAYUNO</button>
                <button className='buttonMenu' id='principalMenuButton' onClick={showMP}>MENÚ PRINCIPAL</button>

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

                    {actuallyData.map((menu) => (
                        <div className='individualMenuB' key={menu.name}>
                            <h2 className='menuName'>{menu.name}</h2>
                            <h3 className='menuInfo'>{menu.info}</h3>
                            <img src={menu.img} className='menuImg' />
                            <p>${menu.price}</p>
                            <button className='menuBtn' onClick={AddToCart}>AGREGAR</button>
                        </div>

                    ))}

                </div>
                <div className='detailsOrder' id='idDetailsOrder'>
                    <p>DETALLE ORDEN</p>
                   <AddToCart
                   />
                </div>
            </div>
        </div>
    )
}
export default Menu;
