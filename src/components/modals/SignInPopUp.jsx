import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function SignInPopUp({ isOpen, onClose }) {
  // Validation schema for the form
  const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onTouched', 
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log('Form Data:', data);
    onClose();
  };

  return (
    <div
      className={`modal fade ${isOpen ? 'show d-block' : ''}`}
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(5px)' }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content p-4">
          <div className="modal-body">
            <h4 className="fw-bold mb-1">SIGN IN</h4>
            <p className="mb-4">Enter your credentials to access your account.</p>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="bold_label">Username</label>
                <input
                  type="text"
                  className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                  {...register('username')}
                  placeholder="Enter your username"
                />
                {errors.username && <div className="invalid-feedback">{errors.username.message}</div>}
              </div>

              <div className="mb-3">
                <label className="bold_label">Password</label>
                <input
                  type="password"
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  {...register('password')}
                  placeholder="Enter your password"
                />
                {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
              </div>

              <button type="submit" className="primary_btn_sm w-100">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPopUp;
