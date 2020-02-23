import { IPCMessage, IPCMessageType } from "./IPCMessage";
export interface SessionIdRequestMessage extends IPCMessage<IPCMessageType.SESSION_ID_REQUEST> {
}
export declare function SessionIdRequestMessage(): SessionIdRequestMessage;
