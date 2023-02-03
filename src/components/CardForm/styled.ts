import styled from '@emotion/styled';
import { LoadingButton as MuiLoadingButton } from '@mui/lab';

export const ConfirmButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 0 35px;
`;

export const HeroWrapper = styled.div`
  display: grid;
  align-items: center;
  height: 500px;
  width: 500px;
  padding: 40px 50px;

  .error-text {
    color: red;
  }

  @media only screen and (max-width: 1240px) {
    height: 100%;
    width: 450px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 100%;
  
  h1 {
    text-transform: uppercase;
    font-weight: 300;
    color: #000;
  }

  span {
    color: #9d9d9d;
    padding-bottom: 30px;
    letter-spacing: 1px;
  }

  @media only screen and (max-width: 1240px) {
    width: 450px;
    padding-top: 90px;
    align-self: start;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 120px;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 1240px) {
    grid-template-columns: unset;
  }
`;

export const CardContainer = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  max-width: 450px;
  min-height: 250px;
  max-height: 250px;

  @media only screen and (max-width: 1240px) {
    max-width: 300px;
    min-height: 165px;
    max-height: 165px;

    &:last-of-type {
      margin: 30px 50px 0 0;
    }
  }

  &:first-of-type {
    margin-right: 100px;

    @media only screen and (max-width: 1240px) {
      position: absolute;
      top: 138px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid rgba(	222, 221, 223, 1);
  border-radius: 7px;
  color: #21092F;

  &:focus {
    outline: none;
    border: 2px solid rgba(	33, 9, 47, 0.7);
  }

  &::placeholder {
    color: #dedddf;
  }

  &.error-input {
    border: 2px solid red;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 12px;
  padding-bottom: 5px;
  text-transform: uppercase;
  color: #21092F;
`;

export const LoadingButton = styled(MuiLoadingButton)`
  &.submit-button {
    font-size: 18px;
    width: 100%;
    border: 0px;
    border-radius: 7px;
    text-transform: unset;
    padding: 10px 15px;
    margin-top: 30px;

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