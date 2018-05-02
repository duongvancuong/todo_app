import React, { Component } from 'react'
import { connect } from 'react-redux';
import { requestLoginAction } from '../actions/userActions';
import LoginForm from '../components/LoginForm';
import FormInput from '../components/FormInput';
import { Redirect } from 'react-router-dom';
import { pwdValidateInput, emailValidateInput } from '../utils/inputValidate';
import { isEmpty } from 'lodash';

class LoginContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      },
      errorsForm: [],
    };
    this.submitForm = this.submitForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleEmailValidation = this.handleEmailValidation.bind(this);
    this.handlePwdValidation = this.handlePwdValidation.bind(this);
  }

  submitForm(event) {
    event.preventDefault();
    if (isEmpty(this.state.errorsForm)) {
      this.props.dispatch(requestLoginAction(this.state.user));
    }
  }

  onChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({ user });
  }

  handlePwdValidation = (event) => {
    const { isInputValid } = pwdValidateInput(event.target.value);
    if (isInputValid) {
      this.setState({
        errorsForm: this._removeByItem(this.state.errorsForm, 'password')
      });
    } else {
      this.setState({
        errorsForm: this._addItem(this.state.errorsForm, {type:'password', message:'Password Invalid'})
      });
    }
  }

  handleEmailValidation = (event) => {
    const { isInputValid } = emailValidateInput(event.target.value);
    if (isInputValid) {
      this.setState({
        errorsForm: this._removeByItem(this.state.errorsForm, 'email')
      });
    } else {
      this.setState({
        errorsForm: [...new Set(this._addItem(this.state.errorsForm, {type:'email', message:'Email Invalid'}))]
      });
    }
  }

  _addItem = (arr, value) => {
    const arr_filterd = arr.filter((item) => item.type !== value.type);
    return arr_filterd.concat(value);
  }

  _removeByItem = (arr, type) => arr.filter((item) => item.type !== type);

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' }}
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      return (
        <Redirect to={from} />
      )
    }
    return (
      <div>
        <LoginForm submitForm={this.submitForm} errorsForm={this.state.errorsForm} errors={this.props.errors} user={this.state.user} >
          <FormInput
            errorsField={this.state.errorsForm}
            type="text"
            name="email"
            placeHolder="Email"
            onChange={this.onChange}
            value={this.state.user.email}
            onBlur={this.handleEmailValidation} />
          <FormInput
            errorsField={this.state.errorsForm}
            type="password"
            name="password"
            placeHolder="Password"
            onChange={this.onChange}
            value={this.state.user.password}
            onBlur={this.handlePwdValidation} />
        </LoginForm>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { isAuthenticated, errors } = state.auth;
  return {
    isAuthenticated,
    errors,
  }
}

export default connect(mapStateToProps)(LoginContainer);
