/**
 * Checks if quality should be set on name by few checks.
 * @param {number} quality
 * @param {boolean} elevated
 * @param {number} effect
 * @return {boolean}
 */
module.exports = function (quality, elevated, effect) {
	return checkForEffectAndUnusual(quality, effect) 
		&& isntUniqueOrElevated(quality, elevated) 
		&& !isDecorated(quality);
}

function checkForEffectAndUnusual(quality, effect) {
	return isNonUnusualWithEffect(quality, effect) || hasNoEffect(quality, effect);
}

/**
 * Isnt unusual quality with effect
 * We add to 
 * @return {boolean}
 */
function isNonUnusualWithEffect(quality, effect) {
	return quality !== 'Unusual' && effect;
}

/**
 * Has quality without effect
 * 
 */
function hasNoEffect(quality, effect) {
	return quality && !effect;
}

function isntUniqueOrElevated(quality, elevated) {
	return quality !== 'Unique' || elevated;
}

function isDecorated(quality) {
	return quality === 'Decorated Weapon';
}
