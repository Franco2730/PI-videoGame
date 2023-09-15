const initialState = {
  allVideoGames: [],
  current: 1,
  backup: [],
  genres: []
};
console.log(initialState.allVideoGames);

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL": {
      return {
        ...state,
        allVideoGames: action.payload,
        backup: action.payload,
      };
    }
    case "GET_NAME": {
      // const videoGames = [...state.allVideoGames]
      // videoGames.unshift(action.payload)
      return {
        ...state,
        allVideoGames: action.payload,
      };
    }
    case "SET_PAGE":
      return { ...state, current: action.payload };

    case "ORDER_BY_NUMBER":
      const copyNumber = [...state.allVideoGames];
      const videogamesSortedByNumber = copyNumber.sort((a, b) => {
        const valueA = a.rating;
        const valueB = b.rating;
        if (action.payload === "<") {
          return valueB - valueA;
        } else {
          return valueA - valueB; // Cambiar a valueB - valueA para ordenación descendente
        }
      });

      return {
        ...state,
        allVideoGames: videogamesSortedByNumber,
      };

    case "ALPHABETIC_ORDER":
      const copy3 = [...state.allVideoGames];
      const sortedVideogames = copy3.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (action.payload === "A-Z") {
          return nameA.localeCompare(nameB);
        } else if (action.payload === "Z-A") {
          return nameB.localeCompare(nameA);
        } else {
          return 0;
        }
      });

      return {
        ...state,
        allVideoGames: sortedVideogames,
      };
    case "ORDER_BY_GENRE":
      const genreToFilter = action.payload;
      const copy4 = [...state.backup];
      const videogamesFilteredByGenre = copy4.filter((vg) => {
        const genres = vg.genre?.split(", ");
        return genres.includes(genreToFilter);
      });

      if (videogamesFilteredByGenre.length === 0) {
        alert("No se encontraron coincidencias para el género seleccionado.");
        return state;
      }

      return {
        ...state,
        allVideoGames: videogamesFilteredByGenre,
      };

      
      //1...Si el value es rest el mismo es reseteado. <--
    case "ORDER_FROM":
      const copy5 = [...state.backup];
      if( action.payload === "rest" ) {
        return {
          ...state,
          allVideoGames: state.backup,
        };
      }

      if (action.payload === "DB") {
        const videogamesFilteredDB = copy5.filter((vg) => isNaN(vg.id));

        if (videogamesFilteredDB.length === 0) {
          alert(
            "No se encontraron coincidencias para el filtro de origen 'DB'."
          );
          return state;
        }

        return {
          ...state,
          allVideoGames: videogamesFilteredDB,
        };
      } else {
        const copy6 = [...state.backup];
        const videogamesFilteredAPI = copy6.filter((vg) => !isNaN(vg.id));

        if (videogamesFilteredAPI.length === 0) {
          alert(
            "No se encontraron coincidencias para el filtro de origen 'API'."
          );
          return state;
        }

        return {
          ...state,
          allVideoGames: videogamesFilteredAPI,
        };
      }
    case "FILTER_CLEANER":
      return {
        ...state,
        allVideoGames: state.backup,
      };

      //2
      case 'GET_GENRES':
        return {
          ...state,
          genres: action.payload,
        }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default rootReducer;
