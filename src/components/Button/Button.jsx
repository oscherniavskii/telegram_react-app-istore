

import './button.css';

const Button = (props) => {

	return (
		<button className={'button' + props.className} {...props}></button>
	);
};

export default Button;