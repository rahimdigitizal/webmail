import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div id="sidebar" className="hide_mob">
        <div>
            <div className="show_mob px-2 py-2">
                <div className="search_main ">
                    <i className='bx bx-search'></i>
                    <input type="text" placeholder="Search Mail"/>
                    <i className='bx bx-chart'></i>
                </div>
            </div>
            <button className="compose_btn_simple email_compose"><i className="bx bx-edit"></i> <span className="hide_txt"> Compose</span></button>
            <ul className="sidebar_ul">
                <li className="">
                    <NavLink to="/"><i className="bx bxs-envelope"></i> <span className="hide_txt">Inbox</span></NavLink>
                </li>
                <li>
                    <NavLink to="/spam"><i className="bx bx-bell"></i> <span className="hide_txt">Spam</span> </NavLink>
                </li>
                <li>
                    <NavLink to="/bin"><i className="bx bx-trash-alt"></i> <span className="hide_txt">Bin</span> </NavLink>
                </li>
            </ul>
        </div>
        <div className="d-md-none d-flex justify-content-between p-2">
            <Link className="secondary_btn_sm" to="settings"><i className="bx bx-cog top_2"></i> Settings</Link>
            <button className="primary_btn_sm"><i className="bx bx-log-out top_2"></i> Sign Out</button>
        </div>
    </div>
  )
}

export default Sidebar