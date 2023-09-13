/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVideoGames, setPage } from '../../Redux/actions';
import CardsContainer from '../../Components/Cards/CardsContainer';
import "../home/Home.css"



const Home = () => {
  const VideogamesPerPage = 15;
  const dispatch = useDispatch();//camino pal reducer
  const videoGames = useSelector((state) => state.allVideoGames)//vigilante del estado global, este vigilara una sola propiedad del estado global, esta se la diremos nosotros.
  const currentPage = useSelector((state) => state.current)//devuelve el current
  useEffect(() => {
    
    if( videoGames.length === 0 ) {
      dispatch(getAllVideoGames())
    }
  },[dispatch]) 
  
  // Función para obtener los games de la página actual
  const totalPages = Math.ceil(videoGames.length / VideogamesPerPage);
  const getCurrentVideogames = () => {
    const startIndex = (currentPage - 1) * VideogamesPerPage;
    const endIndex = startIndex + VideogamesPerPage;
    return videoGames.slice(startIndex, endIndex);
  };

  // Función para cambiar a la página anterior
  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

  // Función para cambiar a la página siguiente
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
    }
  };



  return videoGames.length > 0 ? <div>
  <CardsContainer allVideogames={getCurrentVideogames()}></CardsContainer>
  <div className="button-container">
    <button
      className="botton-page"
      onClick={handlePrevPage}
      disabled={currentPage === 1}
    >
      Prev
    </button>
    {currentPage}/{totalPages}
    <button
      className="botton-page"
      onClick={handleNextPage}
      disabled={
        currentPage === Math.ceil(videoGames.length / VideogamesPerPage)
      }
    >
      Next
    </button>
  </div>
</div>
        : 
          
          <div>
              Esperando datos...
          </div>
      
      
    }


export default Home;

