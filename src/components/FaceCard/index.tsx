import { FC, useContext } from "react";
import { CardContainer } from "../CardForm/styled";
import image from "../../images/bg-card-front.png";
import { ContextLogin } from "../ContextsLogin";

export const FaceCard: FC = () => {
  const { userName } = useContext(ContextLogin);

  return (
    <CardContainer style={{ backgroundImage: `url(${image})` }}>{!userName ? 'Jane Appleseed' : userName}</CardContainer>
  );
};
