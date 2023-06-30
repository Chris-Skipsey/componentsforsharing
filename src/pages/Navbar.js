import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {

  const getLinkStyle = ({ isActive }) => ( isActive ? 'active' : null);
  


    return (
      <nav className="nav">
        <ul>
        <div className="button"><NavLink to="/" className={getLinkStyle}>Card Component</NavLink></div>
        <div className="button"><NavLink to="/readme" className={getLinkStyle}>READ ME</NavLink></div>
        </ul>
        
      </nav>
    );
        
    }
    
export default NavBar;