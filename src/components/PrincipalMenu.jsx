import React from 'react'

// export const getMenus = () => {
//     const [menuP, setmenuP] = React.useState([])

   
//     const getMenuP = async () => {
//         const data = await fetch('menuData.json')
//         const menuData = await data.json()
//         setmenuP(menuData.MenuPrincipal);

//     }
//     return (
//         <div className='bodyMenu'>
//             <div className='btnDiv'>
//             <button className='buttonMenu' id='principalMenuButton' onClick={getMenuP} >MENÚ PRINCIPAL</button>
//             </div>
            
//             <div className='divMenu' id='idMenu'>
            
//                 {menuP.map((menu) => (
//                     <div className='individualMenuP' key={menu.name}>
//                         <h2 className='menuName'>{menu.name}</h2>
//                         <h3 className='menuInfo'>{menu.info}</h3>
//                         <img src={menu.img} className='menuImg' />
//                         <p>${menu.price}</p></div>

//                 ))}
//             </div>
//         </div>
//     )
// }
