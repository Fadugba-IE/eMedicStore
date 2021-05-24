

import React, { Component } from 'react'
import data from '../../data/data.json';
import '../../styles/cardcomponent.scss';
import CardComponent from '../maincomponents/Cardcomponent';






export default class Recentlyviewed extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item : data.item,
      picture : "",
      price : "",
      note  : ""
         
    };
  }

  render () {

    return (
        <div className = "Recently-viewed">
                  <button type="button" className="btn-top-recent">Recently Viewed</button>
       
        <div class="container">
        <div class="row">
          <div class="col">
        <CardComponent item = {this.state.item} />
          </div>
         
        
        </div>
      </div>
      </div>
    )
}
}