"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

let decodeMorse = morseCode => {
  if (typeof morseCode !== "string") {
    return undefined;
  }

  const MORSE_CODE = {
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "...-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".-.-.-": ".",
    "--..--": ",",
    "..--..": "?",
    "...---...": "SOS"
  };
  return morseCode.replace(/([^.-\s])/g, "").split("   ").map(word => word.split(" ").map(character => MORSE_CODE[character]).join("")).join(" ").toUpperCase();
};

console.log(decodeMorse("...---..."));
var _default = decodeMorse;
exports.default = _default;