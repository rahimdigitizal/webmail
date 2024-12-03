import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Mail() {
    useEffect(() => {
        const width = window.innerWidth;
        if(width < 769){
            document.querySelector('#sidebar').classList.add('close');
        }

    }, [])
  return (
    <>
        <div className="content_header pb-1 d-flex justify-content-between align-items-center ">
            <div className="d-flex align-items-center gap-2">
                <Link className="icon_btn_sm top_2 " to="/"><i className="bx bx-arrow-back"></i></Link>
                <div className="from_main">
                    <div className="d-flex gap-2 align-items-center">
                        <div className="d-flex gap-4 align-items-center">
                            <div>
                                <p className="m-0 fw-bold line-height-normal fs_14">Facebook</p>
                                <p className="m-0 text-muted fs_13">to me <i className="bx bx-chevron-down top_2"></i></p>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <p className="m-0 verify_active"><i className="bx bxs-lock-alt"></i> <span className="fs_14 hide_mob">Encrypted</span></p>
                                <p className="m-0 verify_disabled"><i className="bx bx-key"></i> <span className="fs_14 hide_mob">Signed</span></p>
                            </div>
                        </div>
                    </div>
                    <p className="m-0 new_old">Oct 17, 2024, 8:00 AM </p>
                    
                </div>
            </div>
            <div className="d-flex gap-2 align-items-center ">
                <button className="icon_btn_sm top_2 hide_mob" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Mark as spam"><i className="bx bx-bell text-warning ml-4"></i></button>
                <button className="icon_btn_sm mob_float_btn bottom_72 top_md_2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Move to bin"><i className="bx bx-trash-alt text-danger"></i></button>
                <div className="d-flex align-items-center">
                    <div className="print_window hide_mob top_2">
                        <button className="icon_btn_sm"><i className="bx bx-printer"></i></button>
                        <button className="icon_btn_sm"><i className='bx bx-window-open'></i></button>
                    </div>
                    <button className="icon_btn_sm mob_float_btn bottom_125 top_md_2"><i className="bx bx-reply"></i></button>
                    <button className="icon_btn_sm mob_float_btn bottom_177 top_md_2"><i className="bx bx-dots-vertical-rounded"></i></button>
                </div>
                <button className="icon_btn_sm bg_light_green"><i className="bx bx-chevron-left"></i></button>
                <button className="icon_btn_sm bg_light_green"><i className="bx bx-chevron-right"></i></button>
            </div>
        </div>
        
        <div>
            {/* <div className="subject_main">
                <h4 className="mb-0 hide_mob">You have 14 notifications about Name and others</h4>
            </div> */}
            
            <div className="subject_main">
                <h4 className="mb-0">You have 14 notifications about Name and others</h4>
            </div>
            <div className="mail_body">
                <p className="fw-bold">Hello World!</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here,</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here,</p>
            </div>
            <div className="r_and_f_buttons">
                <button className="outline_btn fs-6 py-2 px-3 fw-normal"><i className="bx bx-reply"></i> Reply</button>
                <button className="outline_btn fs-6 py-2 px-3 fw-normal"><i className="bx bx-arrow-from-left"></i> Forward</button>
            </div>
        </div>
                
    </>
  )
}

export default Mail