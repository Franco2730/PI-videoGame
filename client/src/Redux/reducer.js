const initialState = { 
    allVideoGames: [],
}
console.log(initialState.allVideoGames)

 const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_ALL':{
            return {
                ...state,
                allVideoGames: action.payload,
            }
        }
        case 'GET_NAME':{
            // const videoGames = [...state.allVideoGames]
            // videoGames.unshift(action.payload)
            return {
                ...state,
                allVideoGames: action.payload
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