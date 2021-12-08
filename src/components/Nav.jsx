import { NavLink } from 'react-router-dom';
import '../App.css';

const Nav = () => {
    return (
        <nav className="menu">
            <div className="nav_menu">
            <NavLink exact className="link" to="/" activeClassName="active">Home</NavLink>
            <NavLink exact className="link" to="/about" activeClassName="active">About</NavLink>
            <NavLink exact className="link" to="/fav" activeClassName="active">Favorites</NavLink>
            </div>
        </nav>
    )
};

export default Nav;
