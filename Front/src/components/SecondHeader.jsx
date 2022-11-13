import {useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import MenuMobile from './MenuMobile';


const SecondHeader = ({color}) => {

	const [menu,setMenu] = useState("hidden");

	return (

		<header className={`second-header bg-${color}`}>
		
			<NavLink to="/" className="title">React Anime</NavLink>

			<i className="bi-list in-desktop text-white" onClick={()=> setMenu("active")}></i>

			<MenuMobile menu={menu} setMenu={setMenu}/>

		</header>

	);

}

export default SecondHeader;