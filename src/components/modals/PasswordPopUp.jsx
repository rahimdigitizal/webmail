import React from 'react'

function PasswordPopUp({ isOpen, onClose }) {
  return (
    <div
    className={`modal fade ${isOpen ? 'show d-block' : ''}`}
    tabIndex="-1"
    role="dialog"
    style={{  backgroundColor: 'rgba(0, 0, 0, 0.5)',backdropFilter: 'blur(5px)' }}
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content pt-4 pb-2">
          <div className="modal-body">
                <div className="d-flex justify-content-center mb-2 flex-column align-items-center">
                    <i className='bx bx-error-circle error_icon'></i>
                    <h5 className='my-2'>Warning</h5>
                </div>
              <h6 className='text-center mb-2'>For security purposes, <br /> please re-enter your mailbox password:</h6>
              <input type="text" name="" id="" className='form-control mb-3 bg-transparent text-dark password_input' placeholder='Password'/>
              <div className='d-flex justify-content-center gap-3'>
                  <button type="button" className="secondary_btn_sm" onClick={onClose}>Log out</button>
                  <button type="button" className="primary_btn_sm" onClick={onClose}>Ok</button>
              </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default PasswordPopUp