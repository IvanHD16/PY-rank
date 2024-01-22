import React from 'react';
import { Link } from 'react-router-dom';
import RightBar from '../../components/rightBar/RightBar';
import './homePage.css'


const HomePage = () => {
  return (
    <div>
      <RightBar />
      <main>
        <div className='content-home'>
          <section>
            <div class="search-container">
              <input type="search" placeholder="Buscar..."/>
              <button type="submit">Buscar</button>
            </div>
          </section>

          <section>
            <h2>Bienvenido...</h2>
            {/* Aquí puedes agregar contenido adicional para dar la bienvenida */}
          </section>

          <section>
            <h2>Rankings Populares</h2>
            {/* Agrega el componente de rankings populares aquí */}
          </section>



          <section className='nueva-votacion'>
            <Link to="/crear-votacion" style={{ textDecoration: 'none' }}><button>Nueva votación</button></Link>
          </section>
        </div>
      </main>

      <footer>
        <p>Tu pie de página</p>
        {/* Otras opciones de diseño y estilo para el pie de página */}
      </footer>
    </div>
  );
};

export default HomePage;
