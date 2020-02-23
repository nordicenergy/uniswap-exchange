import { HexString, IntNumber } from "./types/common";
import { JSONRPCResponse } from "./types/JSONRPC";
import { Web3Provider } from "./types/Web3Provider";
declare type RawHexBlockHeight = HexString | "earliest" | "latest" | "pending";
declare type IntBlockHeight = IntNumber | "latest";
export interface FilterParam {
    fromBlock: RawHexBlockHeight | undefined;
    toBlock: RawHexBlockHeight | undefined;
    address?: string | string[];
    topics?: Array<string | string[]>;
}
export interface Filter {
    fromBlock: IntBlockHeight;
    toBlock: IntBlockHeight;
    addresses: string[] | null;
    topics: Array<string | string[]>;
}
export declare class FilterPolyfill {
    private readonly provider;
    private readonly logFilters;
    private readonly blockFilters;
    private readonly pendingTransactionFilters;
    private readonly cursors;
    private readonly timeouts;
    private nextFilterId;
    constructor(provider: Web3Provider);
    newFilter(param: FilterParam): Promise<HexString>;
    newBlockFilter(): Promise<HexString>;
    newPendingTransactionFilter(): Promise<HexString>;
    uninstallFilter(filterId: HexString): boolean;
    getFilterChanges(filterId: HexString): Promise<JSONRPCResponse>;
    getFilterLogs(filterId: HexString): Promise<JSONRPCResponse>;
    private makeFilterId;
    private sendAsyncPromise;
    private deleteFilter;
    private getLogFilterChanges;
    private getBlockFilterChanges;
    private getPendingTransactionFilterChanges;
    private setInitialCursorPosition;
    private setFilterTimeout;
    private getCurrentBlockHeight;
    private getBlockHashByNumber;
}
export declare function filterFromParam(param: FilterParam): Filter;
export {};
