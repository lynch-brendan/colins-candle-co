import axios from 'axios';
import { FETCH_ORDERS, REMOVE_ACTIVE_ORDER, FETCH_COMPLETED_ORDERS } from './types'; 

export const fetchOrders = () => (dispatch) => {
    //Fetch order
    axios.get('/api/orders')
      .then(orders => 
        dispatch({
          type: FETCH_ORDERS,
          payload: orders.data
      }))
      .catch(err => {
          console.log(err);
  });
  }; 

export const fetchCompletedOrders = () => (dispatch) => {
  //Fetch Completed Orders
  axios.get('/api/completed')
    .then(orders => 
      dispatch({
        type: FETCH_COMPLETED_ORDERS,
        payload: orders.data
      }))
      .catch(err => {
        console.log(err);
      });
};

  export const transferOrder = (order) => (dispatch) => {

    //Add order to completed orders route
    var err = null;
    try{
      axios
      .post('api/completed', order)
      .then(function (response) { 
          console.log(response);
      })
      .catch(function (error) {
        err = error;
        console.log(error);
     });
    } 
    catch (e) {
      throw e;
    } 
    //Delete order from activeOrders if nothing went wrong.
    if(err === null){
      axios
        .delete(`/api/orders/${order._id}`)
           .then(order => 

            //Get all the rest of the active orders
            axios.get('api/orders')
              .then(items => dispatch({
                type: REMOVE_ACTIVE_ORDER,
                payload: items.data
              }))
              .catch(error => {
                console.log(error)
              })
            )
           .catch(function (error) {
             console.log(error);
           });
    }
  }