"use strict";
// Copyright (c) 2018-2019 Coinbase, Inc. <https://coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", { value: true });
var IPCMessageType;
(function (IPCMessageType) {
    IPCMessageType["SESSION_ID_REQUEST"] = "SESSION_ID_REQUEST";
    IPCMessageType["SESSION_ID_RESPONSE"] = "SESSION_ID_RESPONSE";
    IPCMessageType["LINKED"] = "LINKED";
    IPCMessageType["UNLINKED"] = "UNLINKED";
    IPCMessageType["WEB3_REQUEST"] = "WEB3_REQUEST";
    IPCMessageType["WEB3_REQUEST_CANCELED"] = "WEB3_REQUEST_CANCELED";
    IPCMessageType["WEB3_RESPONSE"] = "WEB3_RESPONSE";
    IPCMessageType["LOCAL_STORAGE_BLOCKED"] = "LOCAL_STORAGE_BLOCKED";
})(IPCMessageType = exports.IPCMessageType || (exports.IPCMessageType = {}));
