import colorConverter from 'color-convert'
import {TtfHex,TtfRgb} from '../../../commons/src/model/Color'

export function convert(color: TtfHex): TtfRgb {
    let convertedColor = colorConverter.hex.rgb(color.hex);

    let redVal = convertedColor[0];
    let greenVal = convertedColor[1];
    let blueVal = convertedColor[2];

    let rgbColor: TtfRgb = {
        red: redVal,
        green: greenVal,
        blue: blueVal
    };

    return rgbColor;
}