import fetch from 'cross-fetch'

// Synchronous Action Creators
// An action informing the reducers that the request began.
export const requestData = source => ({
  type: REQUEST_DATA,
  source
})

// An action informing the reducers that the request finished successfully.
export const receiveData = (source, json) => ({
  type: RECEIVE_DATA,
  source,
  data: json.data.children.map(child => child.data),
  receiveAt: Date.now()
})

// thunk action - Async Action Creators
export function fetchData(source) {
  return function (dispatch) {
    dispatch(requestData(source))
    return fetch()
      .then()
      .then(json => receiveData(source, json))
  }
}