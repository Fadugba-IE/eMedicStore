import React from 'react';
import Image from '../../images/homeimage.png';
import Image2 from '../../images/cardimage2.png';

 function CarouselHome(){
    

    return (
        <div className = "Home-carousel">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
   
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={Image} alt="First slide"/>
      <div class="carousel-caption d-none d-md-block">
    <p>Your search ends here</p>
    <h3>eMedicStore Brings the </h3>
    <h3>Pharmacy to you.</h3>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src= {Image2} alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block">
      <p>Your search ends here</p>
    <h3>eMedicStore Brings the </h3>
    <h3>Pharmacy to you.</h3>
  </div>
    </div>
   
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </div>
        
    )
}

export default CarouselHome;