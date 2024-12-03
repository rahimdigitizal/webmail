import React, { useEffect } from 'react'

function Spam() {
    useEffect(() => {
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet'; 
        linkElement.href = '/index.css';
        document.head.appendChild(linkElement);  
        const width = window.innerWidth;
        if(width < 769){
            document.querySelector('#sidebar').classList.add('close');
        }

    }, [])
  return (
    <>
        <div id="content">
                <div className="alert alert-light border alert-dismissible fade show d-flex justify-content-between align-items-center mt-2 mb-md-3 mb-0 flex-md-cloumn" role="alert">
                    <div className="d-flex align-items-center gap-3">
                        <img src="assets/images/security-icon.webp" width="auto" height="42px" alt=""/>
                        <p className="m-0"><strong>You could lose access to your history.</strong><br/> <span className="hide_mob alert_txt">Adding a recovery phone and mails can help you sign in and keep your account secure</span></p>
                    </div>
                    <div className="d-flex">
                        <button type="button" className="btn theme_color">Add recovery info</button>
                        <button type="button" className="btn dissmiss_btn" data-bs-dismiss="alert" aria-label="Close">Dismiss</button>
                    </div>
                </div>    
                <div className="content_header d-flex justify-content-between align-items-center ">
                    <nav className="d-flex gap-2 align-items-center">
                        <div className="nav nav-tabs main_tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"><i className="bx bxs-envelope"></i> Inbox</button>
                        </div>
                        <div className="trash_spam_btn d-none">
                            <button className="primary_outline_btn_sm"><i className="bx bx-trash-alt text-danger"></i> <span className="hide_mob">Move to Trash</span></button>
                            <button className="primary_outline_btn_sm"><i className="bx bx-bell text-warning"></i> <span className="hide_mob">Mark as Spam</span></button>
                        </div>
                    </nav>
                    <div className="d-flex gap-2 align-items-center ">
                        <p className="m-0 new_old hide_mob">1-50 of 322</p>
                        <button className="icon_btn_sm bg_light_green"><i className="bx bx-chevron-left"></i></button>
                        <button className="icon_btn_sm bg_light_green"><i className="bx bx-chevron-right"></i></button>
                    </div>
                </div>
                
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="mail_list d-flex justify-content-center align-items-center">
                            <p className="text-center py-2">
                                No mails here yet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Spam