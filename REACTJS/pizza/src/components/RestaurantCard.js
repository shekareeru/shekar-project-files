import React from 'react';
import { Link } from 'react-router-dom';

function RestaurantCard({ restaurant }) {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <p>{restaurant.cuisine}</p>
      <Link to={`/restaurants/${restaurant.id}`}>View Menu</Link>
    </div>
  );
}

export default RestaurantCard;
