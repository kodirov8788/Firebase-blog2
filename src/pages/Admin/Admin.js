import React from 'react'
import "./Admin.css"
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase/FirebaseConfig"
import { Link, useNavigate } from "react-router-dom"
import Loader from '../../Components/Loader/Loader';
import { useState } from 'react';


function Admin() {
    const [loader, setLoader] = useState(false)

    const navigate = useNavigate()

    const SubmitFunc = async (e) => {
        e.preventDefault()
        setLoader(true)
        let Title = e.target[0].value
        let Blognumber = e.target[1].value
        let ImgLink = e.target[2].value

        if (Title === "" || Blognumber === '' || ImgLink === "") {
            alert("Inputlarni toldiring!")

        }

        await addDoc(collection(db, "blogs"), {
            title: Title,
            blognumber: Blognumber + "$",
            imglink: ImgLink
        });

        navigate("/")

    }

    return (
        <>
            {loader === true ?
                <Loader />
                : <form onSubmit={SubmitFunc} action="" className='admin'>
                    <Link to="/"><h1 className='home'>Home</h1></Link>
                    <label htmlFor='title'>Title</label>
                    <input type="text" name="" placeholder='title...' id="" />

                    <label htmlFor="number" >Price</label>
                    <input type="number" placeholder='Number...' />

                    <label htmlFor="number" >Img link</label>
                    <input type="text" placeholder='Img link' />
                    <button>Add</button>
                </form>
            }

        </>
    )
}

export default Admin

