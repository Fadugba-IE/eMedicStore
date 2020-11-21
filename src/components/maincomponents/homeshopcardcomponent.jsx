import React from 'react';

import {itemData} from '../../data/data.js';



function Homeshopcardcomponent() {

    return (
        <div>
        
              {itemData.map(data => {

return(
        <Card data = {data} key = {data.id=1} />

              );
            
            }
              


              )
} </div> 

);

           
           };
           
           export default Homeshopcardcomponent;




            const Card = props => {
              
                          return (  
                              
                            <div className="card">
                        <div className = "card-button" >
                        <img src={props.data.picture} className="card-img-top" alt="..." />
                        <button type="button" className="btn-card">Add to cart</button>
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                            <h4>{props.data.product}</h4>
                                <p>{props.data.price}</p>
                    <p id = 'note'>{props.data.note}</p>
                
                            </div>
                        </div>
                        </div>
                
                          )    

            }







