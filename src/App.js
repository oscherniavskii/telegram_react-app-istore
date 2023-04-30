import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTelegram } from './hooks/useTelegram';

import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';

import './App.css';
import Test from './components/Test/Test';


function App() {
	const { tg, onToggleButton } = useTelegram();

	useEffect(() => {
		tg.ready();
	}, [])

	return (
		<div className="App">
			<Header />
			<Routes>
				<Route index element={<ProductList />} />
				<Route path='/form' element={<Form />} />
				<Route path='/test' element={<Test />} />
			</Routes>
		</div>
	);
}

export default App;
