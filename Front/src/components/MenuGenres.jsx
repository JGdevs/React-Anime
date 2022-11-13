import {useState} from 'react';
import {HelpHttp} from '../helpers/HelpHttp';

const MenuGenres = ({setGenres}) => {

	const HandlerChange = (e) => setGenres(e.target.value);

	return (

		<section className="select-container">

			<p className="text-white margin-rg fs-0">Seleciona un genero de la lista para filtrar los resultados</p>

			<div className="custom-select">

				<select className="genres-select" onChange={HandlerChange}>
					
					<option selected="" disabled="" hidden="">Generos</option>
					<option value="action">accion</option>
					<option value="romance">romance</option>
					<option value="comedy">comedia</option>
					<option value="horror">horror</option>
					<option value="drama">drama</option>
					<option value="fantasy">fantasia</option>
					<option value="seinen">seinen</option>
					<option value="slice of life">slice of slife</option>

				</select>

				<span className="custom-arrow"></span>

			</div>

		</section>

	);

}

export default MenuGenres;