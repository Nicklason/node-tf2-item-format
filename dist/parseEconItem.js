"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ParsedEcon_1 = __importDefault(require("./parseEconItem/ParsedEcon"));
/**
 * Parses Economy item from steam.
 * @param {object} item
 * @param {object} options
 * @param {boolean} options.inNumbers
 * @return {object}
 */
function default_1(item, options = { inNumbers: true }) {
    const parsedEcon = new ParsedEcon_1.default(item, options);
    const name = parsedEcon.itemName.getShort();
    return Object.assign({ name, fullName: parsedEcon.itemName.getFull(), id: parsedEcon.id, img: parsedEcon.getImageURL() }, parsedEcon.getAttributes(name));
}
exports.default = default_1;
;
