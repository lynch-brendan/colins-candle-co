import {
    FETCH_ORDERS,
    REMOVE_ACTIVE_ORDER,
    FETCH_COMPLETED_ORDERS
} from '../actions/types';


const initialState = { 
    orders: [],
    completed_orders: [],
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_ORDERS:
            return {
                ...state,
                orders: action.payload
            };
        case REMOVE_ACTIVE_ORDER:
            return {
                ...state,
                orders: action.payload
            };
        case FETCH_COMPLETED_ORDERS:
            return {
                ...state,
                completed_orders: action.payload
            };
        default: return state;
    }
} 
