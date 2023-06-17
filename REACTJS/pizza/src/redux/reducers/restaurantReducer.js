// restaurantActions.js
import { myReducer } from './reducers';

export const FETCH_RESTAURANTS_SUCCESS = 'FETCH_RESTAURANTS_SUCCESS';
export const FETCH_RESTAURANTS_ERROR = 'FETCH_RESTAURANTS_ERROR';

const initialState = {
  restaurants: [],
  error: null,
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESTAURANTS_SUCCESS:
      return {
        ...state,
        restaurants: action.payload,
        error: null,
      };
    case FETCH_RESTAURANTS_ERROR:
      return {
        ...state,
        restaurants: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default restaurantReducer;