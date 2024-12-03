import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';

const SignupPopUp = ({ isOpen, setIsOpen }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [showMailboxPassword, setShowMailboxPassword] = useState(false);
  const [showRepeatMailboxPassword, setShowRepeatMailboxPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    password: '',
    repeat_password: '',
    mailbox_password: '',
    repeat_mailbox_password: '',
  });

  // Step 1 Validation Schema
  let step1Schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    first_name: yup.string().required('First Name is required'),
    last_name: yup.string().required('Last Name is required'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    repeat_password: yup.string()
      .required('Repeat Password is required')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  // Step 2 Validation Schema
  let step2Schema = yup.object().shape({
    mailbox_password: yup.string().required('Mailbox Password is required').min(6, 'Mailbox password must be at least 6 characters'),
    repeat_mailbox_password: yup.string()
      .required('Repeat Mailbox Password is required')
      .oneOf([yup.ref('mailbox_password'), null], 'Mailbox passwords must match'),
  });

  // Step 3 Validation Schema (Add more validations here as required)
  let step3Schema = yup.object().shape({
    // Add validation for step 3 if needed
  });

  // Determine the schema for the current step
  let currentStepSchema;
  switch (currentStep) {
    case 1:
      currentStepSchema = step1Schema;
      break;
    case 2:
      currentStepSchema = step2Schema;
      break;
    case 3:
      currentStepSchema = step3Schema;
      break;
    default:
      currentStepSchema = step1Schema;
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(currentStepSchema),
    mode: "all", // Validate all fields as the user types
  });

  // Handle next step
  const handleNext = () => {
    // Perform step 1 validation before moving to step 2
    handleSubmit((data) => {
      setCurrentStep(currentStep + 1);
    })();
  };

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission (Step 3)
  const onSubmit = () => {
    setIsOpen(false);
    window.location.hash = '';
  };

  return (
    <>
      {isOpen && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(5px)' }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content p-4">
              <div className="modal-body">
                {/* Step 1 */}
                {currentStep === 1 && (
                  <div className='mb-5'>
                    <h4 className='fw-bold mb-1'>Create your Account</h4>
                    <p>to continue to the next step</p>
                    <div className='position-relative'>
                      <label className='bold_label'>Username</label>
                      <input {...register('username')} placeholder="Username" className="form-control" />
                      {errors.username && <span className="text-danger">{errors.username.message}</span>}
                      <select name="domain" id="domain_select">
                            <option value="@example.com">@example.com</option>
                            <option value="@example2.com">@example2.com</option>
                        </select>
                    </div>
                    <div className='mt-3'>
                      <label className='bold_label'>First Name</label>
                      <input type="text" {...register('first_name')} className="form-control" />
                      {errors.first_name && <span className="text-danger">{errors.first_name.message}</span>}
                    </div>
                    <div className='mt-3'>
                      <label className='bold_label'>Last Name</label>
                      <input type="text" {...register('last_name')} className="form-control" />
                      {errors.last_name && <span className="text-danger">{errors.last_name.message}</span>}
                    </div>
                    <div className='mt-3 position-relative'>
                      <label className='bold_label'>Password</label>
                      <input type={showPassword ? 'text' : 'password'} {...register('password')} className="form-control" />
                      {errors.password && <span className="text-danger">{errors.password.message}</span>}
                      <i className={showPassword ? 'bx bx-show toggle_eye' : 'bx bx-hide toggle_eye'} onClick={() => setShowPassword(!showPassword)}></i>
                    </div>
                    <div className='mt-3 position-relative'>
                      <label className='bold_label'>Repeat Password</label>
                      <input type={showRepeatPassword ? 'text' : 'password'} {...register('repeat_password')} className="form-control" />
                      {errors.repeat_password && <span className="text-danger">{errors.repeat_password.message}</span>}
                      <i className={showRepeatPassword ? 'bx bx-show toggle_eye' : 'bx bx-hide toggle_eye'} onClick={() => setShowRepeatPassword(!showRepeatPassword)}></i>
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {currentStep === 2 && (
                  <div className='mb-5'>
                    <h4 className='fw-bold mb-1'>Choose a mailbox password</h4>
                    <div className='mt-3 position-relative'>
                      <label className='bold_label'>Mailbox Password</label>
                      <input type={showMailboxPassword ? 'text' : 'password'} {...register('mailbox_password')} className="form-control" />
                      {errors.mailbox_password && <span className="text-danger">{errors.mailbox_password.message}</span>}
                      <i className={showMailboxPassword ? 'bx bx-show toggle_eye' : 'bx bx-hide toggle_eye'} onClick={() => setShowMailboxPassword(!showMailboxPassword)}></i>
                    </div>
                    <div className='mt-3 position-relative'>
                      <label className='bold_label'>Repeat Mailbox Password</label>
                      <input type={showRepeatMailboxPassword ? 'text' : 'password'} {...register('repeat_mailbox_password')} className="form-control" />
                      {errors.repeat_mailbox_password && <span className="text-danger">{errors.repeat_mailbox_password.message}</span>}
                      <i className={showRepeatMailboxPassword ? 'bx bx-show toggle_eye' : 'bx bx-hide toggle_eye'} onClick={() => setShowRepeatMailboxPassword(!showRepeatMailboxPassword)}></i>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {currentStep === 3 && (
                  <div className='mb-3'>
                    <div className="d-flex justify-content-center mb-2 flex-column align-items-center">
                      <i className='bx bx-check-circle success_icon'></i>
                      <h5 className='my-2'>Congratulations !</h5>
                    </div>
                    <p>Creating account…</p>
                    <p>Securing account…</p>
                    <p>Hold tight, we’re finished soon.</p>
                  </div>
                )}

                {/* Step Navigation */}
                {currentStep < 3 ? (
                  <button
                    type="button"
                    className="primary_btn_sm w-100"
                    onClick={handleNext}
                  >
                    {currentStep === 1 ? 'Create Account' : 'Secure Account'}
                  </button>
                ) : (
                  <button
                    type="button"
                    className="primary_btn_sm w-100"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Take me to my new account
                  </button>
                )}

                {currentStep === 1 && (
                  <p className='text-center my-3'>
                    Already have an account?<Link to={'#signin'}> Sign In</Link>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupPopUp;
