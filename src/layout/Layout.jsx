import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import ComposeEmail from '../components/ComposeEmail';
import LogoutPopup from '../components/modals/LogoutPopup';
import PasswordPopUp from '../components/modals/PasswordPopUp';
import SignupPopUp from '../components/modals/SignupPopUp';
import SignInPopUp from '../components/modals/SignInPopUp';

function Layout() {
    const [popUp1, setPopUp1] = useState(false);
    const [popUp2, setPopUp2] = useState(false);
    const [signUppopUp, setsignUppopUp] = useState(false);
    const [signInpopUp, setsignInpopUp] = useState(false);

    if(localStorage.getItem('theme') && localStorage.getItem('theme') == 'dark'){
        document.body.classList.add('dark');
    }
    const handleClose = () => {
        setPopUp1(false); 
        setPopUp2(false); 
        setsignUppopUp(false); 
        setsignInpopUp(false); 
        window.location.hash = ''; 
    };
    useEffect(() => {
        if (window.location.hash === '#popup1') {
            setPopUp1(true); 
        }else if(window.location.hash === '#popup2') {
            setPopUp2(true); 
        }else if(window.location.hash === '#signup') {
            setsignUppopUp(true); 
        }else if(window.location.hash === '#signin') {
            setsignInpopUp(true); 
        }   
      }, [popUp1, popUp2,signUppopUp,signInpopUp]);

  return (
    <>
        <Header />
        <main className="">
            <Sidebar />
            <div id="main_content">
                <div id="content">
                    <Outlet />
                </div>
            </div>
            <ComposeEmail />
        </main>
       
        <LogoutPopup isOpen={popUp1} onClose={handleClose} />
        <PasswordPopUp isOpen={popUp2} onClose={handleClose} />
        <SignupPopUp isOpen={signUppopUp} setIsOpen={setsignUppopUp}/>
        <SignInPopUp isOpen={signInpopUp} onClose={handleClose} />
    </>
  )
}

export default Layout