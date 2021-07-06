import { EconDescription } from '../../../types';
import { ISchema } from '../../../types/schema';

/**
 * Handles killstreak actions
 */
export default class Killstreak {
	public value!: string;
	public killstreaker?: string;
	public sheen?: string;

	get killstreak() {
		return this.value;
	}

	constructor(
		private schema: ISchema,
	) {}

	set killstreak(value: string) {
		if (
			this.schema.getKillstreakEnum(value) <
			this.schema.getKillstreakEnum(this.killstreak)
		)
			return;

		this.value = value;
	}

	/**
	 * Checks if description includes killstreaker
	 * Killstreaker is an `effect` from killstreak
	 * @param {object} description
	 * @return {boolean}
	 */
	static isKillstreaker(description: EconDescription): boolean {
		return (
			description.value.startsWith('Killstreaker: ') &&
			description.color === '7ea9d1'
		);
	}

	/**
	 * Checks if description includes sheen
	 * @param {object} description
	 * @return {boolean}
	 */
	static isSheen(description: EconDescription): boolean {
		return (
			description.value.startsWith('Sheen: ') &&
			description.color === '7ea9d1'
		);
	}

	/**
	 * Checks if item is killstreak from description
	 * @param {object} description
	 * @return {boolean}
	 */
	static isKillstreak(description: EconDescription): boolean {
		return (
			description.value === 'Killstreaks Active' &&
			description.color === '7ea9d1'
		);
	}

	/**
	 * Sets killstreaker from description
	 * @param {object} description
	 * @return {string}
	 */
	setKillstreaker(description: EconDescription): void {
		this.killstreaker = description.value.replace('Killstreaker: ', '');
		this.killstreak = 'Professional Killstreak';
	}

	/**
	 * Sets sheen from description
	 * @param {object} description
	 * @return {string}
	 */
	setSheen(description: EconDescription): void {
		this.sheen = description.value.replace('Sheen: ', '');
		this.killstreak = 'Specialized Killstreak';
	}

	/**
	 * Sets killstreak according to other attrs.
	 * @param {object} attributes
	 */
	setKillstreak(): void {
		this.killstreak = 'Killstreak';
	}
}
