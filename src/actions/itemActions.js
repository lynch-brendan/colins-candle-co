import axios from 'axios';
import {
    REMOVE_FROM_INVENTORY,
    ADD_TO_INVENTORY,
    FETCH_INVENTORY
} from './types'; 

export const fetchItems = () => (dispatch) => {
    //Fetch order
    axios.get('/api/items')
      .then(items => 
        dispatch({
          type: FETCH_INVENTORY,
          payload: items.data
      }))
      .catch(err => {
          console.log(err);
  });
  }; 

export const deleteItem = (item_id) => (dispatch) => {
  //Delete the item with that id
  axios.delete(`/api/items/${item_id}`)
    .then(item =>        

       //Get the remaining items and set them in the payload.
       axios.get('/api/items')
         .then(items => dispatch({
             type: REMOVE_FROM_INVENTORY,
             payload: items.data
         }))
         .catch(error => {
            console.log(error);
        })
    )
    .catch(err => {
        console.log(err);
});

}

export const addItem = (item) => (dispatch) => {
    //Add item to database
    axios.post('/api/items', item)
      .then(item => 

        //Get new items in database
       axios.get('/api/items')
       .then(items => dispatch({
           type: ADD_TO_INVENTORY,
           payload: items.data
       }))
       .catch(error => {
          console.log(error);
      }))
     .catch(error =>
        console.log(error))
}