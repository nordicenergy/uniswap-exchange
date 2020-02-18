import { IPCMessage, IPCMessageType } from "./IPCMessage";
export interface Web3AccountsResponseMessage extends IPCMessage<IPCMessageType.WEB3_ACCOUNTS_RESPONSE> {
    addresses: string[];
}
export declare function isWeb3AccountsResponseMessage(msg: any): msg is Web3AccountsResponseMessage;
