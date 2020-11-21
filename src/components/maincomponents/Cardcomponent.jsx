import React from 'react';
import Image from '../../images/cardimage.png';



function Cardcomponent() {

    return (

        <div className="card">
            <img src={Image} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className="card-text">
                    <h4>Surgical rubber hand glove and facemask</h4>
                    <p> 	{'\u20A6'} 200.00</p>
                    <p id = 'note'>*prices may vary due to 
market flunctuations</p>

                </div>
            </div>
        </div>

    )
}

export default Cardcomponent;