import {NavLink} from 'react-router-dom';

const AsideMenu = ({color}) => {

	return (

		<aside className="aside-content in-mobile">
			
			<nav className="aside-menu">
				
				<li className={`color-${color}`}><i className="bi-house-door"></i><NavLink to="/">inicio</NavLink></li>
				<li className={`color-${color}`}><i className="bi-ticket-perforated"></i><NavLink to="/Estrenos">estrenos</NavLink></li>
				<li className={`color-${color}`}><i className="bi-gem"></i><NavLink to="/Clasicos">clasicos</NavLink></li>
				<li className={`color-${color}`}><i className="bi-heart"></i><NavLink to="/Hentai">hentai</NavLink></li>
				<li className={`color-${color}`}><i className="bi-star"></i><NavLink to="/Populares">populares</NavLink></li>
				<li className={`color-${color}`}><i className="bi-gender-ambiguous"></i><NavLink to="/Generos">generos</NavLink></li>
				<li className={`color-${color}`}><i className="bi-film"></i><NavLink to="/Peliculas">peliculas</NavLink></li>
				<li className={`color-${color}`}><i className="bi-translate"></i><NavLink to="/Doblaje">doblaje</NavLink></li>

			</nav>

		</aside>

	);

}

export default AsideMenu