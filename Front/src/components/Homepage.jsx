import {useState,useEffect} from 'react';
import {NavLink,useNavigate} from 'react-router-dom';
import Header from './Header';

const Homepage = () => { 	

	const [color,setColor] = useState(null),

	[search,setSearch] = useState(null),

	nav = useNavigate();

	function searchAnime (e) {

		e.preventDefault();

		nav(`/search/${search}`);

	}

	useEffect(() => {

		const observer = new IntersectionObserver((entries) => {

			const header = document.querySelector(".header");

			entries.forEach((entry,index) => {

				if (entry.isIntersecting) {

					switch(entry.target.className) {

						case 'hero-image-p' : {

							setColor((prevColor) => {

								if(header.classList[2] != 'bg-none') header.classList.remove(header.classList[2]);

								header.classList.remove(prevColor); 

								header.classList.add('bg-none');

								return 'bg-none';

							});

							break;

						}

						case 'hero-image-1' : {

							setColor((prevColor) => {

								header.classList.remove(prevColor); 

								header.classList.add('bg-gray');

								return 'bg-gray';					

							});

							break;

						}

						case 'hero-image-2' : {

							setColor((prevColor) => {

								header.classList.remove(prevColor); 

								header.classList.add('bg-blue');

								return 'bg-blue';					

							});

							break;

						}

						case 'hero-image-3' : {

							setColor((prevColor) => {

								header.classList.remove(prevColor); 

								header.classList.add('bg-red');

								return 'bg-red';

							});

							break;	

						}

						case 'hero-image-4' : {

							setColor((prevColor) => {

								header.classList.remove(prevColor); 

								header.classList.add('bg-green');

								return 'bg-green';

							});

							break;	

						}

						case 'hero-image-5' : {

							setColor((prevColor) => {

								header.classList.remove(prevColor); 

								header.classList.add('bg-red2');

								return 'bg-red2';

							});

							break;	

						}

						case 'hero-image-6' : {

							setColor((prevColor) => {

								header.classList.remove(prevColor); 

								header.classList.add('bg-wine');

								return 'bg-wine';

							});

							break;	

						}

						case 'hero-image-7' : {

							setColor((prevColor) => {

								header.classList.remove(prevColor); 

								header.classList.add('bg-yellow');

								return 'bg-yellow';

							});

							break;	

						}

					}

				}

			});

		},{threshold:1});

		for(const caja of document.querySelectorAll('div[class*="hero-image"]')) observer.observe(caja);

		return () => observer.disconnect(); 

	},[]);

	return (

		<>

			<Header/>

			<section className="homepage">

				<div className="hero-image-p">

					<article className="bg-hero">
						
						<h2>entretenimiento gratis todos los animes que quieras lo encuentras aqui</h2>

						<form className="search-form" onSubmit={searchAnime}>
							
							<input type="text" required onChange={(e) => setSearch(e.target.value)}/>
							<input type="submit" value="buscar"/>

						</form>

					</article>

				</div>

				<div className="hero-image-1">
					
					<article className="bg-hero">

							<h2>Lo mas nuevo</h2>

							<p>

								Tenemos los mas recientes estrenos desde el momento de su emision en japon

							</p>

							<NavLink to="/Estrenos" className="button pointer">Ir a estrenos</NavLink>

					</article>

				</div>

				<div className="hero-image-2">
					
					<article className="bg-hero">
						
						<h2>Lo clasicos nunca mueren</h2>

						<p>

							Dragon ball, yuyu hasuko, saint seiya, hokuto no ken y mas,
							para que te conviertas en un otaku del cultura

						</p>
		
						<NavLink to="/Clasicos" className="button pointer">Ir a clasicos</NavLink>

					</article>

				</div>

				<div className="hero-image-3">
					
					<article className="bg-hero">
						
						<h2>Animes +18</h2>

						<p>

							explora en nuestro catalogo tambien una variada seleccion de hentai

						</p>
		
						<NavLink to="/Hentai" className="button pointer">Ir a hentai</NavLink>					

					</article>

				</div>

				<div className="hero-image-4">
					
					<article className="bg-hero">
						
						<h2>No sabes que ver</h2>

						<p>

							hechale un vistazo a lo mas populares para ver lo que es tendencia 

						</p>
		
						<NavLink to="/Populares" className="button pointer">Ir a populares</NavLink>					

					</article>

				</div>

				<div className="hero-image-5">
					
					<article className="bg-hero">
						
						<h2>Todos los generos</h2>

						<p>

							accion,romance,drama y mas, entra en esta seccion y encuentra lo que estas buscando

						</p>
		
						<NavLink to="/Generos" className="button pointer">Ir a generos</NavLink>					

					</article>

				</div>

				<div className="hero-image-6">
					
					<article className="bg-hero">
						
						<h2>Las mejores peliculas de anime</h2>

						<p>

							Akira,kimi no nawa,el viaje de chihiro y mas
							puedes verlas tambien aca

						</p>
		
						<NavLink to="/Peliculas" className="button pointer">Ir a peliculas</NavLink>

					</article>

				</div>

				<div className="hero-image-7">
					
					<article className="bg-hero">
						
						<h2>Cansado de leer</h2>

						<p>

							Entra a nuestra seccion de animes con doblaje original

						</p>
		
						<NavLink to="/Doblaje" className="button pointer">Ir a doblaje</NavLink>

					</article>

				</div>

				</section>

			</>

	)

}

export default Homepage;