
const INITIAL_STATE = {
   shopData : [],
   isFetching : false,
   errorMessage : undefined
}

 const shopReducer = (state = INITIAL_STATE, action) => {
       switch (action.type) {
        case 'FETCH_START':
            return{
                ...state,
                isFetching : true
            }
          
           case 'FETCH_SUCCESS':
               return {
                   ...state,
                   shopData : action.payload,
                   isFetching : false
               }

               case 'FETCH_FAILURE':
                return {
                    ...state,
                    isFetching : false,
                    errorMessage : action.payload
                }

           default:
           return state
       }
   }

   export default shopReducer