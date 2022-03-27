import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../../Context/actions";
import { useAuthDispatch, useAuthState } from "../../Context/contexts";

import logo from "../../assets/LOGO-boilbook-blanco.png";
import engImg from "../../assets/eng-switch.png";

import "./NavbarOne.scss";

const NavbarOne = () => {
  let navigate = useNavigate();
  const dispatch = useAuthDispatch(); // lee el método dispatch del contexto
  const user = useAuthState(); //lee los detalles del usuario del contexto

  const handleLogout = () => {
    //RECARGA LA PAG, pero tarda un segundo - revisar
    window.location.reload();
    logoutUser(dispatch); //llama a la acción logout
    navigate("/"); //navega de nuevo al login sin usuario
  };

  return (
    <div className="navbarOne">
      {user.email ? (
          <>
          {/**fila1 */}
              <div className="navbarOne__row1">
                <div  className="navbarOne__col1">
                    <div >
                      <img src={engImg} alt="language switch" className="navbarOne__img"/>
                    </div>
        
                    <div>
                      <NavLink to="#">Nosotros</NavLink>
                    </div>
                </div>
        
                <div className="navbarOne__col2">
                  <div>
                    <NavLink onClick={handleLogout} className={({ isActive }) => (isActive ? "active" : "inactive")} to="/">
                      LOGOUT
                    </NavLink>
                </div>
                  
               </div> 
            </div>
        {/**fila2 */}
        
            <div className="navbarOne__row2">
                <img src={logo} alt="logo"></img>
                <h1>LA COCINA DE L@S MAL@S COCINER@S</h1>
            </div>
          </>

      ) : (
    <>
  {/**fila1 */}
      <div className="navbarOne__row1">
        <div  className="navbarOne__col1">
            <div >
              <img src={engImg} alt="language switch" className="navbarOne__img"/>
            </div>

            <div>
              <NavLink to="#">Nosotros</NavLink>
            </div>
        </div>

        <div className="navbarOne__col2">
          <div><p>Login</p></div>
          
       </div> 
    </div>
{/**fila2 */}

    <div className="navbarOne__row2">
        <img src={logo} alt="logo"></img>
        <h1>LA COCINA DE L@S MAL@S COCINER@S</h1>
    </div>
  </>
  
  )}
    </div>
  );
};

export default NavbarOne;
