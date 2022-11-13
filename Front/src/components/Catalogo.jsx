import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {HelpHttp} from '../helpers/HelpHttp';
import SecondHeader from './SecondHeader';
import AsideMenu from './AsideMenu';
import Card from './Card';
import MenuGenres from './MenuGenres';
import Loader from './Loader';
 
const Catalogo = ({origin,color,bg}) => {

	let {genero} = useParams();

	const [animes,setAnimes] = useState(null),

	[bgImage,setBgImage] = useState(bg),

	[genres,setGenres] = useState(genero || 'action'),

	[loader,setLoader] = useState(false),

	url = (origin === 'generos') ? `http://localhost:4069/${origin}/${genres}/0` : `http://localhost:4069/${origin}/0`,

	api = HelpHttp();

	useEffect(() => {

		document.querySelector('html').classList.add(`hero-image-${bg}`);

		document.querySelector('body').classList.add("background-opacity");

	},[]);

	useEffect(() => {

		setLoader(true);

		api.get(url).then(res => {

			if(!res.err) {setAnimes([...res]); setLoader(false)}
			else console.log(res.err);

		});

	},[origin,genres]);

	useEffect(() => {

		const observer = new IntersectionObserver(entries => {

			if(entries[0].isIntersecting) {

				let newUrl = (origin === 'generos') ? `http://localhost:4069/${origin}/${genres}/${animes.length}` 

				:`http://localhost:4069/${origin}/${animes.length}`;

				setLoader(true);

				api.get(newUrl).then(res => {

					if(!res.err) {

						observer.disconnect();

						if(res.length == 0 ) {alert('no hay mas series'); setLoader(false); return false}

						setAnimes([...animes,...res]);

						setLoader(false);

					}

					else console.log(res.err);

				});

			}

		},{threshold:1});

		observer.observe(document.querySelector('.grid-gallery').lastElementChild);

	},[animes]);

	useEffect(() => {

		setBgImage(prevBgImage => {

			document.querySelector('html').classList.remove(`hero-image-${prevBgImage}`);

			document.querySelector('html').classList.add(`hero-image-${bg}`);

			return bg;

		});

	},[bg]);

	useEffect(() => {

		return () => {

			document.querySelector('html').classList.remove(`hero-image-${bg}`);

			document.querySelector('body').classList.remove("background-opacity");

		}

	},[]);

	return (

		<>

			<SecondHeader color={color}/>

			{origin === 'generos' && <MenuGenres setGenres={setGenres}/>}

			<div className="catalogo">

				<AsideMenu color={color}/>
				
				<section className="grid-gallery">
				
					{

						(animes) ? 

						(animes.length > 0) ? animes.map((anime,index) => <Card color={color} info={anime} key={index}/>) : <h2>no hay respuesta</h2>

						: <Loader/>

					}

				</section>

			</div>

			{loader && <Loader/>}

		</>

	);

}

export default Catalogo;