import React, { useEffect, useState } from 'react';
import { useTelegram } from '../../hooks/useTelegram';

import './form.css';


const Form = (props) => {
	const [country, setCountry] = useState('');
	const [street, setStreet] = useState('');
	const [subject, setSubject] = useState('physical');
	const { tg } = useTelegram();

	useEffect(() => {
		//Изменение текста главной кнопки
		tg.MainButton.setParams({
			text: 'Отправить данные'
		})
	}, []);

	useEffect(() => {
		//Скрытие/показ кнопки при заполненности формы
		if (!country || !street) {
			tg.MainButton.hide()
		} else {
			tg.MainButton.show()
		}
	}, [country, street]);

	const onChangeCountry = (e) => {
		setCountry(e.target.value);
	}
	const onChangeStreet = (e) => {
		setStreet(e.target.value);
	}
	const onChangeSubject = (e) => {
		setSubject(e.target.value);
	}

	return (
		<div className={'form'}>
			Введите ваши данные
		</div>
	);
};

export default Form;