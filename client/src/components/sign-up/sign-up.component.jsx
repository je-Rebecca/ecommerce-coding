import React, { useState } from 'react';
import './sign-up.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';
const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('password do"n match');
      return;
    }
    signUpStart({ displayName, email, password });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email & password</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="confirm password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});
export default connect(null, mapDispatchToProps)(SignUp);
