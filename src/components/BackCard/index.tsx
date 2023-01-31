import { FC } from "react";
import { CardContainer } from "../CardForm/styled";
import image from "../../images/bg-card-back.png";

export const BackCard: FC = () => {
  return (
    <CardContainer style={{ backgroundImage: `url(${image})` }}>Card2</CardContainer>
  );
};
