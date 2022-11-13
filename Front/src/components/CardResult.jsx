import {useNavigate} from 'react-router-dom';

const CardResult = ({info}) => {

	const nav = useNavigate(),

	navigate = () => nav(`/serie/${info.title}/${info._id}`);

	return (

		<article className="card-result" onClick={navigate}>
			
			<div>

				<img src={require('./QuintiGods.jpg')}/>

			</div>

			<h3>{info.title}</h3>

		</article>

	);

}

export default CardResult;