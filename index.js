import TelegramBot from 'node-telegram-bot-api';


const token = '6094360191:AAEaw46_Fkzuar8bU1HhNgqHcBTRTLRnB28';
const webAppUrl = '/';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
	const chatId = msg.chat.id;
	const text = msg.text;

	if (text === '/start') {
		// Обычная встроенная кейборд кнопка
		await bot.sendMessage(chatId, 'Ниже появится кнопка с формой. Заполни!', {
			reply_markup: {
				keyboard: [
					[{ text: 'Заполни форму' }]
				]
			}
		});
		// // Инлайн кнопка (кнопка должна чтото обрабатовать. Коллбек либо открыть вебприложение)
		// await bot.sendMessage(chatId, 'Ниже появится кнопка с формой. Заполни!', {
		// 	reply_markup: {
		// 		inline_keyboard: [
		// 			[{ text: 'Сделать заказ', web_app: { url: webAppUrl } }]
		// 		]
		// 	}
		// });
	}

});