import { WalletLinkProvider } from "./WalletLinkProvider";
export interface WalletLinkOptions {
    appName?: string;
    appLogoUrl?: string | null;
    walletLinkUrl?: string;
}
export declare class WalletLink {
    static VERSION: any;
    private _appName;
    private _appLogoUrl;
    private _relay;
    constructor(options: Readonly<WalletLinkOptions>);
    makeWeb3Provider(jsonRpcUrl: string, chainId?: number): WalletLinkProvider;
    setAppInfo(appName: string | undefined, appLogoUrl: string | null | undefined): void;
}
