import {useState,useEffect} from 'react';
import {useParams,NavLink} from 'react-router-dom';
import {HelpHttp} from '../helpers/HelpHttp';
import SecondHeader from './SecondHeader';

const PlayVideo = () => {

	const [info,setInfo] = useState(null),

	[source,setSource] = useState(null),

	[pos,setPos] = useState(null),

	{id} = useParams(),

	api = HelpHttp(),

	url = `http://localhost:4069/video/${id}`,

	Tags = ['action','comedy','romance','horror','drama','fantasy','seinen','slice of life','isekai','school','hentai','sport','ecchi'];

	function setStatus (status) {

		if (status === 'ONGOING') return 'En emision'; 
		else if (status === 'finished') return 'Finalizado';
		else if (status === 'UPCOMING') return 'Anunciado';

	}

	function clickCap (e) {

		setSource(e.target.dataset.src);

		setPos(e.target.dataset.pos);

	}

	useEffect(() => {

		api.get(url).then(res => {

			if(!res.err) setInfo(res);
			else console.log(res);

		});

	},[]);

	return (

		<>

			<SecondHeader color="none"/>

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

							{info && <span className="margin-lf">{`anio ${info.releaseYear}`}</span>}

							{info && <span className="margin-lf">{info && (info.numEpisodes > 1) ? `${info.numEpisodes} episodios` : `${info.numEpisodes} episodio`}</span>}

						</div>

						<p>{info && info.description}</p>

						<div className="tags">

							{info && info.tags.map((tag,i) => <NavLink to={`/Generos/${tag}`} key={i}>{tag}</NavLink>)}

						</div>

					</div>

				</article>

				<article className="grid-caps"></article>

				<article className="container-video">

					<video className="video" src={source} controls></video>

					<aside className="container-caps">
						
						{info && info.episodes.map((cap,i) => <div className={(pos == i + 1) ? "cap-active" : undefined} key={i} data-pos={i + 1} data-src={cap.src} onClick={clickCap}>{cap.title}</div>)}

					</aside>

				</article>

			</section>

		</>

	);

}

export default PlayVideo;