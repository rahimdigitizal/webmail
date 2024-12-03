import React from 'react'
import Logo from "../assets/images/org_logo.png";

function ComingSoon2() {
  return (
    <>
        <div className="coming_bg second">
            <div className='coming_content'>
                <canvas id="canvas2"></canvas>
                <div className='coming_body'>
                    <h3 className="coming_heading dark">COMING SOON</h3>
                    <p className='coming_txt'>Safer. Stronger. Smarter. Private.</p>
                    <div className='d-flex justify-content-center'>
                        <img src={Logo} alt="" width={"200px"} height={'auto'}/>
                    </div>
                </div>
                    <div className='coming_links'>
                        <a href="mailto:1@private.ki" >Email</a><span> | </span>
                        <a href="pgpkey.txt" target='_blank'>PGP key</a>
                    </div>
            </div>
        </div>
    </>
  )
}

export default ComingSoon2