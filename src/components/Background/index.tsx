import { FC } from "react";
import { BackCard } from "../BackCard";
import { FaceCard } from "../FaceCard";
import * as S from "./styled";

export const BackgroundCards: FC = () => {
  return (
    <S.CardsContainer>
      <FaceCard />
      <BackCard />
    </S.CardsContainer>
  );
};
