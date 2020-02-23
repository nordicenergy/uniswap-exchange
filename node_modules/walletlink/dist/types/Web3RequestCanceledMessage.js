"use strict";
// Copyright (c) 2018-2019 Coinbase, Inc. <https://coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", { value: true });
const IPCMessage_1 = require("./IPCMessage");
function Web3RequestCanceledMessage(id) {
    return { type: IPCMessage_1.IPCMessageType.WEB3_REQUEST_CANCELED, id };
}
exports.Web3RequestCanceledMessage = Web3RequestCanceledMessage;
