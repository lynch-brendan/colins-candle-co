import {combineReducers} from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import orderReducer from './orderReducer';
import itemReducer from './itemReducer';

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    orders: orderReducer,
    items: itemReducer
});
