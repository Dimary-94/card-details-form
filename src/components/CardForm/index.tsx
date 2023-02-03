import { FC, useContext, FormEvent } from "react";
import { useValidation, defaultRules, defaultMessages } from 'react-simple-form-validator';
import { ContextLogin } from "../ContextsLogin";
import * as S from "./styled";

export const CardForm: FC = () => {
  const {
    userName,
    setUserName,
    cardNumber,
    setCardNumber,
    cvvNumber,
    setCvvNumber,
    setMessage
  } = useContext(ContextLogin);

  const { isFieldInError, getErrorsInField, isFormValid } = useValidation({
    fieldsRules: {
      userName: { required: true, customUserNameRule: true },
      cardNumber: { required: true, customUserNumberRule: true },
      cvvNumber: { required: true, customUserCVCRule: true }
    },
    state: { userName, cardNumber, cvvNumber },
    rules: {
      ...defaultRules,
      customUserNameRule: /^[A-z]+ [A-z]{4,16}$/g,
      customUserNumberRule: /\b(?:\d[ ]*?){16}\b/,
      customUserCVCRule: /\b(?:\d[ ]*?){3}\b/,
    },
    messages: {
      ...defaultMessages,
      en: {
        ...defaultMessages['en'],
        customUserNameRule: 'The username must include the first and last name with a capital letter',
        customUserNumberRule: 'Please enter 16 digits of your card',
        customUserCVCRule: 'Please enter only 3 digits of your cvc card',
      }
    }
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage({
      card: {
        user: userName,
        number: cardNumber,
        cvv: cvvNumber
      }
    })
  }

  return (
    <S.HeroWrapper>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <S.Label>CardHolder Name</S.Label>
          <S.Input
            id="username"
            type="text"
            placeholder="e.g. Jane Appleseed"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            className={userName && isFieldInError('userName') ? 'error-input' : ''}
          />
          <p className="error-text">
            {userName && isFieldInError('userName') && getErrorsInField('userName').join('\n')}
          </p>
        </div>
        <div className="form-control">
          <S.Label>Card Number</S.Label>
          <S.Input
            id="card-number"
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={(e) => setCardNumber(e.target.value)}
            value={cardNumber}
            className={cardNumber && isFieldInError('cardNumber') ? 'error-input' : ''}
          />
          <p className="error-text">
            {cardNumber && isFieldInError('cardNumber') && getErrorsInField('cardNumber').join('\n')}
          </p>
        </div>
        <div className="form-control">
          <S.Label>CVC</S.Label>
          <S.Input
            id="card-cvc"
            type="text"
            placeholder="e.g. 123"
            onChange={(e) => setCvvNumber(e.target.value)}
            value={cvvNumber}
            className={cvvNumber && isFieldInError('cvvNumber') ? 'error-input' : ''}
          />
          <p className="error-text">
            {cvvNumber && isFieldInError('cvvNumber') && getErrorsInField('cvvNumber').join('\n')}
          </p>
        </div>
        <S.LoadingButton
          className="submit-button"
          type="submit"
          variant="contained"
          color="secondary"
          disabled={!isFormValid}
        >
          Confirm
        </S.LoadingButton>
      </form>
    </S.HeroWrapper>
  );
};
