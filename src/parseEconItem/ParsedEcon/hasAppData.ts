import { EconItem } from '../../types';

/**
 * If econ contains `app_data` property it means we can set few extra attributes
*/
export default function (item: EconItem): boolean {
	return Object.prototype.hasOwnProperty.call(item, 'app_data');
};
