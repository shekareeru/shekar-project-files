import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRestaurants } from '../redux/actions/restaurantActions';
import RestaurantCard from './RestaurantCard';

function Home() {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurants);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  return (
    <div>
      <h1>Food Delivery App</h1>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default Home;
