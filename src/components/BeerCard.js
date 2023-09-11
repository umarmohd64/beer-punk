import React from "react";
import "./BeerCard.css"; // CSS

function BeerCard({ beer }) {
  return (
    <div className="card-wrapper">


      <div className="beer-card">
        <img src={beer.image_url} alt={beer.name} />
        <div className="name" > 
         <h3>{beer.name}</h3>
        </div>

        <div className="tagline">
          <p>"{beer.tagline}"</p>
        </div>
        
        <span className="date">{beer.first_brewed}</span>
      </div>


      <div className="beer-card hover-card">
      <div className="name-hover" > 
         <h3>{beer.name}</h3>
        </div>
       
        <p className="props">
          ABV: {beer.abv}% , IBU: {beer.ibu}
        </p>
        <div className="description" >
        <p>{beer.description}</p>
        </div>
       
      </div>


    </div>
  );
}

export default BeerCard;
