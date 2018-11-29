import { combineReducers } from 'redux';

function datagram(state = { isFetching: false, data: [] }, action) {
  switch (action.type) {
    case 'REQUEST_DATA':
      return {
        ...state,
        isFetching: true
      }
    case 'RECEIVE_DATA':
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({ datagram });

export default rootReducer;