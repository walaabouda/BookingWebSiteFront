import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import './NavBar.css'
const NavBar = () => {
  const {user} = useContext(AuthContext)
  const [openModal, setOpenModal] = useState(false)
  const navigate = useNavigate()

  const handleClick = () =>
  {
    if(user)
    {
      setOpenModal(true)
    }else{
      navigate("/register")
    }
    

  }
  const handleClickk = () =>
  {
    if(user)
    {
      setOpenModal(true)
    }else{
      navigate("/login")
    }
    

  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Campina</span>
       {user ? user.username : <div className="navItems">
          <button className="navButton" onClick={handleClick}>Register</button>
          <button className="navButton" onClick={handleClickk}>Login</button>
        </div>}
      </div>
    </div>
  )
}

export default NavBar