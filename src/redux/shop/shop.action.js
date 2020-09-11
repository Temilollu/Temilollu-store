

export const fetchSuccess = shop => ({
    type : 'FETCH_SUCCESS',
    payload : shop
})

export const fetchStart = () => ({
    type : 'FETCH_START'
})

export const fetchFailure = errorMessage => ({
    type : 'FETCH_FAILURE',
    payload : errorMessage
})

export const isFetchingAsync = () => {
    return dispatch => {
      dispatch(fetchStart())

      async function fetchData (){
          try {
        const response =  await fetch('https://fakestoreapi.com/products/')
        const data =  await   response.json()
        dispatch(fetchSuccess(data))
          }
          catch(error){
           dispatch(fetchFailure(error))
          }
        }
       fetchData()
    }

}