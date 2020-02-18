import { IPCMessage, IPCMessageType } from "./IPCMessage";
import { Web3Request } from "./Web3Request";
export interface Web3RequestMessage extends IPCMessage<IPCMessageType.WEB3_REQUEST> {
    id: string;
    request: Web3Request;
}
export declare function Web3RequestMessage(params: Omit<Web3RequestMessage, "type">): Web3RequestMessage;
