
import { Address, AddressType } from '../../utils/address';
import { LockupWalletV1Config, LockupWalletV1Options } from './lockup-wallet-v1';
import BN from 'bn.js';
import { Cell } from '../../boc/cell';
import { HttpProvider } from '../../providers/http-provider';
import { WalletContract } from '../wallet/wallet-contract';
export interface VestingWalletV1Options extends LockupWalletV1Options {
  walletId?: number;
  config?: LockupWalletV1Config;
}

export declare class VestingWalletV1 extends WalletContract {
  constructor(provider: HttpProvider, options: VestingWalletV1Options);
  getName(): string;
  createDataCell(): Cell;
  createAddWhitelistBody(params: { addresses: Address[], queryId?: number }): Cell;
  createInternalTransfer(params: { secretKey: Uint8Array, toAddress: AddressType, amount: BN | string, seqno: number, payload?: string | Uint8Array | Cell, sendMode?: number, stateInit?: Cell, expireAt?: number }): Cell;
  getPublicKey(): Promise<BN>;
  getWalletId(): Promise<number>;
  getLockedAmount(time?: number): Promise<BN>;
  getVestingData(): Promise<{ vestingStartTime: number, vestingTotalDuration: number, unlockPeriod: number, cliffDuration: number, vestingTotalAmount: BN, vestingSenderAddress: Address, ownerAddress: Address, whitelistCell: Cell }>;
  getWhitelist(): Promise<Address[]>;
}