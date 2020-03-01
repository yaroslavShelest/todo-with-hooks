import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
     <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
       <div className="navbar-brand">
         Todo App On Hooks
       </div>
   
       <ul className="navbar-nav">
         <li className="nav-item">
           <NavLink
             className="nav-link"
             to="/"
             exact
           >
             Главная
           </NavLink>
         </li>
         <li className="nav-item">
           <NavLink
             className="nav-link"
             to="/aboutme"
           >
             Информация
           </NavLink>
           
         </li>
       </ul>
     </nav>
   )