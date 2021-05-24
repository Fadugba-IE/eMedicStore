import React, { Component } from 'react'
import data from '../../data/data.json';
import Cardcomponent from '../maincomponents/Cardcomponent';






export default class Homeshop extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item : data.item,
      picture : "",
      price : "",
      note  : ""
         
    };
  }




  render() {
    return (
      
        
        <div className = "container">

      <Cardcomponent item = {this.state.item} />

        </div>
     


     
      


    )
  }
}













































