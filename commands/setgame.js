module.exports = {

	name: 'setgame',
	description: '@everyone to set a game time, only passes if unanimous',

	async execute(message, args) {

		const filter = m => m.content.includes('discord');
		const collector = message.channel.createMessageCollector(filter, { time: 15000 });

		collector.on('collect', m => {
			console.log(`Collected ${m.content}`);
		});

		collector.on('end', collected => {
			console.log(`Collected ${collected.size} items`);
		});

		/* try{
			await message.react('👍');
			await message.react('👎');
		}
		catch(error) {
			console.error('Somethign went wrong with emojis');
		}

		message.reply('ttt');*/

	},

};