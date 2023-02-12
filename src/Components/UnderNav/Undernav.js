import React from 'react'
import logo from "../../Images/logo.png"
import "./Undernav.css"

function UnderNav() {
    return (
        <div className='undernav'>

            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <button>Каталог</button>
            <input type="text" placeholder='Поиск по каталогу' />
            <ul>
                <li>Сравнение</li>
                <li>Избранные</li>
                <li>Корзина</li>
                <li><a href="admin">Admin</a></li>
            </ul>
        </div>
    )
}

export default UnderNav
