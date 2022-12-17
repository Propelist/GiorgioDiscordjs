module.exports = {
	name: 'setname',
	description: 'Changes nickname for yourself or someone else if mentioned at front of message [@user],nickname',
	execute(message, args) {

		const { getUserFromMention } = require('./various/getMentions.js');
		const { filterAllMentions } = require('./various/mentionFilters.js');
		let messageAuthor = message.member;
		const mentionedMember = getUserFromMention(message, args[0]);
		let senderNickname = message.member.nickname;


		if (mentionedMember) {

			if (mentionedMember.id == message.client.user.id) {
				message.channel.send('My name is Giovanni Giorgio, but everybody calls me Giorgio');
				return;
			}
			if (mentionedMember == message.guild.id) {
				message.channel.send('You cant change everyones name stupid');
				return;
			}
			else if (mentionedMember.id == message.guild.ownerID) {
				message.channel.send('Owners name cannot be changed due to Discord bot hierarchy rules');
				return;
			}
			messageAuthor = mentionedMember;
			senderNickname = mentionedMember.nickname;
			args.shift();

		}

		for (let i = 0; i < args.length; i++) {

			if(filterAllMentions(message, args[i])) {
				message.channel.send('You cant have mentions in your username');
				return;
			}

		}

		const newNickname = args.join (' ');

		if (!senderNickname) {
			senderNickname = messageAuthor.user.username;
		}

		message.channel.send(` "${senderNickname}" nickname has been changed to "${newNickname}"`);
		messageAuthor.setNickname(newNickname);
	},
};