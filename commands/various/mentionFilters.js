module.exports = {

	filterAllMentions : (message, mention) =>{
		const { getUserFromMention, getRoleFromMention, getChannelFromMention } = require('./getMentions.js');

		if (getUserFromMention(message, mention) || getRoleFromMention(message, mention) || getChannelFromMention(message, mention)) {
			return true;
		}

	},

	filterUserMentions : (message, mention) =>{
		const { getRoleFromMention, getChannelFromMention } = require('./getMentions.js');

		if (getRoleFromMention(message, mention) || getChannelFromMention(message, mention)) {
			return true;
		}

	},

};