import { createContext } from "react";
import { AccountInfoContextType } from './types';
import { noop } from '../../util/noop-util';

export const ContextLogin = createContext<AccountInfoContextType>({
  userName: undefined,
  setUserName: noop,
  cardNumber: undefined,
  setCardNumber: noop,
});