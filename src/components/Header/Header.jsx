import Button from '../Button/Button';
import { useTelegram } from '../../hooks/useTelegram';

import './header.css';

const Header = () => {
	const { onClose, user } = useTelegram();

	return (
		<div className='header'>
			<Button onClick={onClose}>Закрыть</Button>
			<span className={'username'}>
				{user}
			</span>
		</div>
	);
};

export default Header;