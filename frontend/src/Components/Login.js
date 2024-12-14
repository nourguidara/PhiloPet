import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />
                </div>
                <button className="submit-button" type="submit">Login</button>
            </form>
            <p>
                Don’t have an account? <Link to="/signup">Sign Up</Link>
            </p>
            <p>
                Go back to <Link to="/">Home</Link>
            </p>
        </div>
    );
}

export default Login;
