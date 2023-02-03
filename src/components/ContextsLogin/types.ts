export type AccountInfoContextType = {
  userName: string | undefined;
  setUserName: (value: string) => void;
  cardNumber: string | undefined;
  setCardNumber: (value: string) => void;
  cvvNumber: string | undefined;
  setCvvNumber: (value: string) => void;
  message: {
    card: {
      user: string | undefined;
      number: string | undefined;
      cvv: string | undefined;
    }
  };
  setMessage: Function;
};
