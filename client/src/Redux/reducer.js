const initialState = { 
    allVideoGames: [],
 }

 const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_ALL':{
            return {
                ...state,
                allVideoGames: action.payload,
            }
        }
        default:{
            return{
                ...state
            }
        }
    }
 }

 export default rootReducer;