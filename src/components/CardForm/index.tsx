import { FC, useContext } from "react";
import ButtonAction from "../ButtonAction/ButtonAction";
import { useNavigate } from "react-router-dom";
import { useValidation, defaultRules, defaultMessages } from 'react-simple-form-validator';
import { ContextLogin } from "../ContextsLogin";
import * as S from "./styled";

export const CardForm: FC = () => {
  const navigate = useNavigate();

  const { userName, setUserName, cardNumber, setCardNumber } = useContext(ContextLogin);

  const { isFieldInError, getErrorsInField, isFormValid } = useValidation({
    fieldsRules: {
      userName: { required: true, customUserNameRule: true },
      cardNumber: { required: true, customUserNumberRule: true }
    },
    state: { userName, cardNumber },
    rules: {
      ...defaultRules,
      customUserNameRule: /^[a-zA-Z]+ [a-zA-Z]+$/,
      customUserNumberRule: /\b(?:\d[ ]*?){16}\b/,
    },
    messages: {
      ...defaultMessages,
      en: { ...defaultMessages['en'], customUserNameRule: 'Username ', customUserNumberRule: 'Card number format must be xxxx-xxxx-xxxx-xxxx' }
    }
  });

  const handleSubmit = () => {
    navigate('/complete');
  }

  return (
    <S.HeroWrapper>
      <form>
        <div className="form-control">
          <S.Label>CardHolder Name</S.Label>
          <S.Input
            id="user-name"
            type="text"
            placeholder="e.g. Jane Appleseed"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
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
          />
          <p className="error-text">
            {cardNumber && isFieldInError('cardNumber') && getErrorsInField('cardNumber').join('\n')}
          </p>
        </div>
      </form>
      <ButtonAction
        id={'confirm'}
        text={'Confirm'}
        disabled={!isFormValid}
        className={'submit-button'}
        handler={handleSubmit}
      />
    </S.HeroWrapper>
  );
};
