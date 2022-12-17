module.exports = {

	getUserFromMention :(message, mention) =>{

		if (!mention) return;
		const matches = mention.match(/^<@!?(\d+)>$/);


		if (!matches) return;


		const id = matches[1];

		if (message.guild.id == id) {return message.guild.id;}
		return message.guild.members.cache.get(id);
	},

	getRoleFromMention :(message, mention) =>{
		if (!mention) return;
		const matches = mention.match(/^<@&(\d+)>$/);

		if (!matches) return;


		const id = matches[1];

		return message.guild.roles.cache.get(id);
	},

	getChannelFromMention :(message, mention) =>{
		if (!mention) return;
		const matches = mention.match(/^<#(\d+)>$/);

		if (!matches) return;


		const id = matches[1];

		return message.guild.channels.cache.get(id);
	},


};
