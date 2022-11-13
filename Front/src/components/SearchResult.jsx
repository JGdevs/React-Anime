import {useState,useEffect} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import {HelpHttp} from '../helpers/HelpHttp';
import SecondHeader from './SecondHeader';
import CardResult from './CardResult';
import Loader from './Loader';

const SearchResult = () => {

	const [result,setResult] = useState(null),

	[newSearch,setNewSearch] = useState(null),

	nav = useNavigate(),

	api = HelpHttp();

	let {search} = useParams(),

	url = `http://localhost:4069/search/${search}`;

	function searchAnime (e) {

		e.preventDefault();

		nav(`/search/${newSearch}`);

	}

	useEffect(()=> {

		api.get(url).then(res => {

			if(!res.err) setResult(res);
			else console.log(res.err);

		})

	},[search]);

	return (

		<>

			<SecondHeader color="child"/>
				
			<form className="search-form bg-serie flex-center" onSubmit={searchAnime}>
				
			<input type="text" required onChange={(e) => setNewSearch(e.target.value)}/>
			<input type="submit" value="buscar"/>

			</form>

			{result && <h2 className="total-result bg-serie text-white">tenemos {result.length} resultados para la busqueda de {search}</h2>}

			<section className="search-result-container">

				{

					(result) 

					? (result.length > 0) ? result.map((info,i) => <CardResult className="card-result" key={i} info={info}/>) : false

					:<Loader/>

				}

			</section>

		</>

	);

}

export default SearchResult;