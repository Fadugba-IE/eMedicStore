import React, { Component } from 'react';
import '../styles/App.scss';
import Header from '../components/header/loginnavbar.jsx';
import Register from '../components/maincomponents/Register.jsx';


 class RegisterPage extends Component {
    
    render() {
        return (
            <div className = "Register-page">
                <Header />
                <Register />
                
            </div>
        )
    }
}

export default RegisterPage;