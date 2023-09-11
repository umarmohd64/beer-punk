
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeerCard from './BeerCard';
import './BeerList.css';

function BeerList() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('https://api.punkapi.com/v2/beers')
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().replace(/ /g,"").includes(searchTerm.toLowerCase().replace(/ /g,""))
  );

  return (
    <div>
        <div className="search__container">
          <input 
          className="search__input"
          type="text"
          placeholder="Search for a beer..."
          value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
          />
         </div>
      <div className="beer-list">
        {filteredBeers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
}

export default BeerList;
