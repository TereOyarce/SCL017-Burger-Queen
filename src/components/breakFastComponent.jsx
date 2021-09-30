import React, {Component} from 'react'


export class BreakFastComponent extends Component 
{
    // loqsea
    constructor(props) 
    {
        super(props);
        this.menuBF = [];
        this.getMenuBF();
        
    }
    

    getMenuBF =  () => {
        const data =  fetch('menuData.json')
        const menuData =  data.json()
        this.menuBF = menuData.Desayuno;

    }
    render()
    {
        return (
            <div className='bodyMenu'>
            <div className='divMenu' id='idMenu'>
                {this.menuBF.map((menu) => (
                    <div className='individualMenuP' key={menu.name}>
                        <h2 className='menuName'>{menu.name}</h2>
                        <h3 className='menuInfo'>{menu.info}</h3>
                        <img src={menu.img} className='menuImg' />
                        <p>${menu.price}</p></div>
    
                ))}
            </div>
            </div>
        )
    }
}
