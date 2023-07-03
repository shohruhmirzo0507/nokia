import React from 'react'
import "./Navbar.css"
import { AiOutlineGlobal } from "react-icons/ai"
import { FiSearch } from "react-icons/fi"
import { Link } from 'react-router-dom'

function Navbar() {
    const [navActive,setNavActive] = React.useState(false)
    
  return (
    <div className="navbar">
    <div className='container'>
            <div className="navbar__text">
                <Link to={"/"} className="navbar__logo"></Link>
                <div className="navbar__il">
                <ul className={navActive ? "navbar__collection active" : "navbar__collection"}>
                        <li className="navbar__li">Service providers</li>
                        <Link to={"/express"} className="navbar__li">Enterprises and governments</Link>
                        <li className="navbar__li">Licensing</li>
                        <li className="navbar__li">Partners</li>
                        <li className="navbar__li">Insigths and research</li>
                        <li className="navbar__li">We are Nokia</li>
                        <Link to={"/blog"} className="navbar__local">
                            <AiOutlineGlobal/>
                        </Link>
                        <Link to={"/login"} className="navbar__search">
                            <FiSearch/>
                        </Link>
                    </ul>
                   
                    <div className='navbar_hello' onClick={() => {setNavActive((p) => p = !p )}}>
                        <div className="navbar__line">X</div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar