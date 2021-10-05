import React from 'react'

export const GetMenus = () => {

    const [menuBF, setmenuBF] = React.useState([])

    const getMenuBF = async () => {
        const data = await fetch('menuData.json')
        const menuData = await data.json()
        setmenuBF(menuData.Desayuno);

    }

    const [menuP, setmenuP] = React.useState([])


    const getMenuP = async () => {
        const data = await fetch('menuData.json')
        const menuData = await data.json()
        setmenuP(menuData.MenuPrincipal);

    }

    return (
        <div className='bodyCart'>
            <div className='btnDiv'>
                <button className='buttonMenu' id='breakfastButton' onClick={getMenuBF}>DESAYUNO</button>
                <button className='buttonMenu' id='principalMenuButton' onClick={getMenuP} >MENÚ PRINCIPAL</button>

            </div>

            <div className='divMenu' id='idMenu'>

                {menuBF.map((menu) => (
                    <div className='individualMenuB' key={menu.name}>
                        <h2 className='menuName'>{menu.name}</h2>
                        <h3 className='menuInfo'>{menu.info}</h3>
                        <img src={menu.img} className='menuImg' />
                        <p>${menu.price}</p>
                        <button className='menuBtn'>AGREGAR</button></div>

                ))}
                {menuP.map((menu) => (
                    <div className='individualMenuP' key={menu.name}>
                        <h2 className='menuName'>{menu.name}</h2>
                        <h3 className='menuInfo'>{menu.info}</h3>
                        <img src={menu.img} className='menuImg' />
                        <p>${menu.price}</p>
                        <button className='menuBtn'>AGREGAR</button></div>


                ))}
            </div>
        </div>
    );

}

// export const PrincipalMenu = () => {
//     const [menuP, setmenuP] = React.useState([])


//     const getMenuP = async () => {
//         const data = await fetch('menuData.json')
//         const menuData = await data.json()
//         setmenuP(menuData.MenuPrincipal);

//     }
//     return (

//         <div className='bodyMenu'>
//         <div className='btnDiv'>
//         <button className='buttonMenu' id='principalMenuButton' onClick={getMenuP} >MENÚ PRINCIPAL</button>
//         </div>                 
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


