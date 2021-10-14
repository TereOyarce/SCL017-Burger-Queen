import React from 'react'
import './styles/Menu.css'



export const Menu = (props) => {
const { actuallyData , addItemCart } = props
    

    return (
                  
            <div className='bodyMenu'>
                <div className='divMenu' >

                    {actuallyData.map((menu) => (

                        <div className='individualMenuB' key={menu.id}>
                            <h2 className='menuName'>{menu.name}</h2>
                            <h3 className='menuInfo'>{menu.info}</h3>
                            <img src={menu.img} alt='menuimg' className='menuImg' />
                            <p>${menu.price}</p>
                            <button className='menuBtn'onClick= {()=> addItemCart(menu)} >AGREGAR</button>
                        </div>
                    ))}

                </div>
               
            </div>
       
    )
}
export default Menu;
