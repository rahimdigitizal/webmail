import React, { useEffect } from 'react'
// import '../assets/css/setting.css'

function Settings() {

    useEffect(() => {

        const urlParams = new URLSearchParams(window.location.search);
        const tabToActivate = urlParams.get('tab');
    
        if (tabToActivate) {
            document.querySelectorAll('.setting_tabs .nav-link').forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('show', 'active'));
            const targetTab = document.querySelector(`[data-bs-target="#nav-${tabToActivate}"]`);
            const targetPane = document.querySelector(`#nav-${tabToActivate}`);
            if (targetTab && targetPane) {
                targetTab.classList.add('active');
                targetPane.classList.add('show', 'active');
            }
        }

        
        const width = window.innerWidth;
        if(width < 769){
            document.querySelector('#sidebar').classList.add('close');
        }

        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet'; 
        linkElement.href = '/setting.css';
        document.head.appendChild(linkElement); 

    }, [])
    
  return (
    <>
        <div className="p-2 mb-3 border-bottom">
            <h4 className="mb-0">Settings</h4>
        </div>
        <nav className="">
            <div className="nav nav-tabs setting_tabs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-general" type="button" role="tab" aria-controls="nav-general" aria-selected="true">General</button>
                <button className="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-keys" type="button" role="tab" aria-controls="nav-keys" aria-selected="true">Encryption & Keys</button>
                <button className="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-security" type="button" role="tab" aria-controls="nav-security" aria-selected="true">Security</button>
                <button className="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-account" type="button" role="tab" aria-controls="nav-account" aria-selected="true">Account</button>
            </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-general" role="tabpanel" aria-labelledby="nav-home-tab">
                <div className="p-2">
                    <form action="#">
                        <div className="row mt-3">
                            <div className="col-md-2-5 col-12 d-flex align-items-center">
                                <p className="fw-bold m-0">Display Name :</p>
                            </div>
                            <div className="col-md-9-5 col-12">
                                <input type="text" name="" className="form-control" placeholder="Your Name"/>
                            </div>
                            <div className="col-12 d-flex justify-content-end mt-3">
                                <button className="primary_btn">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="tab-pane fade" id="nav-keys" role="tabpanel" aria-labelledby="nav-home-tab">
                <div className="p-2">
                    <form action="#">
                        <div className="row mt-3 border-bottom pb-3">
                            <div className="col-md-2-5 col-12 d-flex align-items-center">
                                <p className="fw-bold m-0">Your product :</p>
                            </div>
                            <div className="col-md-9-5 col-12">
                                <p className="m-0">Basic</p>
                            </div>
                        </div>
                        <div className="row mt-3 border-bottom pb-3">
                            <div className="col-md-2-5 col-12 d-flex align-items-center">
                                <p className="fw-bold m-0">Encryption :</p>
                            </div>
                            <div className="col-md-9-5 col-12">
                                <p className="mb-0"><input type="checkbox" name="always_encrypt" id="always_encrypt"/> <label htmlFor="always_encrypt">Always encrypt</label></p>
                                <p className="mb-0" ><input type="checkbox" name="always_signed" id="always_signed"/> <label htmlFor="always_signed">Always signed</label></p>
                            </div>
                        </div>
                        <div className="row mt-3 border-bottom pb-3">
                            <div className="col-md-2-5 col-12 d-flex align-items-center">
                                <p className="fw-bold m-0">Export Key :</p>
                            </div>
                            <div className="col-md-9-5 col-12">
                                <a href="#" className="primary_btn_sm mt-4 mt-md-0">Export My Public Key</a>
                            </div>
                        </div>
                        <div className="row mt-3    pb-3">
                            <div className="col-md-2-5 col-12 d-flex align-items-center">
                                <p className="fw-bold m-0">Import Key :</p>
                            </div>
                            <div className="col-md-9-5 col-12">
                                <input type="file" name="" id=""/>
                            </div>
                        </div>
                            <div className="col-12 d-flex justify-content-end mt-3">
                                <button className="primary_btn">Save</button>
                            </div>
                    </form>
                </div>
            </div>
            <div className="tab-pane fade" id="nav-security" role="tabpanel" aria-labelledby="nav-home-tab">
                <div className="p-2">
                    <form action="#">
                        <div className="row mt-3">
                            <div className="col-md-2-5 col-12 d-flex align-items-center">
                                <p className="fw-bold m-0">2 Factor Authorization :</p>
                            </div>
                            <div className="col-md-9-5 col-12">
                                <label className="switch">
                                    <input type="checkbox"/>
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-end mt-3">
                            <button className="primary_btn">Save</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="tab-pane fade" id="nav-account" role="tabpanel" aria-labelledby="nav-home-tab">
                <div className="p-2">
                    <form action="#">
                        <div className="row mt-3 border-bottom pb-3">
                            <div className="col-md-2-5 col-12 d-flex align-items-center">
                                <p className="fw-bold m-0">Your Account:</p>
                            </div>
                            <div className="col-md-9-5 col-12">
                                <p className="m-0">abc@pgpmail.online</p>
                            </div>
                        </div>
                        <div className="row mt-3 border-bottom pb-3">
                            <div className="col-md-2-5 col-12 d-flex align-items-center">
                                <p className="fw-bold m-0">2 Factor Authorization:</p>
                            </div>
                            <div className="col-md-9-5 col-12">
                                <p className="m-0">On</p>
                            </div>
                        </div>
                        <div className="row mt-3 border-bottom pb-3">
                            <div className="col-md-2-5 col-12 d-flex align-items-center">
                                <p className="fw-bold m-0">Language:</p>
                            </div>
                            <div className="col-md-9-5 col-12">
                                <select name="" className="form-select" id="">
                                    <option defaultValue="1">English</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mt-3 border-bottom pb-3">
                            <div className="col-md-2-5 col-12 d-flex align-items-center">
                                <p className="fw-bold m-0">Auto-Logout:</p>
                            </div>
                            <div className="col-md-9-5 col-12">
                                <input type="checkbox" name="" id="auto_logout"/>
                                <div className="mt-2 minute_inp d-none">
                                    <label htmlFor="" className="fw-bold m-0">Minutes :</label><br/>
                                    <input type="text" name="" placeholder="5" id=""/>
                                </div>
                            </div>
                        </div>  
                        <div className="row mt-3">
                            <div className="col-md-2-5 col-12  d-flex align-items-center">
                                <p className="fw-bold m-0">Logout:</p>
                            </div>
                            <div className="col-md-9-5 col-12">
                                <button className="primary_btn_sm">Logout</button>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-end mt-3">
                            <button className="primary_btn">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Settings