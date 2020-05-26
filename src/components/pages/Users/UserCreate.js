import React from 'react';
import { Header } from '../../general/Common.Comp';
import Input from '../../general/Input';

export default class UserCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      isAdmin: false,
      password: '',
      confirmPassword: '',
      isActive: '',
      token: '',
    };
    ['onChange'].forEach((fn) => {
      this[fn] = this[fn].bind(this);
    });
  }

  onChange(v, k) {
    this.setState({ [k]: v });
  }

  render() {
    const {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
      isAdmin,
    } = this.state;
    return (
      <div className="page">
        <Header title="Create User" />
        <div>
          <div className="row">
            <div className="col-md-6">
              <Input
                label="First Name"
                type="text"
                value={firstname}
                onChange={(v) => {
                  this.onChange(v, 'firstname');
                }}
              />
              <Input
                label="Last Name"
                type="text"
                value={lastname}
                onChange={(v) => {
                  this.onChange(v, 'lastname');
                }}
              />
              <Input
                label="Email"
                type="text"
                value={email}
                onChange={(v) => {
                  this.onChange(v, 'email');
                }}
              />

              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(v) => {
                  this.onChange(v, 'password');
                }}
              />

              <Input
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(v) => {
                  this.onChange(v, 'confirmPassword');
                }}
              />
            </div>
            <div className="col-md-6">
              <Input
                type="toggle"
                value={isAdmin}
                onChange={(v) => {
                  this.onChange(v, 'isAdmin');
                }}
              />
              <label>Is This User Is Active</label>
            </div>
          </div>

          <div>
            <button className="btn btn-project-default float-right btn-md">
              Submit
            </button>
            <p className="clearfix"></p>
          </div>
        </div>
      </div>
    );
  }
}
