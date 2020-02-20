import { IPCMessage, IPCMessageType } from "./IPCMessage";
export interface UnlinkedMessage extends IPCMessage<IPCMessageType.UNLINKED> {
}
export declare function isUnlinkedMessage(msg: any): msg is UnlinkedMessage;
