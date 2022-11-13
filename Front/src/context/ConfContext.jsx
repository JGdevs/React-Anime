import {createContext,useState} from 'react';

const ConfContext = createContext();

const ConfProvider = ({children}) => {

	const defaultConf = {

		typeLoad:'forPage',
		borderImgs:'square-border',
		theme:'dark',
		gridStyle:'grid-gallery',
		order:'byDate',

	},

	[conf,setConf] = useState(JSON.parse(localStorage.getItem('conf')) || defaultConf),

	data = conf;

	data.setConf = setConf;

	return (

		<ConfContext.Provider value={data}>{children}</ConfContext.Provider>

	);

}

export default ConfContext;
export {ConfProvider};