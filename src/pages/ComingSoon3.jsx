import React from 'react'
import Logo from "../assets/images/org_logo.png";

function ComingSoon3() {
  return (
    <>
        <div className='coming_bg3'>
            <div className="white_drop"></div>
            <div className="circle"></div>
            <div className="circle2"></div>
            <div className='coming_body mt-5'>
                <h3 className="coming">COMING</h3>
                <h3 className="soon">SOON</h3>
                <p className='coming_txt coming_3'>Safer. Stronger. Smarter. Private.</p>
                <div className='d-flex justify-content-center'>
                    <img src={Logo} alt="" width={"300px"} height={'auto'}/>
                </div>
            </div>
            <div className='coming_links'>
                <a href="mailto:1@private.ki" >Email</a><br/>
                <a href="pgpkey.txt" target='_blank'>PGP key</a>
            </div>
        </div>
    </>
  )
}

export default ComingSoon3