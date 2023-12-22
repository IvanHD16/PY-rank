import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>

      <main>
        <section>
          <h2>Bienvenido a Tu Página</h2>
          {/* Aquí puedes agregar contenido adicional para dar la bienvenida */}
        </section>

        <section>
          <h2>Búsqueda</h2>
          {/* Agrega tu componente de búsqueda aquí */}
        </section>

        <section>
          <h2>Rankings Populares</h2>
          {/* Agrega el componente de rankings populares aquí */}
        </section>

        <section>
          <h2>Categorías de Rankings</h2>
          {/* Agrega el componente de categorías de rankings aquí */}
        </section>

        <section>
          <h2>Crear Nueva Votación</h2>
          {/* Agrega el componente para crear una nueva votación aquí */}
          <Link to="/crear-votacion">Ir a Crear Nueva Votación</Link>
        </section>
      </main>

      <footer>
        <p>Tu pie de página</p>
        {/* Otras opciones de diseño y estilo para el pie de página */}
      </footer>
    </div>
  );
};

export default HomePage;
