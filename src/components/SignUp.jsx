import React, { useState } from 'react';
import Greetings from './Greetings';

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    nationality: '',
  });

  const [formError, setFormError] = useState({
    emailError: '',
    passwordError: '',
  });

  const handleFormInputs = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setNewUser((previousValue) => ({ ...previousValue, [name]: value }));

    if (name === 'password' && value.length < 6) {
      setFormError((previousValue) => ({
        ...previousValue,
        passwordError: 'Password needs to have at least 8 characters',
      }));
    } else {
      setFormError((previousValue) => ({
        ...previousValue,
        passwordError: '',
      }));
    }

    if (name === 'email' && !value.includes('@') && !value.includes('.com')) {
      setFormError((previousValue) => ({
        ...previousValue,
        emailError: 'Email is invalid. Please insert a valid email',
      }));
    } else {
      setFormError((previousValue) => ({ ...previousValue, emailError: '' }));
    }
  };

  const { email, password, nationality } = newUser;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-50 border p-2 mb-2">
      <form
        className="d-flex flex-column justify-content-center w-75 text-start p-2 mb-2"
        onSubmit={submitForm}
      >
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            onChange={handleFormInputs}
            name="email"
            value={email}
            type="email"
            className={
              formError.emailError
                ? 'bg-danger text-light form-control'
                : 'form-control'
            }
          />
          <div className="form-text">{formError.emailError}</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={handleFormInputs}
            name="password"
            value={password}
            type="password"
            className={
              formError.passwordError
                ? 'bg-danger text-light form-control'
                : 'form-control'
            }
          />
          <div className="form-text">{formError.passwordError}</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Nationality</label>
          <select
            name="nationality"
            onChange={handleFormInputs}
            className="form-select"
          >
            <option selected>Choose your Nationality</option>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>
        </div>
        <button className="btn btn-primary w-25">Sign Up</button>
      </form>
      {formSubmitted && (
        <div className="d-flex flex-column text-start w-75 p-2 fs-3">
          <div>
            
            {nationality === 'de' && <> Hallo </>}
            {nationality === 'en' && <> Hello </>}
            {nationality === 'fr' && <> Bonjour </>}
          </div>
          <div>Your Email Address is {email}</div>
          <div>
            Your Email Address is
            {formError.emailError ? 'incorrect' : 'correct'}
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
