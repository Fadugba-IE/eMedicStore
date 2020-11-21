import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/Login.scss';


class Login extends Component {


    render() {
        return (
     
            <div class="container login-section">
                <div class="row">
                    <div class="col-sm">
                        <h2>Login</h2>
                        <p>Let’s bring the pharmacy to you</p>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Remember me</label> <a href="" id="forgot-password">Forgot password?</a>
                            </div>
                            <button type="submit" className="btn" id="Login-button">Submit</button>
                            <label class="form-check-label" id="form-check-register" for="exampleCheck1">New on emedicstore?</label> <a href="" id="forgot-password">Create Account</a>
                            <button type="submit" className="btn" id="Login-with-google"><FontAwesomeIcon  icon={['fab', 'google-plus-g']} />Login with Google</button>
                            <button type="submit" className="btn" id="Login-with-facebook"><FontAwesomeIcon  icon={['fab', 'facebook']} />Login with Facebook</button>
                        </form>

                    </div>


                    <div class="col-sm">
                        <div className="vertical-line"></div>

                    </div>

                    <div class="col-sm">
                        <div className = "right-pane">
                        <h2>Create Account</h2>
                        <p>Create your emedicstore customer account in just a few clicks!
                             You can register either using your e-mail address or through your Facebook & Gmail account.</p>

                        <button type="submit" className="btn" id="create-account">Create Account</button>
                        <button type="submit" className="btn" id="Login-with-google"><FontAwesomeIcon  icon={['fab', 'google-plus-g']} />Continue with Google</button>
                        <button type="submit" className="btn" id="Login-with-facebook"><FontAwesomeIcon  icon={['fab', 'facebook']} />Continue with Facebook</button>

                        </div>
                    </div>

                </div>

            </div>



        )
    }
}

export default Login;