import {useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import MenuMobile from './MenuMobile';


const Header = () => {

	const [menu,setMenu] = useState("hidden");

	return (

		<header className={`header bg-animation`}>
		
			<NavLink to="/play/3" className="title">React Anime</NavLink>

			<nav className="menu-desktop in-mobile">
				
				<NavLink className="nav-link-effect" to="/Generos">Generos</NavLink>
				<NavLink className="nav-link-effect" to="/Estrenos">Estrenos</NavLink>
				<NavLink className="nav-link-effect" to="/Populares">Destacados</NavLink>

			</nav>		

			<i className="bi-list in-desktop" onClick={()=> setMenu("active")}></i>

			<MenuMobile menu={menu} setMenu={setMenu}/>

		</header>

	);

}

export default Header;