"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const color_convert_1 = __importDefault(require("color-convert"));
function convert(color) {
    let convertedColor = color_convert_1.default.hex.rgb(color.hex);
    let redVal = convertedColor[0];
    let greenVal = convertedColor[1];
    let blueVal = convertedColor[2];
    let rgbColor = {
        red: redVal,
        green: greenVal,
        blue: blueVal
    };
    return rgbColor;
}
exports.convert = convert;
//# sourceMappingURL=Service.js.map