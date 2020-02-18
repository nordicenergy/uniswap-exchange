/// <reference types="node" />
import BN from "bn.js";
import { AddressString, IntNumber, RegExpString } from "./types/common";
import { Web3Request } from "./types/Web3Request";
import { ArbitraryResponse, EthereumAddressFromSignedMessageResponse, RequestEthereumAccountsResponse, ScanQRCodeResponse, SignEthereumMessageResponse, SignEthereumTransactionResponse, SubmitEthereumTransactionResponse, Web3Response } from "./types/Web3Response";
export interface EthereumTransactionParams {
    fromAddress: AddressString;
    toAddress: AddressString | null;
    weiValue: BN;
    data: Buffer;
    nonce: IntNumber | null;
    gasPriceInWei: BN | null;
    gasLimit: BN | null;
    chainId: IntNumber;
}
export interface WalletLinkRelayOptions {
    walletLinkUrl: string;
}
export declare class WalletLinkRelay {
    private static callbacks;
    private static accountRequestCallbackIds;
    private readonly walletLinkUrl;
    private readonly walletLinkOrigin;
    private readonly storage;
    private iframeEl;
    private popupUrl;
    private popupWindow;
    private sessionId;
    private appName;
    private appLogoUrl;
    private linked;
    private iframeLoaded;
    private localStorageBlocked;
    private actionsPendingIframeLoad;
    private actionsPendingSessionId;
    constructor(options: Readonly<WalletLinkRelayOptions>);
    setAppInfo(appName: string, appLogoUrl: string | null): void;
    injectIframe(): void;
    getStorageItem(key: string): string | null;
    setStorageItem(key: string, value: string): void;
    requestEthereumAccounts(): Promise<RequestEthereumAccountsResponse>;
    signEthereumMessage(message: Buffer, address: AddressString, addPrefix: boolean, typedDataJson?: string | null): Promise<SignEthereumMessageResponse>;
    ethereumAddressFromSignedMessage(message: Buffer, signature: Buffer, addPrefix: boolean): Promise<EthereumAddressFromSignedMessageResponse>;
    signEthereumTransaction(params: EthereumTransactionParams): Promise<SignEthereumTransactionResponse>;
    signAndSubmitEthereumTransaction(params: EthereumTransactionParams): Promise<SubmitEthereumTransactionResponse>;
    submitEthereumTransaction(signedTransaction: Buffer, chainId: IntNumber): Promise<SubmitEthereumTransactionResponse>;
    scanQRCode(regExp: RegExpString): Promise<ScanQRCodeResponse>;
    arbitraryRequest(data: string): Promise<ArbitraryResponse>;
    sendRequest<T extends Web3Request, U extends Web3Response>(request: T): Promise<U>;
    private postIPCMessage;
    private openPopupWindow;
    private closePopupWindow;
    private invokeCallback;
    private resetAndReload;
    private handleMessage;
    private handleBeforeUnload;
}
