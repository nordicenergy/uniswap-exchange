import { IPCMessage, IPCMessageType } from "./IPCMessage";
export interface LocalStorageBlockedMessage extends IPCMessage<IPCMessageType.LOCAL_STORAGE_BLOCKED> {
}
export declare function isLocalStorageBlockedMessage(msg: any): msg is LocalStorageBlockedMessage;
