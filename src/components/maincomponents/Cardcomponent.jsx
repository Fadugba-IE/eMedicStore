import React, { Component } from 'react';


export default class CardComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }
  render() {
    return (
      <div>
        <ul className="card-homeshop">
          {this.props.item.map(item => (
            <li key={item.id}>

              <div className="card-item">
                <div className="card-button" >
                  <img src={item.picture} className="card-img-top" alt="product" />
                  <button type="button" className="btn-card">Add to cart</button>
                </div>
                <div className="card-body">
                  <div className="card-text">
                    <h4>{item.product}</h4>
                    <p>{item.price}</p>
                    <p id='note'>{item.note}</p>

                  </div>

                </div>
                </div>

            </li>

          ))}

        </ul>
        
      </div>
    )
  }
}

