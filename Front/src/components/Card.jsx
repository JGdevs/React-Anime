import {useNavigate} from 'react-router-dom';

const Anime = ({info,color}) => {

	const nav = useNavigate(),

	navSerie = () => nav(`/serie/${info.title}/${info._id}`);

	let shortTitle = (info.title.length < 15) ? info.title : info.title.slice(0,15),

	random = Math.round((Math.random() * 14) + 1);

	return (

		<article className="anime-card" onClick={navSerie}>
			
			<img src={info.picture}/>

			<h2 className={`bg-${color}`}>{shortTitle}</h2>

			<div className="overlay">
				
				<p>{info.title}</p>

				<p>{info.rating}</p>

			</div>

		</article>

	)

}

export default Anime;

// require("./blendS.jpg")