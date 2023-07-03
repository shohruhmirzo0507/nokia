import React from 'react'
import "./Footer.css"
import { BsArrowUpRight } from "react-icons/bs"
import { BiLogoLinkedin } from "react-icons/bi"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai"


function Footer() {
  return (
    <div className="footer">
    <div className='container'>
            <div className="footer__img"></div>
            <hr />
            <div className="footer__texts">
                <div className="footer__text">
                    <div className="footer__iil">
                        <h4 className="footer__liii">Looking for Nokia licensed products?</h4>
                        <h5 className="footer__liu"> <BsArrowUpRight/> <b>Explore consumer devices</b> </h5>
                    </div>
                    <div className="footer__il">
                        <li className="footer__li">Standardization</li>
                        <li className="footer__li"> Experience centers </li>
                    </div>
                    <div className="footer__il">
                        <li className="footer__li">Nokia  and training</li>
                        <li className="footer__li">Sustainability</li>
                    </div>
                </div>
                <hr className='footer__hr' />
                <div className="footer__icons">
                    <div className="footer__contact">
                        <ul className="footer__support">
                            <li className="footer__us">Contact </li>
                            <li className="footer__us">Support</li>
                            <li className="footer__us">Extranet </li>
                        </ul>
                    </div>
                    <div className="footer__icon">
                        <div className="footer__button">
                            <button>Subscribe for our latest news</button>
                        </div>
                        <div className="footer__iconn">
                            <li className="footer__i">
                                <span> <AiOutlineInstagram/> </span>
                            </li>
                            <li className="footer__i">
                                <span> <AiFillYoutube/> </span>
                            </li>
                            <li className="footer__i">
                                <span> <AiOutlineTwitter/> </span>
                            </li>
                            <li className="footer__i">
                                <span> <FaFacebookF/> </span>
                            </li>
                            <li className="footer__i">
                                <span> <BiLogoLinkedin/> </span>
                            </li>
                        </div>
                    </div>
                        <hr />
                </div>
                <hr className='footer__top__hr' />
                <div className="footer__top">
                    <div className="footer__left">
                        <h4>©2023 Nokia all rights reserved</h4>
                    </div>
                    <div className="footer__right">
                        <ul className="footer__right__ul">
                            <li className="footer__right__li">Cookies</li>
                            <li className="footer__right__li">Privacy</li>
                            <li className="footer__right__li">Terms </li>
                            <li className="footer__right__li">Inclusive</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer