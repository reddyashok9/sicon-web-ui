/* --- STATE --- */
export interface AccountsState {
  accounts: Array<any>;
  loading: boolean;
  error?: null;
}

export type ContainerState = AccountsState;
