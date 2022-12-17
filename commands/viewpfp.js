module.exports = {
	name: 'viewpfp',
	description: 'gets your own profile picture, if user is mentioned, gets their profile picture',
	execute(message, args) {

		const { getUserFromMention } = require('./various/getMentions.js');
		const { filterUserMentions } = require('./various/mentionFilters.js');


		const mention = getUserFromMention(message, args[0]);

		if (filterUserMentions(message, args[0])) {
			message.channel.send('Not a valid user mention, try again');
			return;
		}

		else if (mention == message.guild.id) {
			message.channel.send('You cant see everyones pfp');
			return;
		}
		else if (mention) {

			message.channel.send(mention.user.displayAvatarURL());
			return;
		}
		else{

			message.channel.send(message.author.displayAvatarURL());
			return;
		}

	},
};

