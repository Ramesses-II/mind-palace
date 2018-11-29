// Synchronous Action Creators
// An action informing the reducers that the request began.
export const requestData = source => ({
  type: 'REQUEST_DATA',
  source
})

// An action informing the reducers that the request finished successfully.
export const receiveData = (source, json) => ({
  type: 'RECEIVE_DATA',
  source,
  data: json,
})

// thunk action - Async Action Creators
export function fetchData(source) {
  return function (dispatch) {
    dispatch(requestData(source))
    return fetch(source)
      .then(response => response.json())
      .then(json => dispatch(receiveData(source, json)))
  }
}