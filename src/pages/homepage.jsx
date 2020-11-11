import React, { Component } from 'react';
import "../styles/App.scss";

class Homepage extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }

        this.handleEvent = this.handleEvent.bind(this)
    }


    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}



    render() {
        return (
            <div className = "landing-page">
                <p>my name is Dangbana shoko</p>
                
            </div>
        )
    }
}
export default Homepage;
