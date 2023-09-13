export const ORDER_BY_NUMBER = "ORDER_BY_NUMBER";
export const ALPHABETIC_ORDER = "ALPHABETIC_ORDER";
export const ORDER_BY_GENRE = "ORDER_BY_GENRE";
export const ORDER_FROM = "ORDER_FROM";
export const FILTER_CLEANER = "FILTER_CLEANER";


//Siempre el actions. 
export const SET_PAGE = "SET_PAGE";

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

export const setPage = (pageNumber) => ({
    type: SET_PAGE,
    payload: pageNumber,
  });

  export const orderByNumber = (value) => ({
    type: ORDER_BY_NUMBER,
    payload: value,
  });
  
  export const alphabeticOrder = (value) => ({
    type: ALPHABETIC_ORDER,
    payload: value,
  });
  
  export const orderByGenre = (value) => ({
    type: ORDER_BY_GENRE,
    payload: value,
  });
  
  export const orderFrom = (value) => ({
    type: ORDER_FROM,
    payload: value,
  });
  
  export const filterCleaner = () => ({
    type: FILTER_CLEANER,
    payload: null,
  });