import React from 'react'
import './styles/AddMenuCart.css'
import deleteIcon from '../img/deleteicon2.png'

const AddMenuCart = (props) => {
    const { actuallyCart, removeItemCart, totalCart } = props;
    console.log(actuallyCart);
    return (

        <div className='orderTable'>

           
            <div className='containerOrder'>
            <p className='pOrder'>DETALLE ORDEN</p>
                {actuallyCart.map((item) => (
                    <div className='itemOrder' key={item.id}>
                        {`${item.qty} ${item.name} = $${item.price}`}
                        <img src={deleteIcon} alt='delete' className='xBtn' onClick={() => removeItemCart(item)} />

                    </div>

                ))}
                <div className='totalCart'>Total : ${totalCart}</div>
                 <button className='sendOrder'>ENVIAR</button> 
            </div>
           
        </div>
    )
}
export default AddMenuCart
