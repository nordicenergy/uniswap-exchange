export interface WalletLinkNotificationOptions {
    message?: string;
    showProgressBar?: boolean;
    autoExpandAfter?: number;
    buttonInfo1?: string;
    buttonInfo2?: string;
    buttonInfo3?: string;
    buttonLabel1?: string;
    buttonLabel2?: string;
    buttonLabel3?: string;
    onClickButton1?: () => void;
    onClickButton2?: () => void;
    onClickButton3?: () => void;
}
export declare class WalletLinkNotification {
    static injectContainer(): void;
    private readonly message;
    private readonly showProgressBar;
    private readonly autoExpandAfter;
    private readonly buttonInfo1;
    private readonly buttonInfo2;
    private readonly buttonInfo3;
    private readonly buttonLabel1;
    private readonly buttonLabel2;
    private readonly buttonLabel3;
    private readonly onClickButton1;
    private readonly onClickButton2;
    private readonly onClickButton3;
    private el;
    private autoExpandTimer;
    private _expanded;
    constructor(params: WalletLinkNotificationOptions);
    show(): void;
    hide(): void;
    expanded: boolean;
    private $;
    private handleClick;
    private handleClickButton1;
    private handleClickButton2;
    private handleClickButton3;
}
