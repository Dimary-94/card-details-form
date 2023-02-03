import { FC } from "react";
import * as S from "../CardForm/styled";
import logo from '../../images/icon-complete.svg';

export const Description: FC = () => {
  return (
    <S.Text>
      <img src={logo} className='complete' alt='complete' />
      <h1>
        Thank you!
      </h1>
      <span>
        We`ve added your card details
      </span>
    </S.Text>
  );
};
