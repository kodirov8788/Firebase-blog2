import logo from './logo.svg';
import './App.css';
import { doc, getDocs } from "firebase/firestore";
import { firebase, firestore } from "./firebase/FirebaseConfig"
import { useEffect, useState } from 'react';
import { async } from '@firebase/util';
import { collection } from 'firebase/firestore';
import { Link } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import UnderNav from './Components/UnderNav/Undernav';
import SwiperSlider from './Components/Swiper/Swiper';
// import SwiperSlider from './Components/Swiper/Swiper';
// import Swiper2 from './Components/Swiper2/Swiper2';
// import End from './Components/End/End';
// import "./pages/Admin"

function App() {
  const [data, setData] = useState([])
  // console.log(data)
  useEffect(() => {
    const getData = async () => {
      let box = []
      let FirebaseData = await getDocs(collection(firestore, "blogs"))
      FirebaseData.forEach(doc => {
        return box.push({ id: doc.id, data: doc.data() })
      })
      setData(box)
      // console.log(data)
    }
    getData()

  }, [])



  return (
    <div className="App">
      <Navbar />
      <UnderNav />
      {/* <SwiperSlider /> */}
      {/* <a href="admin">Admin</a> */}
      <div className="blog_cover">
        {
          data.map(blog => (
            <div key={blog.id} className="blogs">
              <img width='200px' src={blog.data.imglink} alt="" />
              <h1>{blog.data.title}</h1>
              <h3>{blog.data.blognumber}</h3>
            </div>
          ))
        }

      </div>
    </div>
  );
}

export default App;


// https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg

// https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500

//https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8&w=1000&q=80