import colorConverter from 'color-convert'
import {TtfHsl,TtfHex} from '../../../commons/src/model/Color'
import { HSL } from 'color-convert/conversions';

export function convert(color: TtfHsl): TtfHex {
    let HSLColor: HSL = [color.hue, color.saturation, color.lightness];

    let convertedColor = colorConverter.hsl.hex(HSLColor);

    let hexColor: TtfHex = {
        hex: convertedColor
    }

    return hexColor;
}