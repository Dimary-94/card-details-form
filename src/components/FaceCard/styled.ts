import styled from '@emotion/styled';

export const CardBubbles = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  padding-bottom: 70px;

  &::before {
    content: '';
    display: block;
    width: 50px;
    height: 50px;
    background: white;
    border-radius: 50%;

    @media only screen and (max-width: 1240px) {
      width: 35px;
      height: 35px;
    }
  }
  &::after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid white;

    @media only screen and (max-width: 1240px) {
      width: 10px;
      height: 10px;
    }
  }

  @media only screen and (max-width: 1240px) {
    padding-bottom: 30px;
    gap: 7px;
  }
`;

export const CardDetails = styled.div`
  padding-top: 25px;
  display: flex;
  row-gap: 25px;
  color: white;

  span {
    text-transform: uppercase;
    letter-spacing: 1px;

    @media only screen and (max-width: 1240px) {
      font-size: 10px;
    }
  }

  @media only screen and (max-width: 1240px) {
      padding-top: 15px;
    }
`;

export const CardNumber = styled.span`
  color: white;
  font-size: 28px;
  letter-spacing: 4px;

  @media only screen and (max-width: 1240px) {
    font-size: 20px;
    letter-spacing: 2px;
  }
`;

export const CardCVC = styled.span`
  display: flex;
  align-items: center;
  justify-content: end;
  letter-spacing: 1.5px;
  height: 100%;
  color: white;
  padding: 0 60px;

  @media only screen and (max-width: 1240px) {
    padding: 0 40px;
    font-size: 13px;
  }
`;
