import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
    return (
        <div className="signup">
            <h2>Sign Up</h2>
            <form>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" placeholder="Enter your username" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />
                    
                <div className="form-group">
                    <label>PhoneNumber</label>
                    <input type="text" placeholder="Enter your PhoneNumber" />
                </div>  
                
                </div>
                <button className="submit-button" type="submit">Sign Up</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
            <p>
                Go back to <Link to="/">Home</Link>
            </p>
        </div>
    );
}

export default SignUp;
