import {
    FETCH_DATA_BEGIN,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    ADD_REFINE_DATA
  } from '../actions/Actions';
  
  const initialState = {
    restaurants: [],
    refine: '',
    city: '',
    total_items: 0,
    loading: false,
    error: null
  };
  
  const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
       case FETCH_DATA_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          restaurants: action.payload.result.restaurants,
          total_items: action.payload.result.total_entries,
          city: action.payload.city
        };
  
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
          restaurants: []
        };
  
      case ADD_REFINE_DATA: 
        return {
          ...state,
          refine: action.payload
        }
  
      default:
        return state
    }
  }
  
  export default restaurantReducer;