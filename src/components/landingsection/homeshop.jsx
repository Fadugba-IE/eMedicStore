import React from 'react';
import {itemData} from '../../data/data.js';
import '../../styles/homeshop.scss';

import Image from "../../images/cardimage1.png";




 function Homeshop() {
    

    return (
      
      <div className = "Home-shop">


        
        {itemData.map((data,index) => {
          
         


 

return(
 

<div>
         
        <div class="container" key= {index}>
        <div class="row">
          <div class="col">
        <Cards data = {data} />
          </div>
          <div class="col" >
        <Cards  data={data} />
          </div>
          <div class="col" >
        <Cards data={data}  />
          </div>
        
          </div>
          </div>
          
          <div class="container">
          <div class = "row">
          <div class="col">
          <Cards data={data} />
          </div>
          <div class="col">
          <Cards data={data} />
          </div>
          <div class="col">
          <Cards  data={data} />
          </div>
          
        
        </div>
        
      </div>
     
      
      <button type="button" className="view-all" >View all</button>

</div>

      );
}
    
      


      )
} 

  
</div>  
    )
}
export default Homeshop;


  const Cards = (props) => {
              
  return (  
      <div>
    <div className="card-homeshop">
<div className = "card-button" >
<img src={Image} className="card-img-top" alt="..." />
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
</div>

  )    

}
