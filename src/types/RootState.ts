import { ArticlesState } from 'app/containers/Articles/types';
import { AccountsState } from 'app/containers/Accounts/types';
import { LoginState } from 'app/containers/Login/types';
import { AuthenticatorState } from 'app/containers/Authenticator/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  articles?: ArticlesState;
  accounts?: AccountsState;
  login?: LoginState;
  authenticator?: AuthenticatorState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
