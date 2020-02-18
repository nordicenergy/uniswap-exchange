import { WalletLink } from "./WalletLink";
import { WalletLinkProvider } from "./WalletLinkProvider";
export { WalletLink } from "./WalletLink";
export { WalletLinkProvider } from "./WalletLinkProvider";
export default WalletLink;
declare global {
    interface Window {
        WalletLink: typeof WalletLink;
        WalletLinkProvider: typeof WalletLinkProvider;
        ethereum?: WalletLinkProvider;
    }
}
