import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="jumbotron mt-5">
            <h1>Welcome to Todo Paradise</h1>
            <p className="lead">Sign in and start building your Todo List</p>
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/register" className="btn btn-primary ml-3">Register</Link>            
        </div>
)};

export default Landing;