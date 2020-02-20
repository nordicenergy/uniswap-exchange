import { IPCMessage, IPCMessageType } from "./IPCMessage";
export interface SessionIdResponseMessage extends IPCMessage<IPCMessageType.SESSION_ID_RESPONSE> {
    sessionId: string;
}
export declare function isSessionIdResponseMessage(msg: any): msg is SessionIdResponseMessage;
