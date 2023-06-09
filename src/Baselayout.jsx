import React, {  useState  } from 'react'
import { Outlet } from 'react-router-dom';
import {DataContext} from './DataContext'
import Nav from './components/Nav';
import Footer from './components/Footer';


export default function BaseLayout() {
const [isLoggenin, setIsLoggedIn] =useState(false)
  let [indexVal , setIndexVal] = useState(1);
  const [startTimer , setStartTimer] = useState(false)
  const [auth, setAuth] = useState({});
  const [isHost, setIsHost] = useState(true)
const [showModal , setShowModal] = useState(false)
const [showListVanModal , setShowListVanModal] = useState(false)


  return (
    <DataContext.Provider value={{isHost,showModal , setShowModal , showListVanModal , setShowListVanModal}} >
    <div style={{overflow: showModal|showListVanModal ? 'hidden' : ' '  }}>
    <Nav/>
    <div className='outlet'>
    <Outlet/>
    </div>
    <Footer/>
    </div>
    </DataContext.Provider>
   )
}
