import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
    useEffect(() => {
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet'; 
        linkElement.href = '/index.css';
        document.head.appendChild(linkElement);  
           
        const width = window.innerWidth;
        if(width < 769){
            document.querySelector('#sidebar').classList.add('close');
        }

        return () => {
          document.head.removeChild(linkElement);
        };

      }, []);
    
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
                    <div className="mail_list" id="mailList">
                        <Link className="border-bottom mail_item read" to="/mail">
                            <div className="col-md-3 col-12 d-flex align-items-center justify-content-between gap-1 py-2 px-3">
                                <div className="d-flex align-items-center gap-1">
                                    <input type="checkbox" className="icon_btn_sm mr-2 mail_inp"/>
                                    <p className="m-0 fw-bold fs_15">Amazon Support</p>
                                </div>
                                <p className="fw-bold m-0 fs_14 show_mob">6 Nov</p>
                            </div>
                            <div className="col-md-9 col-12 d-flex align-items-center justify-content-between px-3">
                                <p className="m-0 fs_14"><strong>Your recent Amazon order</strong> - Thank you for your purchase! Your order is currently being processed and will be...</p>
                                <p className="fw-bold m-0 fs_14 hide_mob">6 Nov</p>
                            </div>
                        </Link>
                        
                        <Link className="border-bottom mail_item read" to="/mail">
                            <div className="col-md-3 col-12 d-flex align-items-center justify-content-between gap-1 py-2 px-3">
                                <div className="d-flex align-items-center gap-1">
                                    <input type="checkbox" className="icon_btn_sm mr-2 mail_inp"/>
                                    
                                    <p className="m-0 fw-bold fs_15">Google Security</p>
                                </div>
                                <p className="fw-bold m-0 fs_14 show_mob">5 Nov</p>
                            </div>
                            <div className="col-md-9 col-12 d-flex align-items-center justify-content-between px-3">
                                <p className="m-0 fs_14"><strong>Unusual sign-in detected</strong> - We noticed a sign-in attempt from a new device or location. If this wasn’t you...</p>
                                <p className="fw-bold m-0 fs_14 hide_mob">5 Nov</p>
                            </div>
                        </Link>
                        
                        <Link className="border-bottom mail_item read" to="/mail">
                            <div className="col-md-3 col-12 d-flex align-items-center justify-content-between gap-1 py-2 px-3">
                                <div className="d-flex align-items-center gap-1">
                                    <input type="checkbox" className="icon_btn_sm mr-2 mail_inp"/>
                                    
                                    <p className="m-0 fw-bold fs_15">PayPal</p>
                                </div>
                                <p className="fw-bold m-0 fs_14 show_mob">5 Nov</p>
                            </div>
                            <div className="col-md-9 col-12 d-flex align-items-center justify-content-between px-3">
                                <p className="m-0 fs_14"><strong>Payment Received</strong> - Congratulations! Youve received a payment in your PayPal account. Please review the tran...</p>
                                <p className="fw-bold m-0 fs_14 hide_mob">5 Nov</p>
                            </div>
                        </Link>
                        
                        <Link className="border-bottom mail_item unread" to="/mail">
                            <div className="col-md-3 col-12 d-flex align-items-center justify-content-between gap-1 py-2 px-3">
                                <div className="d-flex align-items-center gap-1">
                                    <input type="checkbox" className="icon_btn_sm mr-2 mail_inp"/>
                                    
                                    <p className="m-0 fw-bold fs_15">Facebook</p>
                                </div>
                                <p className="fw-bold m-0 fs_14 show_mob">4 Nov</p>
                            </div>
                            <div className="col-md-9 col-12 d-flex align-items-center justify-content-between px-3">
                                <p className="m-0 fs_14"><strong>Account Security Update</strong> - We’ve recently updated our security measures to keep your account protected. Please...</p>
                                <p className="fw-bold m-0 fs_14 hide_mob">4 Nov</p>
                            </div>
                        </Link>
                        
                        <Link className="border-bottom mail_item unread" to="/mail">
                            <div className="col-md-3 col-12 d-flex align-items-center justify-content-between gap-1 py-2 px-3">
                                <div className="d-flex align-items-center gap-1">
                                    <input type="checkbox" className="icon_btn_sm mr-2 mail_inp"/>
                                    
                                    <p className="m-0 fw-bold fs_15">Netflix</p>
                                </div>
                                <p className="fw-bold m-0 fs_14 show_mob">3 Nov</p>
                            </div>
                            <div className="col-md-9 col-12 d-flex align-items-center justify-content-between px-3">
                                <p className="m-0 fs_14"><strong>Subscription renewal</strong> - Your subscription has been successfully renewed. Enjoy uninterrupted access to your fav...</p>
                                <p className="fw-bold m-0 fs_14 hide_mob">3 Nov</p>
                            </div>
                        </Link>
                        
                        
                        <Link className="border-bottom mail_item unread" to="/mail">
                            <div className="col-md-3 col-12 d-flex align-items-center justify-content-between gap-1 py-2 px-3">
                                <div className="d-flex align-items-center gap-1">
                                    <input type="checkbox" className="icon_btn_sm mr-2 mail_inp"/>
                                    
                                    <p className="m-0 fw-bold fs_15">Slack</p>
                                </div>
                                <p className="fw-bold m-0 fs_14 show_mob">2 Nov</p>
                            </div>
                            <div className="col-md-9 col-12 d-flex align-items-center justify-content-between px-3">
                                <p className="m-0 fs_14"><strong>Workspace Invitation</strong> - Youve been invited to join a new workspace for team collaboration. Click here to accept...</p>
                                <p className="fw-bold m-0 fs_14 hide_mob">2 Nov</p>
                            </div>
                        </Link>
                        
                        <Link className="border-bottom mail_item unread" to="/mail">
                            <div className="col-md-3 col-12 d-flex align-items-center justify-content-between gap-1 py-2 px-3">
                                <div className="d-flex align-items-center gap-1">
                                    <input type="checkbox" className="icon_btn_sm mr-2 mail_inp"/>
                                    
                                    <p className="m-0 fw-bold fs_15">LinkedIn</p>
                                </div>
                                <p className="fw-bold m-0 fs_14 show_mob">1 Nov</p>
                            </div>
                            <div className="col-md-9 col-12 d-flex align-items-center justify-content-between px-3">
                                <p className="m-0 fs_14"><strong>New Job Alert</strong> - A new job opportunity that matches your skills and experience has been posted. Review the details...</p>
                                <p className="fw-bold m-0 fs_14 hide_mob">1 Nov</p>
                            </div>
                        </Link>
                        
                        <Link className="border-bottom mail_item unread" to="/mail">
                            <div className="col-md-3 col-12 d-flex align-items-center justify-content-between gap-1 py-2 px-3">
                                <div className="d-flex align-items-center gap-1">
                                    <input type="checkbox" className="icon_btn_sm mr-2 mail_inp"/>
                                    
                                    <p className="m-0 fw-bold fs_15">Microsoft</p>
                                </div>
                                <p className="fw-bold m-0 fs_14 show_mob">31 Oct</p>
                            </div>
                            <div className="col-md-9 col-12 d-flex align-items-center justify-content-between px-3">
                                <p className="m-0 fs_14"><strong>Account Security Update</strong> - We’ve recently enhanced our security options for your account. Please log in to review...</p>
                                <p className="fw-bold m-0 fs_14 hide_mob">31 Oct</p>
                            </div>
                        </Link>
                        <Link className="border-bottom mail_item unread" to="/mail">
                            <div className="col-md-3 col-12 d-flex align-items-center justify-content-between gap-1 py-2 px-3">
                                <div className="d-flex align-items-center gap-1">
                                    <input type="checkbox" className="icon_btn_sm mr-2 mail_inp"/>
                                    <p className="m-0 fw-bold fs_15">Amazon Support</p>
                                </div>
                                <p className="fw-bold m-0 fs_14 show_mob">6 Nov</p>
                            </div>
                            <div className="col-md-9 col-12 d-flex align-items-center justify-content-between px-3">
                                <p className="m-0 fs_14"><strong>Your recent Amazon order</strong> - Thank you for your purchase! Your order is currently being processed and will be...</p>
                                <p className="fw-bold m-0 fs_14 hide_mob">6 Nov</p>
                            </div>
                        </Link>
                        
                        <Link className="border-bottom mail_item unread" to="/mail">
                            <div className="col-md-3 col-12 d-flex align-items-center justify-content-between gap-1 py-2 px-3">
                                <div className="d-flex align-items-center gap-1">
                                    <input type="checkbox" className="icon_btn_sm mr-2 mail_inp"/>
                                    
                                    <p className="m-0 fw-bold fs_15">Google Security</p>
                                </div>
                                <p className="fw-bold m-0 fs_14 show_mob">5 Nov</p>
                            </div>
                            <div className="col-md-9 col-12 d-flex align-items-center justify-content-between px-3">
                                <p className="m-0 fs_14"><strong>Unusual sign-in detected</strong> - We noticed a sign-in attempt from a new device or location. If this wasn’t you...</p>
                                <p className="fw-bold m-0 fs_14 hide_mob">5 Nov</p>
                            </div>
                        </Link>
                        
                        <Link className="border-bottom mail_item unread" to="/mail">
                            <div className="col-md-3 col-12 d-flex align-items-center justify-content-between gap-1 py-2 px-3">
                                <div className="d-flex align-items-center gap-1">
                                    <input type="checkbox" className="icon_btn_sm mr-2 mail_inp"/>
                                    
                                    <p className="m-0 fw-bold fs_15">PayPal</p>
                                </div>
                                <p className="fw-bold m-0 fs_14 show_mob">5 Nov</p>
                            </div>
                            <div className="col-md-9 col-12 d-flex align-items-center justify-content-between px-3">
                                <p className="m-0 fs_14"><strong>Payment Received</strong> - Congratulations! Youve received a payment in your PayPal account. Please review the tran...</p>
                                <p className="fw-bold m-0 fs_14 hide_mob">5 Nov</p>
                            </div>
                        </Link>
                        
                        <Link className="border-bottom mail_item unread" to="/mail">
                            <div className="col-md-3 col-12 d-flex align-items-center justify-content-between gap-1 py-2 px-3">
                                <div className="d-flex align-items-center gap-1">
                                    <input type="checkbox" className="icon_btn_sm mr-2 mail_inp"/>
                                    
                                    <p className="m-0 fw-bold fs_15">Facebook</p>
                                </div>
                                <p className="fw-bold m-0 fs_14 show_mob">4 Nov</p>
                            </div>
                            <div className="col-md-9 col-12 d-flex align-items-center justify-content-between px-3">
                                <p className="m-0 fs_14"><strong>Account Security Update</strong> - We’ve recently updated our security measures to keep your account protected. Please...</p>
                                <p className="fw-bold m-0 fs_14 hide_mob">4 Nov</p>
                            </div>
                        </Link>
                        
                        <Link className="border-bottom mail_item unread" to="/mail">
                            <div className="col-md-3 col-12 d-flex align-items-center justify-content-between gap-1 py-2 px-3">
                                <div className="d-flex align-items-center gap-1">
                                    <input type="checkbox" className="icon_btn_sm mr-2 mail_inp"/>
                                    
                                    <p className="m-0 fw-bold fs_15">Netflix</p>
                                </div>
                                <p className="fw-bold m-0 fs_14 show_mob">3 Nov</p>
                            </div>
                            <div className="col-md-9 col-12 d-flex align-items-center justify-content-between px-3">
                                <p className="m-0 fs_14"><strong>Subscription renewal</strong> - Your subscription has been successfully renewed. Enjoy uninterrupted access to your fav...</p>
                                <p className="fw-bold m-0 fs_14 hide_mob">3 Nov</p>
                            </div>
                        </Link>
                        
                        
                        <Link className="border-bottom mail_item unread" to="/mail">
                            <div className="col-md-3 col-12 d-flex align-items-center justify-content-between gap-1 py-2 px-3">
                                <div className="d-flex align-items-center gap-1">
                                    <input type="checkbox" className="icon_btn_sm mr-2 mail_inp"/>
                                    
                                    <p className="m-0 fw-bold fs_15">Slack</p>
                                </div>
                                <p className="fw-bold m-0 fs_14 show_mob">2 Nov</p>
                            </div>
                            <div className="col-md-9 col-12 d-flex align-items-center justify-content-between px-3">
                                <p className="m-0 fs_14"><strong>Workspace Invitation</strong> - Youve been invited to join a new workspace for team collaboration. Click here to accept...</p>
                                <p className="fw-bold m-0 fs_14 hide_mob">2 Nov</p>
                            </div>
                        </Link>
                        
                        <Link className="border-bottom mail_item unread" to="/mail">
                            <div className="col-md-3 col-12 d-flex align-items-center justify-content-between gap-1 py-2 px-3">
                                <div className="d-flex align-items-center gap-1">
                                    <input type="checkbox" className="icon_btn_sm mr-2 mail_inp"/>
                                    
                                    <p className="m-0 fw-bold fs_15">LinkedIn</p>
                                </div>
                                <p className="fw-bold m-0 fs_14 show_mob">1 Nov</p>
                            </div>
                            <div className="col-md-9 col-12 d-flex align-items-center justify-content-between px-3">
                                <p className="m-0 fs_14"><strong>New Job Alert</strong> - A new job opportunity that matches your skills and experience has been posted. Review the details...</p>
                                <p className="fw-bold m-0 fs_14 hide_mob">1 Nov</p>
                            </div>
                        </Link>
                        
                        <Link className="border-bottom mail_item unread" to="/mail">
                            <div className="col-md-3 col-12 d-flex align-items-center justify-content-between gap-1 py-2 px-3">
                                <div className="d-flex align-items-center gap-1">
                                    <input type="checkbox" className="icon_btn_sm mr-2 mail_inp"/>
                                    
                                    <p className="m-0 fw-bold fs_15">Microsoft</p>
                                </div>
                                <p className="fw-bold m-0 fs_14 show_mob">31 Oct</p>
                            </div>
                            <div className="col-md-9 col-12 d-flex align-items-center justify-content-between px-3">
                                <p className="m-0 fs_14"><strong>Account Security Update</strong> - We’ve recently enhanced our security options for your account. Please log in to review...</p>
                                <p className="fw-bold m-0 fs_14 hide_mob">31 Oct</p>
                            </div>
                        </Link>
                    </div>
                                                
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard