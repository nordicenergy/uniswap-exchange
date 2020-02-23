"use strict";
// Copyright (c) 2018-2019 Coinbase, Inc. <https://coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", { value: true });
const IPCMessage_1 = require("./IPCMessage");
function Web3RequestMessage(params) {
    return Object.assign({ type: IPCMessage_1.IPCMessageType.WEB3_REQUEST }, params);
}
exports.Web3RequestMessage = Web3RequestMessage;
