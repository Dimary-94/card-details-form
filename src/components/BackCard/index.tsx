import { FC, useContext } from "react";
import { CardContainer } from "../CardForm/styled";
import image from "../../images/bg-card-back.png";
import { ContextLogin } from "../ContextsLogin";
import { CardCVC } from "../FaceCard/styled";

export const BackCard: FC = () => {
  const { cvvNumber } = useContext(ContextLogin);

  return (
    <CardContainer style={{ backgroundImage: `url(${image})` }}>
      <CardCVC>
        {!cvvNumber ? '000' : cvvNumber}
      </CardCVC>
    </CardContainer>
  );
};
