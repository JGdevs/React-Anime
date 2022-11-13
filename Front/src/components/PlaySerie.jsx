import {useState,useEffect} from 'react';
import {useParams,NavLink} from 'react-router-dom';
import {HelpHttp} from '../helpers/HelpHttp';
import SecondHeader from './SecondHeader';

const PlaySerie = () => {

	const [info,setInfo] = useState(null),

	Tags = ['action','comedy','romance','horror','drama','fantasy','seinen','slice of life','isekai','school','hentai','sport','ecchi'],

	api = HelpHttp();

	let {id} = useParams(),

	url = `http://localhost:4069/serie/${id}`;

	function setStatus (status) {

		if (status === 'ONGOING') return 'En emision'; 
		else if (status === 'FINISHED') return 'Finalizado';
		else if (status === 'UPCOMING') return 'Anunciado';

	}

	useEffect(() => {

		api.get(url).then(res => {

			if(!res.err) setInfo(res);
			else console.log(res);

		});

	},[]);

	return (

		<>

			<SecondHeader color="child"/>

			<section className="play-container">

				<article className="info-container">
					
					<div className="container-image">
					
						<img src={info && info.picture}/>

					</div>

					<div className="description">

						<h3>{info && info.title}</h3>

						<div className="other-info">

							{info && <span>{setStatus(info.status)}</span>}

							{info && <span className="margin-lf">{info.type}</span>}

							{info && <span className="margin-lf">{`anio ${info.animeSeason.year}`}</span>}

							{info && <span className="margin-lf">{info && (info.episodes > 1) ? `${info.episodes} episodios` : `${info.episodes} episodio`}</span>}

						</div>

						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

						<div className="tags">

							{info && info.tags.filter((tag,index) => Tags.some((Tag) => Tag == tag)).map((son,i) => <NavLink to={`/Generos/${son}`} key={i}>{son}</NavLink>)}

						</div>

					</div>

				</article>

				<article className="grid-caps">

				</article>

				<article className="container-video">
					
					<video className="video" src="" controls></video>

				</article>

			</section>

		</>

	);

}

export default PlaySerie;
