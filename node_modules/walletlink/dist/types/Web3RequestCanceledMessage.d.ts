import { IPCMessage, IPCMessageType } from "./IPCMessage";
export interface Web3RequestCanceledMessage extends IPCMessage<IPCMessageType.WEB3_REQUEST_CANCELED> {
    id: string;
}
export declare function Web3RequestCanceledMessage(id: string): Web3RequestCanceledMessage;
