import { FC } from "react";
import { BackCard } from "../BackCard";
import { FaceCard } from "../FaceCard";
import * as S from "./styled";
import image from "../../images/bg-main-desktop.png";

export const BackgroundCards: FC = () => {
  return (
    <S.BackgroundContainer style={{ backgroundImage: `url(${image})` }}>
      <S.Lol>
        <FaceCard />
        <BackCard />
      </S.Lol>
    </S.BackgroundContainer>
  );
};
