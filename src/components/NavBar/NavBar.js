import {Link, NavLink} from 'react-router-dom'
import CartWidget from '../../Pages/CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='menu-navbar-container'>
      <h1 className='menu-title'>Mi Tienda Online</h1>
      <ul className='menu-items'>
        <li>
          <NavLink to="/" className='menu-list'>Productos</NavLink>
        </li>
        <li>
        <NavLink to="/category/desayunos" className='menu-list'>Desayunos</NavLink>
        </li>
        <li>
        <NavLink to="/category/almuerzos" className='menu-list'>Almuerzos</NavLink>
        </li>
      </ul>
      <Link to="/cart"><CartWidget /></Link>
      
    </div>

  )
}

export default NavBar