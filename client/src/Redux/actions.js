//Siempre el actions. 

export const getAllVideoGames = () => {
    return async (dispatch) => {
        const response = await fetch ('http://localhost:3001/videogames') //espera respuesta del fetch
        const results = await response.json()//Espera que de json se convierta a un objeto de JS
        return dispatch({ //retorna la accion a la cual le da un tipo y un valor.
            type: 'GET_ALL',
            payload: results
         })
    }
};

export const getNameVideoGame = (name) => {
    return async (dispatch) => {
        const response = await fetch (`http://localhost:3001/videogames/?name=${name}`)
        const results = await response.json()
        console.log("axion" + results);
        return dispatch({ 
            type: 'GET_NAME',
            payload: results
         })
    }
};