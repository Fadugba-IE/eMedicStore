import React from 'react';
import Cards from '../maincomponents/Cardcomponent.jsx';
import '../../styles/cardcomponent.scss';


 function Recentlyviewed() {
    

    return (
        <div className = "Recently-viewed">
                  <button type="button" className="btn-top-recent">Recently Viewed</button>
       
        <div class="container">
        <div class="row">
          <div class="col">
        <Cards />
          </div>
          <div class="col">
          <Cards />
          </div>
          <div class="col">
          <Cards />
          </div>
          <div class="col">
          <Cards />
          </div>
          <div class="col">
          <Cards />
          </div>
          
        
        </div>
      </div>
      </div>
    )
}
export default Recentlyviewed;