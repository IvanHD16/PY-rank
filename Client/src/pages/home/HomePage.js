import React from 'react';
import { Link } from 'react-router-dom';
import RightBar from '../../components/rightBar/RightBar';
import './homePage.css'
import { useSelector } from 'react-redux';


const HomePage = () => {

  const topRankings = useSelector((state)=>state.topRankings)

  return (
    <div>
      <RightBar />
      <main>
        <div className='content-home'>
          <section className='first-line'>
            <div class="search-container">
              <input type="search" placeholder="Buscar..."/>
              <button type="submit">Buscar</button>
            </div>
            <div className='nueva-votacion'>
            <Link to="/crear-votacion" style={{ textDecoration: 'none' }}><button>Nueva votación</button></Link>
          </div>
          </section>

          <section>
            <h2>Bienvenido a TopRankingsHub</h2>
            {/* Aquí puedes agregar contenido adicional para dar la bienvenida */}
          </section>

          <section>
            <h2>Rankings Populares</h2>
            <ul>
              {topRankings.map((ranking, index) => (
                <li key={index}>
                  <Link to={`/ranking/${ranking.id}`}>
                    {ranking.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      {/* <footer>
        <p>Tu pie de página</p>
      </footer> */}
    </div>
  );
};

export default HomePage;
