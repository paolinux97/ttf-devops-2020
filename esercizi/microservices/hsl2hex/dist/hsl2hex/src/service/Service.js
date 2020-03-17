"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const color_convert_1 = __importDefault(require("color-convert"));
function convert(color) {
    let HSLColor = [color.hue, color.saturation, color.lightness];
    let convertedColor = color_convert_1.default.hsl.hex(HSLColor);
    let hexColor = {
        hex: convertedColor
    };
    return hexColor;
}
exports.convert = convert;
//# sourceMappingURL=Service.js.map