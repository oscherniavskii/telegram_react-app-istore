import { useEffect } from 'react';
import './App.css';
//Глобальная переменная (после добавление скрипта в index.html)
const tg = window.Telegram.WebApp;


function App() {

	useEffect(() => {
		//Метод сообщает, что приложение полностью инициализировалось и его можно отрисовывать
		tg.ready();
	}, []);

	const onClose = () => {

		//Закрыть вебприложение
		tg.close();
	}

	return (
		<div className="App">
			<button onClick={onClose}>Закрыть</button>
		</div>
	);
}

export default App;
