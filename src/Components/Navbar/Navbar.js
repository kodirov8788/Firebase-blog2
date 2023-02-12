import React from 'react'
import "./Navbar.css"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../firebase/FirebaseConfig';


function Navbar() {

    const provider = new GoogleAuthProvider()

    const SignGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)

            }).catch((error) => {
                console.log(error)
            });
    }




    return (
        <nav>
            <div className="left">
                <button className='R'>0% Рассрочка</button>
                <button className='S'>Скидки</button>
                <span>Карта сайта</span>
            </div>
            <div className="right">
                <h3>+998 (71) 202 202 1</h3>
                <button className='sale'>Продавайте на olcha</button>
                <div className="languages">
                    <ul>
                        <li>Узб</li>
                        <li>O'z</li>
                        <li>Рус</li>
                    </ul>
                </div>
            </div>
            <button onClick={SignGoogle}>Google orqali ro'yhatdan o`tish</button>
        </nav>
    )
}

export default Navbar
