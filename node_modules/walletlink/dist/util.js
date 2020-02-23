"use strict";
// Copyright (c) 2018-2019 Coinbase, Inc. <https://coinbase.com/>
// Licensed under the Apache License, version 2.0
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bn_js_1 = __importDefault(require("bn.js"));
const common_1 = require("./types/common");
const INT_STRING_REGEX = /^[0-9]*$/;
const HEXADECIMAL_STRING_REGEX = /^[a-f0-9]*$/;
function hexStringFromBuffer(buf, includePrefix = false) {
    const hex = buf.toString("hex");
    return common_1.HexString(includePrefix ? "0x" + hex : hex);
}
exports.hexStringFromBuffer = hexStringFromBuffer;
function bigIntStringFromBN(bn) {
    return common_1.BigIntString(bn.toString(10));
}
exports.bigIntStringFromBN = bigIntStringFromBN;
function intNumberFromHexString(hex) {
    return common_1.IntNumber(new bn_js_1.default(ensureEvenLengthHexString(hex, false), 16).toNumber());
}
exports.intNumberFromHexString = intNumberFromHexString;
function hexStringFromIntNumber(num) {
    return common_1.HexString("0x" + new bn_js_1.default(num).toString(16));
}
exports.hexStringFromIntNumber = hexStringFromIntNumber;
function has0xPrefix(str) {
    return str.startsWith("0x") || str.startsWith("0X");
}
exports.has0xPrefix = has0xPrefix;
function strip0x(hex) {
    if (has0xPrefix(hex)) {
        return hex.slice(2);
    }
    return hex;
}
exports.strip0x = strip0x;
function prepend0x(hex) {
    if (has0xPrefix(hex)) {
        return "0x" + hex.slice(2);
    }
    return "0x" + hex;
}
exports.prepend0x = prepend0x;
function isHexString(hex) {
    if (typeof hex !== "string") {
        return false;
    }
    const s = strip0x(hex).toLowerCase();
    return HEXADECIMAL_STRING_REGEX.test(s);
}
exports.isHexString = isHexString;
function ensureHexString(hex, includePrefix = false) {
    if (typeof hex === "string") {
        const s = strip0x(hex).toLowerCase();
        if (HEXADECIMAL_STRING_REGEX.test(s)) {
            return common_1.HexString(includePrefix ? "0x" + s : s);
        }
    }
    throw new Error(`"${hex}" is not a hexadecimal string`);
}
exports.ensureHexString = ensureHexString;
function ensureEvenLengthHexString(hex, includePrefix = false) {
    let h = ensureHexString(hex, false);
    if (h.length % 2 === 1) {
        h = common_1.HexString("0" + h);
    }
    return includePrefix ? common_1.HexString("0x" + h) : h;
}
exports.ensureEvenLengthHexString = ensureEvenLengthHexString;
function ensureAddressString(str) {
    if (typeof str === "string") {
        const s = strip0x(str).toLowerCase();
        if (isHexString(s) && s.length === 40) {
            return common_1.AddressString(prepend0x(s));
        }
    }
    throw new Error(`Invalid Ethereum address: ${str}`);
}
exports.ensureAddressString = ensureAddressString;
function ensureBuffer(str) {
    if (Buffer.isBuffer(str)) {
        return str;
    }
    if (typeof str === "string") {
        if (isHexString(str)) {
            const s = ensureEvenLengthHexString(str, false);
            return Buffer.from(s, "hex");
        }
        else {
            return Buffer.from(str, "utf8");
        }
    }
    throw new Error(`Not binary data: ${str}`);
}
exports.ensureBuffer = ensureBuffer;
function ensureIntNumber(num) {
    if (typeof num === "number" && Number.isInteger(num)) {
        return common_1.IntNumber(num);
    }
    if (typeof num === "string") {
        if (INT_STRING_REGEX.test(num)) {
            return common_1.IntNumber(Number(num));
        }
        if (isHexString(num)) {
            return common_1.IntNumber(new bn_js_1.default(ensureEvenLengthHexString(num, false), 16).toNumber());
        }
    }
    throw new Error(`Not an integer: ${num}`);
}
exports.ensureIntNumber = ensureIntNumber;
function ensureRegExpString(regExp) {
    if (regExp instanceof RegExp) {
        return common_1.RegExpString(regExp.toString());
    }
    throw new Error(`Not a RegExp: ${regExp}`);
}
exports.ensureRegExpString = ensureRegExpString;
function ensureBN(val) {
    if (val != null && (bn_js_1.default.isBN(val) || isBigNumber(val))) {
        return new bn_js_1.default(val.toString(10), 10);
    }
    if (typeof val === "number") {
        return new bn_js_1.default(ensureIntNumber(val));
    }
    if (typeof val === "string") {
        if (INT_STRING_REGEX.test(val)) {
            return new bn_js_1.default(val, 10);
        }
        if (isHexString(val)) {
            return new bn_js_1.default(ensureEvenLengthHexString(val, false), 16);
        }
    }
    throw new Error(`Not an integer: ${val}`);
}
exports.ensureBN = ensureBN;
function isBigNumber(val) {
    if (val == null || typeof val.constructor !== "function") {
        return false;
    }
    const { constructor } = val;
    return (typeof constructor.config === "function" &&
        typeof constructor.EUCLID === "number");
}
exports.isBigNumber = isBigNumber;
function range(start, stop) {
    return Array.from({ length: stop - start }, (_, i) => start + i);
}
exports.range = range;
