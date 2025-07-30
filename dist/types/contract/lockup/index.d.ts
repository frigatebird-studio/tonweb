import { LockupWalletV1 } from './lockup-wallet-v1';
import { VestingWalletV1 } from './vesting-wallet-v1';
export declare const all: {
    'lockup-0.1': typeof LockupWalletV1;
    'vesting-1': typeof VestingWalletV1;
};
export declare const list: (typeof LockupWalletV1 | typeof VestingWalletV1)[];
