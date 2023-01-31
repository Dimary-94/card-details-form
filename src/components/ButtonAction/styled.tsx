import styled from '@emotion/styled';

type Disableable = Record<'disabled', boolean | undefined>;

export const Button = styled.button<Disableable>`
  &.submit-button {
    display: block;
    font-size: 18px;
    border: 0px;
    border-radius: 7px;
    padding: 15px;
    width: 100%;

    ${({ disabled }) =>
    !disabled &&
    `
      color: #fff;
      background: rgba(33, 9, 47, 1);
      outline: unset;

      &:hover {
        color: rgba(33, 9, 47, 1);
        cursor: pointer;
        background: #fff;
        outline: 2px solid rgba(33, 9, 47, 1);
      }`
  };
  }
`;