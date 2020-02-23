"use strict";
// Copyright (c) 2018-2019 Coinbase, Inc. <https://coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", { value: true });
const WalletLink_1 = require("./WalletLink");
const WalletLinkProvider_1 = require("./WalletLinkProvider");
var WalletLink_2 = require("./WalletLink");
exports.WalletLink = WalletLink_2.WalletLink;
var WalletLinkProvider_2 = require("./WalletLinkProvider");
exports.WalletLinkProvider = WalletLinkProvider_2.WalletLinkProvider;
exports.default = WalletLink_1.WalletLink;
if (typeof window !== "undefined") {
    window.WalletLink = WalletLink_1.WalletLink;
    window.WalletLinkProvider = WalletLinkProvider_1.WalletLinkProvider;
}
