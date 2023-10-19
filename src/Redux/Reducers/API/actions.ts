import {showSnackbar} from 'src/Components/Snackbar';
import {getRedux} from 'src/Redux/function';

export const SHOP_DATA = 'SHOP_DATA';
export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';

export const GETDETAILS = callback => {
  const {dispatch} = getRedux();
  fetch('https://my-json-server.typicode.com/benirvingplt/products/products')
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: SHOP_DATA,
        payload: data,
      });
      callback({success: true});
    })
    .catch(error => {
      console.error('There was an error fetching the data', error);
      showSnackbar({
        type: 'error',
        header: 'ERROR',
        body: 'There was an error fetching the data',
      });
    });
};

export const addToBasket = item => ({
  type: ADD_TO_BASKET,
  payload: item,
});

export const removeFromBasket = itemId => ({
  type: REMOVE_FROM_BASKET,
  payload: itemId,
});
