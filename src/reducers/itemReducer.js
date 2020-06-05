import {
    ADD_TO_INVENTORY,
    REMOVE_FROM_INVENTORY,
    FETCH_INVENTORY
} from '../actions/types'

const initialState = {
    items: []
}

export default function(state = initialState, action){
  switch(action.type){
      case FETCH_INVENTORY:
          return {
              ...state,
              items: action.payload
          }
      case ADD_TO_INVENTORY:
      case REMOVE_FROM_INVENTORY:
          return {
            ...state,
            items: action.payload
          };
    default:
        return state;
  }
}