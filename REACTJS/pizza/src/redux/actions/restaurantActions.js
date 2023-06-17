
import axios from 'axios';
import { FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_ERROR } from '../reducers/restaurantReducer';

export const fetchRestaurants = () => {
  return (dispatch) => {
    axios
      .get('https://swiggy-api-url/restaurants') 
      .then((response) => {
        dispatch({
          type: FETCH_RESTAURANTS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_RESTAURANTS_ERROR,
          payload: error.message,
        });
      });
  };
};
