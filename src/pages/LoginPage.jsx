import React, { Component } from 'react';
import '../styles/App.scss';
import LoginNav from '../components/header/loginnavbar.jsx';
import Login from '../components/maincomponents/Login.jsx';
import Footer from '../components/footer/footer.jsx';

class Loginpage extends Component {
   

    render() {
        return (
            <div className = "Login-page">
               

               <LoginNav />
               <Login />
               <Footer />
             
               
                
               
            </div>
        )
    }
}

export default Loginpage;