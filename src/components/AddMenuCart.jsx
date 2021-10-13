import React from 'react'


const AddMenuCart =(props)=> {
    const {actuallyCart , removeItemCart} = props;
console.log(actuallyCart);
    return (
        <div className='orderTable'>
            {actuallyCart.map((item) => (
                <div key ={item.id}>
                    {`${item.name}$${item.price}`}
                    <input type="submit" value='X' onClick={()=> removeItemCart(item)} />
                </div>
            ))}
        </div>
    )
}
export default AddMenuCart
