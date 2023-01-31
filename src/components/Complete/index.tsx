import { FC } from "react";
import { Description } from "../Description";
import * as S from "./styled";
import { Props } from "./types";

export const Complete: FC<React.PropsWithChildren<Props>> = ({
  value,
}) => {
  return (
    <S.TextWrapper>
      <Description />
    </S.TextWrapper>
  );
};
