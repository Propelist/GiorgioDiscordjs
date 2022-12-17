module.exports = {
	name: 'colour',
	arg_info: 'colour',
	description: 'changes the colour of the user based on hex value (no hashtag)',
	execute(message, args) {

		let hexColor = args[0].toUpperCase();

		if (!hexColor.startsWith('#')) {

			hexColor = '#' + hexColor;
		}

		const role1 = message.guild.roles.cache.find(r => r.name == `${message.author.id} ColourRole`);
		const botRole = message.guild.roles.cache.find(r => r.name == 'Discotheque');


		if (hexColor >= '#000000' && hexColor <= '#FFFFFF') {
			if (!role1) {

				message.guild.roles.create({
					data:{
						name: `${message.author.id} ColourRole`,
						color: hexColor,
						position: botRole.position - 1,
						mentionable: false,
						permissions: 0,

					},
				}).then(role => message.member.roles.add(role));

			}
			else {
				role1.setColor(hexColor);

			}

			message.channel.send ('Colour changed successfully to: ' + hexColor);
		}
		else{
			message.channel.send('not a real colour Stupid');

		}

	},
};