import React from "react";
import './Login.css';
import {Link} from 'react-router-dom';

export default function Login() {
  return (
    <>
    <div className="login">
      <div className="login_container container mt-5 pt-5">
        <div className="login_cont_next row justify-content-center">
          <div className="login_card_prev col-md-5">
            <div className="login_card card">
              <div className="login_head">
              <div className="login_heading card-header"><section className="login_sec_head">Login</section></div>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label for="username">Username</label>
                    <input
                      type="text"
                      className="login_input form-control"
                      id="username"
                      placeholder="Enter your username"
                    />
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      className="login_input form-control"
                      id="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    {" "}
                    {/* Center the button */}
                    <button type="submit" className="login_submit btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                New user? <Link className="login_register_link" href="registration.html">Register here</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
