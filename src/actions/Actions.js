export const FETCH_DATA_BEGIN   = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const ADD_REFINE_DATA = 'ADD_REFINE_DATA';

export const fetchData = (city, refine) => {
    const fetchUrl = `https://opentable.herokuapp.com/api/restaurants?city=${city}&&per_page=100`;

    return (dispatch, getState) => {
        const selectedCity = getState().restaurantReducer.city;

        dispatch({ type: ADD_REFINE_DATA, payload: refine });
        
        if (city !== selectedCity) {
            dispatch(fetchDataBegin());

            return fetch(fetchUrl)
              .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }

                return response.json();
              })
              .then(result => {
                dispatch({ type: FETCH_DATA_SUCCESS, payload: { result, city } });
              })
              .catch(err => {
                dispatch({ type: FETCH_DATA_FAILURE, error: err })
              })
        }
    }
}

export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN
});

export const fetchDataSuccess = DATA => ({
  type: FETCH_DATA_SUCCESS,
  payload: { DATA }
});

export const fetchDataFailure = error => ({
  type: FETCH_DATA_FAILURE,
  payload: { error }
});

export const addRefineData = refine => ({
  type: ADD_REFINE_DATA,
  payload: { refine }
});