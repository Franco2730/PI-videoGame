/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVideoGames } from '../../Redux/actions';
import Card from '../../Components/card/Card';
import "../home/Home.css"



const Home = () => {
  const dispatch = useDispatch();//camino pal reducer
  const videoGames = useSelector((state) => state.allVideoGames)//vigilante del estado global, este vigilara una sola propiedad del estado global, esta se la diremos nosotros.
  useEffect(() => {
    
    if( videoGames.length === 0 ) {
    dispatch(getAllVideoGames())
  }
  },[dispatch]) 

  return (
    <div>
      { 
        videoGames.length > 0 ? 
        videoGames.map((game,index) => {
          return (
            <Card key={index} id={game.id} genre={game.genre} image={game.image} name={game.name}/> 
          )
        }): (
          <div>
              Esperando datos...
          </div>
        )
      } 
    </div>
  )
}

export default Home;

