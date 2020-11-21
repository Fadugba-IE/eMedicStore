import React from 'react';
import '../../styles/landingsection.scss';
import Cards from '../maincomponents/Cardcomponent.jsx';

function Categories() {


    return (
        <div className='categories-section'>
            <button type="button" className="btn-top">Categories</button>

            <div class="container">
                <div class="row">
                    <div class="col-sm">
                    <button type="button" className="btn-categories">Syrups</button>
                    <button type="button" className="btn-categories" >Dental Care</button>
                    
    </div>
                    <div class="col-sm">
                    <button type="button" className="btn-categories" id = "fitness" >Fitness & Supplements</button>
                    <button type="button" className="btn-categories" >Analgestics</button>
                   
                    
    </div>
                    <div class="col-sm">
                    <button type="button" className="btn-categories" >Dental care</button>
                    <button type="button" className="btn-categories" >Antibiotics</button>
                    
    </div>

                   
                </div>

                
            </div>
            <button type="button" className="view-all" >View all</button>

            


       

        </div>
     
    )
}

export default Categories;