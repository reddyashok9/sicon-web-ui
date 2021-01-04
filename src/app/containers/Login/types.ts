/* --- STATE --- */
export interface LoginState {
  loading: boolean;
  authenticated: boolean;
  role: string;
}

export type ContainerState = LoginState;
