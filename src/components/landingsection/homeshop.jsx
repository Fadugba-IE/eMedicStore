import React, { Component } from 'react'
import data from '../../data/data.json';
import CardComponent from '../maincomponents/Cardcomponent';






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

      <CardComponent item = {this.state.item} />

        </div>
     


     
      


    )
  }
}















































