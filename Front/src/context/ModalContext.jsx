import {createContext,useState} from 'react';

const ModalContext = createContext();

const ModalProvider = ({children}) => {

	const [imageModal,setImageModal] = useState(false),

	[searchModal,setSearchModal] = useState(false),

	data = {

		imageModal,
		setImageModal,
		searchModal,
		setSearchModal,

	};

	return (

		<ModalContext.Provider value={data}>{children}</ModalContext.Provider>

	);

}

export default ModalContext;
export {ModalProvider};
