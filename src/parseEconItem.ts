import ParsedEcon from './parseEconItem/ParsedEcon';

import { ParsedEconOptions, EconItem, ParsedEconItem } from './types';

/**
 * Parses Economy item from steam.
 * @param {object} item
 * @param {object} options
 * @param {boolean} options.inNumbers
 * @return {object}
 */
export default function (item: EconItem, options: ParsedEconOptions = { inNumbers: true }): ParsedEconItem {
	const parsedEcon = new ParsedEcon(item, options);

	return {
		name: parsedEcon.itemName.getShort(),
		fullName: parsedEcon.itemName.getFull(),
		id: parsedEcon.id,
		img: parsedEcon.getImageURL(),
		...parsedEcon.getAttributes(),
	};
};
