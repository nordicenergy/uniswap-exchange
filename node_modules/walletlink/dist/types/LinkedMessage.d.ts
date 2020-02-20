import { IPCMessage, IPCMessageType } from "./IPCMessage";
export interface LinkedMessage extends IPCMessage<IPCMessageType.LINKED> {
}
export declare function isLinkedMessage(msg: any): msg is LinkedMessage;
