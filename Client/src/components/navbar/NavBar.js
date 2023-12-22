import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className='navbar'>
      <div>
        <Link to="/"><img src="LOGO.png" alt="logo"/></Link>
      </div>
      <div>
        {isLoggedIn ? (
          <p>Bienvenido, Usuario</p>
        ) : (
          <>
            <Link to="/login">Iniciar Sesión</Link>
            <Link to="/signup">Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;