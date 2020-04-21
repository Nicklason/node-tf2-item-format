/**
 * Selects quality based off input.
 * @param {boolean} isStrange
 * @param {boolean} isVintage
 * @param {string} otherQuality
 * @param {Object} attributes
 * @return {Object}
 */
module.exports = function ({ isStrange, isVintage, otherQuality, attributes }) {
	let quality;
	let elevated = false;

	if (isVintage) quality = 'Vintage';
	else if (otherQuality) quality = otherQuality;
	else if (attributes.particle) quality = 'Unusual';
	
	if (isStrange) {
		if (quality) elevated = true;
		else quality = 'Strange';
	} else if (attributes.texture) quality = 'Decorated Weapon';
	else if (!quality) quality = 'Unique';

	return { 
		value: quality, 
		elevated 
	};
};
