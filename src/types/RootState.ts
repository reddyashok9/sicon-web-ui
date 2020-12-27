import { ArticlesState } from 'app/containers/Articles/types';
import { AccountsState } from 'app/containers/Accounts/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  articles?: ArticlesState;
  accounts?: AccountsState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
