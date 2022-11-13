import {NavLink} from 'react-router-dom';

const MenuMobile = ({menu,setMenu}) => {

const closeMenu = () => setMenu('hidden');

	return (

		<aside className={`panel ${menu}`}>
			
			<i className="bi-x" onClick={() => setMenu('hidden')}></i>

			<nav className="menu-mobile">
				
				<NavLink to="/Estrenos" onClick={closeMenu}>Estrenos</NavLink>
				<NavLink to="/Populares" onClick={closeMenu}>Populares</NavLink>
				<NavLink to="/Generos" onClick={closeMenu}>Generos</NavLink>
				<NavLink to="/Peliculas" onClick={closeMenu}>Peliculas</NavLink>
				<NavLink to="/Hentai" onClick={closeMenu}>Hentai</NavLink>
				<NavLink to="/Clasicos" onClick={closeMenu}>Clasicos</NavLink>

			</nav>

		</aside>
		
	);

}

export default MenuMobile;