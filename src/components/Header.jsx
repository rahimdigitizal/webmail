import React from 'react'
import { Link } from 'react-router-dom'
import UserAvatar from "../assets/images/profile.png";
import Logo from "../assets/images/logo.png";

function Header() {
  return (
    <>
    <header>
        <nav>
            <div className="container-fluid nav_container">
                <div className="toggle_main">
                    <button className="icon_btn pr-0" id="toggleBtn"><i className='bx bx-menu-alt-left '></i></button>
                    <img src={Logo} alt="" width="140px" className="logo" />
                    
                </div>
                <div className="d-flex align-items-center justify-content-between w-100">
                   <div className="search_main hide_mob">
                        <i className='bx bx-search'></i>
                        <input type="text" placeholder="Search Mail"/>
                        <i className='bx bx-chart'></i> 
                    </div>
                    <div className="d-flex align-items-center">
                        <label htmlFor="mode" className="mode_toggle">
                            <input type="checkbox" hidden id="mode"/>
                            <i className="bx bx-moon icon_btn dark_mode_icon d-none"></i>
                            <i className="bx bx-sun icon_btn light_mode_icon"></i>
                        </label>
                        <div className="btn-group dropstart hide_mob">
                            <button type="button" className="icon_btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className='bx bxs-help-circle'></i>
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" type="button">Help</button></li>
                                <li><button className="dropdown-item" type="button">Training</button></li>
                                <li><button className="dropdown-item" type="button">Update</button></li>
                                <hr className="my-2"/>
                                <li><button className="dropdown-item" type="button">Send feedback</button></li>
                            </ul>
                        </div>
                        <Link className="icon_btn hide_mob" to="/settings"><i className='bx bxs-cog'></i></Link>
                        <div className="position-relative hide_mob">
                            <button className="profile_btn"><img src={UserAvatar} className="rounded-circle" alt=""/></button>
                            <div id="profileDropdown" className="d-none">
                                <div className="d-flex align-items-center justify-content-center flex-column mt-4">
                                    <img src={UserAvatar} className="rounded-circle" alt="" width="90px" height="90px"/>
                                    <p className="fs-4 m-0">Hi, Your Name!</p>
                                    <p className="text-center m-0">yourname@gmail.com</p>
                                    <Link className="outline_btn" to="/settings?tab=account">Manage your Account</Link>
                                    <button className="sign_out_btn"><i className='bx bx-log-out'></i> Sign out</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                
            </div>
        </nav>
    </header>
    <button className="compose_btn email_compose"><i className="bx bx-edit"></i></button>
    </>
  )
}

export default Header