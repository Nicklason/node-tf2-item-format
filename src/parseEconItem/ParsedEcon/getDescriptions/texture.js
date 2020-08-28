const schema = require('tf2-static-schema');

/**
 * Checks if texture is the one on the item.
 * @param {Object} description
 * @param {string} name
 * @param {string} type
 */
exports.isItemsTexture = function (description, item) {
	return description.value.startsWith('\u2714 ') && (matchesName(description, item) || isCurrentItemSkin(item));
};

function matchesName(description, { itemName }) {
	return itemName.origin.includes(
		description.value.replace('\u2714 ', ''),
	);
}

function isCurrentItemSkin({ tags }) {
	return !!tags.wear;
}

exports.getTexture = function (description) {
	// Only set texture when app_data present.
	return description.app_data
		? schema.getTexture(description.app_data.def_index) : undefined;
};
