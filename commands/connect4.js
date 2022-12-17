module.exports = {
	name: 'connect4',
	description: 'paly connect 4',
	async execute(message) {

		const { board, boardlogic } = require('./connect4/board.json');


		message.channel.send(board).then(async () =>{
			await message.react('1️⃣');
			await message.react('2️⃣');
			await message.react('3️⃣');
			await message.react('4️⃣');
			await message.react('5️⃣');
			await message.react('6️⃣');
			await message.react('7️⃣');
		});

	},
};