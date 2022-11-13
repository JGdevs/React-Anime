import {HashRouter,Routes,Route} from 'react-router-dom';
import Catalogo from './Catalogo';
import HomePage from './Homepage';
import PlaySerie from './PlaySerie';
import PlayVideo from './PlayVideo';
import SearchResult from './SearchResult';

const MainApp = () => {

	return (

		<HashRouter>

			<main>

				<Routes>

					<Route path="/" element={<HomePage/>}/>

					<Route path="/search/:search" element={<SearchResult/>}/>

					<Route path="/Estrenos" element={<Catalogo bg="1" color="gray" origin="estrenos"/>}/>

					<Route path="/Clasicos" element={<Catalogo bg="2" color="blue" origin="clasicos"/>}/>

					<Route path="/Hentai" element={<Catalogo bg="3" color="red" origin="hentai"/>}/>

					<Route path="/Populares" element={<Catalogo bg="4" color="green" origin="populares"/>}/>

					<Route path="/Generos" element={<Catalogo bg="5" color="red2" origin="generos"/>}/>

					<Route path="/Peliculas" element={<Catalogo bg="6" color="wine" origin="peliculas"/>}/>

					<Route path="/Doblaje" element={<Catalogo bg="7" color="yellow" origin="doblaje"/>}/>

					<Route path="/Generos/:genero" element={<Catalogo bg="5" color="red2" origin="generos"/>}/>

					<Route path="/serie/:title/:id" element={<PlaySerie/>}/>

					<Route path="/play/:id" element={<PlayVideo/>}/>

				</Routes>

			</main>

		</HashRouter>

	);

}

export default MainApp;