import { FC } from "react";
import ButtonAction from "../ButtonAction/ButtonAction";
import { Description } from "../Description";
import * as S from "./styled";

export const Complete: FC = () => {
  const handleSubmit = () => {
    console.log('test');
  }

  return (
    <S.TextWrapper>
      <Description />
      <ButtonAction
        id={'continue'}
        text={'Continue'}
        className={'submit-button'}
        handler={handleSubmit}
      />
    </S.TextWrapper>
  );
};
