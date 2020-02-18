"use strict";
// Copyright (c) 2018-2019 Coinbase, Inc. <https://coinbase.com/>
// Licensed under the Apache License, version 2.0
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const browserSvg_1 = __importDefault(require("./images/browserSvg"));
const closeSvg_1 = __importDefault(require("./images/closeSvg"));
const walletLinkBlockedDialogCss_1 = __importDefault(require("./walletLinkBlockedDialogCss"));
const SELECTOR_PREFIX = "_WalletLinkBlockedDialog";
const classNames = {
    backdrop: `${SELECTOR_PREFIX}Backdrop`,
    box: `${SELECTOR_PREFIX}Box`,
    close: `${SELECTOR_PREFIX}Close`,
    image: `${SELECTOR_PREFIX}Image`,
    title: `${SELECTOR_PREFIX}Title`,
    text: `${SELECTOR_PREFIX}Text`,
    button: `${SELECTOR_PREFIX}Button`
};
function show() {
    if (document.querySelector(`#${SELECTOR_PREFIX}`)) {
        return;
    }
    const wrapperEl = document.createElement("div");
    wrapperEl.id = SELECTOR_PREFIX;
    const boxEl = document.createElement("div");
    boxEl.className = classNames.box;
    wrapperEl.appendChild(boxEl);
    const styleEl = document.createElement("style");
    styleEl.type = "text/css";
    styleEl.appendChild(document.createTextNode(walletLinkBlockedDialogCss_1.default));
    boxEl.appendChild(styleEl);
    const closeEl = document.createElement("button");
    closeEl.className = classNames.close;
    const closeImageEl = document.createElement("img");
    closeImageEl.src = closeSvg_1.default;
    closeImageEl.alt = "Close";
    closeEl.appendChild(closeImageEl);
    closeEl.addEventListener("click", handleClickClose, false);
    boxEl.appendChild(closeEl);
    const imgEl = document.createElement("img");
    imgEl.className = classNames.image;
    imgEl.src = browserSvg_1.default;
    imgEl.alt = "";
    boxEl.appendChild(imgEl);
    const h3El = document.createElement("h3");
    h3El.className = classNames.title;
    h3El.appendChild(document.createTextNode("Change settings to connect"));
    boxEl.appendChild(h3El);
    const pEl = document.createElement("p");
    pEl.className = classNames.text;
    pEl.appendChild(document.createTextNode("Your browser setting is blocking the connection to your wallet."));
    boxEl.appendChild(pEl);
    const pEl2 = document.createElement("p");
    pEl2.className = classNames.text;
    pEl2.appendChild(document.createTextNode("To connect to your wallet app, please follow our whitelisting " +
        "instructions. You only have to do this once."));
    boxEl.appendChild(pEl2);
    const buttonEl = document.createElement("button");
    buttonEl.className = classNames.button;
    buttonEl.appendChild(document.createTextNode("See instructions"));
    buttonEl.addEventListener("click", handleClickButton, false);
    boxEl.appendChild(buttonEl);
    document.documentElement.appendChild(wrapperEl);
}
exports.show = show;
function hide() {
    const wrapperEl = document.querySelector(`#${SELECTOR_PREFIX}`);
    if (!wrapperEl) {
        return;
    }
    const closeEl = document.querySelector(`#${SELECTOR_PREFIX} .${classNames.close}`);
    if (closeEl) {
        closeEl.removeEventListener("click", handleClickClose, false);
    }
    const buttonEl = document.querySelector(`#${SELECTOR_PREFIX} .${classNames.button}`);
    if (buttonEl) {
        buttonEl.removeEventListener("click", handleClickButton, false);
    }
    const { parentNode } = wrapperEl;
    if (parentNode) {
        parentNode.removeChild(wrapperEl);
    }
}
exports.hide = hide;
function handleClickClose(evt) {
    evt.preventDefault();
    hide();
}
function handleClickButton(evt) {
    evt.preventDefault();
    window.open("https://github.com/walletlink/walletlink/wiki/Browser-Troubleshooting", "_blank");
}
