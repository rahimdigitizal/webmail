import React from 'react';

const LogoutPopup = ({ isOpen, onClose }) => {
  return (
    <div
      className={`modal fade ${isOpen ? 'show d-block' : ''}`}
      tabIndex="-1"
      role="dialog"
      style={{  backgroundColor: 'rgba(0, 0, 0, 0.5)',backdropFilter: 'blur(5px)' }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content pt-2 pb-2">
            <button type="button" className="btn-close" onClick={onClose} ></button>
            <div className="modal-body">
                <div className="d-flex justify-content-center mb-2 flex-column align-items-center">
                    <i className='bx bx-error warning_icon'></i>
                    <h5 className='my-2'>Warning</h5>
                </div>
                <h6 className='text-center mb-4'>You will be logged out in 2 minutes for security purposes.</h6>
                <div className='d-flex justify-content-center gap-3'>
                    <button type="button" className="secondary_btn_sm" onClick={onClose}>Log out now</button>
                    <button type="button" className="primary_btn_sm" onClick={onClose}>Continue session</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutPopup;
