import React from 'react'

function ComposeEmail() {
  return (
    <>
        <div id="composeEmail" className="d-none">
            <div className="compose_header d-flex align-items-center justify-content-between">
                <p className="m-0 fw-bold fs_14">New Message</p>
                <div className="d-flex align-items-center gap-2">
                    <a href="#" className="minimize_compose"><i className="bx bx-minus"></i></a>
                    <a href="#" className="fullscreen_compose hide_mob"><i className="bx bx-fullscreen"></i></a>
                    <a href="#" className="remove_compose"><i className="bx bx-x"></i></a>
                    <button className="icon_btn_sm show_mob link_mob"><i className="bx bx-link"></i></button>
                    <button type="button" className="btn email_send_btn show_mob">Send</button>
                </div>
            </div>
            <div className="compose_content">
                <div className="position-relative">
                    <a href="#" className="text-dark text-decoration-none recipient_to fs_14 recipient_focus d-none">To :</a>
                    
                    <div className="compose_inp"  style={{minHeight: "35.5px"}} contentEditable="true" placeholder="Recipients" id="recipient" ></div>
                    <div className="d-flex gap-2 fs_14 cc_bcc recipient_focus d-none">
                        <a href="#" className="text-muted text-decoration-none" id="cc_btn">Cc</a>
                        <a href="#" className="text-muted text-decoration-none" id="bcc_btn">Bcc</a>
                    </div>
                    <div className="email_suggestion d-none"></div>
                </div>
                <div className="mt-2 d-none position-relative" id="cc">
                    <div className="compose_inp" style={{minHeight: "35.5px"}} contentEditable="true" placeholder="CC"></div>
                    <div className="email_suggestion d-none"></div>
                </div>
                <div className="mt-2 d-none position-relative" id="bcc">
                    <div className="compose_inp" style={{minHeight: "35.5px"}} contentEditable="true" placeholder="Bcc"></div>
                    <div className="email_suggestion d-none"></div>
                </div>
                <div className="mt-2">
                    <input type="text" placeholder="Subject" className="compose_inp" id="subject"/>
                </div>
                <div className="mt-2">
                    <textarea name="" className="compose_textarea" id="compose_content"></textarea>
                </div>
            </div>
            <div className="compose_footer">
                <div className=" d-flex align-items-center justify-content-between border-top border-bottom mb-2">
                    <div className="d-flex align-items-center gap-2">
                        <p className="m-0 verify_active security_btn"><i className="bx bxs-lock-alt"></i> <span className="fs_14">Encrypted</span></p>
                        <p className="m-0 verify_disabled security_btn"><i className="bx bx-key"></i> <span className="fs_14">Signed</span></p>
                    </div>
                    <div className="position-relative">
                        <div id="format_dropdown" className="d-none">
                            <ul className="format_list">
                                <li>
                                    <label htmlFor="normal">Normal</label>
                                    <i className="bx bx-check check_icon"></i>
                                    <input type="radio" hidden name="format" id="normal"/>
                                </li>
                                <li>
                                    <label htmlFor="plain_text">Plain Text</label>
                                    <i className="bx bx-check check_icon d-none"></i>
                                    <input type="radio" hidden name="format" id="plain_text"/>
                                </li>
                                <hr className="my-1"/>
                                <li>
                                    <label htmlFor="public_key">Attach public key</label>
                                    <i className="bx bx-check check_icon2 d-none"></i>
                                    <input type="checkbox" hidden name="format2" id="public_key"/>
                                </li>
                                <li>
                                    <label htmlFor="read_receipt">Request read receipt</label>
                                    <i className="bx bx-check check_icon3 d-none"></i>
                                    <input type="checkbox" hidden name="format3" id="read_receipt"/>
                                </li>

                            </ul>
                        </div>   
                        <button className="icon_btn_sm" id="format_btn"><i className='bx bx-dots-horizontal-rounded'></i></button>
                    </div>
                </div>
                <div className=" d-md-flex align-items-center justify-content-between hide_mob ">
                    <div>
                        <div className="btn-group">
                            <button type="button" className="btn email_send_btn">Send</button>
                        </div>
                        <button className="icon_btn_sm"><i className="bx bx-link"></i></button>
                    </div>
                    <div className="hide_mob">
                        <button className="icon_btn_sm remove_compose"><i className="bx bx-trash-alt"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ComposeEmail