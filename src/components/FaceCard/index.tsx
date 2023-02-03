import { FC, useContext } from "react";
import { CardContainer } from "../CardForm/styled";
import image from "../../images/bg-card-front.png";
import { ContextLogin } from "../ContextsLogin";
import * as S from "./styled";

export const FaceCard: FC = () => {
  const { userName, cardNumber } = useContext(ContextLogin);

  return (
    <CardContainer style={{ backgroundImage: `url(${image})`, padding: '25px' }}>
      <S.CardBubbles></S.CardBubbles>
      <S.CardNumber>
        {!cardNumber ? '0000 0000 0000 0000' : cardNumber.replace(/\D/g, '').replace(/^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g, '$1 $2 $3 $4')}
      </S.CardNumber>
      <S.CardDetails>
        <span>
          {!userName ? 'Jane Appleseed' : userName}
        </span>
      </S.CardDetails>
    </CardContainer>
  );
};
