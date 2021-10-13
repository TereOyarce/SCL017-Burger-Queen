import React from 'react'
import data from '../components/menuData.json'
import Menu from './Menu'
import AddMenuCart from './AddMenuCart'


export const Waiters = () => {

    const [actuallyData, setDataActually] = React.useState(data.MenuPrincipal);
    const [actuallyCart, setCartActually] = React.useState([]);


    const showBF = () => {
        setDataActually(data.Desayuno);
    };
    const showMP = () => {
        setDataActually(data.MenuPrincipal);
    };

    const addItemCart = (item) => {
        setCartActually([...actuallyCart, item])
    }

    const removeItemCart = (item) =>{
        let copyCart = [...actuallyCart];
        copyCart = copyCart.filter((cartItem)=>
        cartItem.id !== item.id);
        setCartActually(copyCart);
    }

    return (
        <div>
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
