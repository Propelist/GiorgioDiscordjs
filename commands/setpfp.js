module.exports = {
	name: 'setpfp',
	description: 'sets profile picture ofthe bot',
	execute(message) {


		const attachment = message.attachments.first();

		message.client.user.setAvatar(attachment.url);

	},
};
