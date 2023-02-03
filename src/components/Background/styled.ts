import styled from '@emotion/styled';

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 25px;
  height: 100%;

  @media only screen and (max-width: 1240px) {
    flex-direction: column-reverse;
    gap: 0;
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(333deg, rgba(2,0,36,1) 10%, rgba(46,9,121,1) 49%, rgba(231,0,255,1) 85%);
    width: 30%;
    height: 100%;
    z-index: -1;

    @media only screen and (max-width: 1240px) {
      background: linear-gradient(333deg, rgba(6,3,65,1) 32%, rgba(46,9,121,1) 60%, rgba(231,0,255,1) 99%);
      width: 100%;
      height: 35%;
    }
  }
`;
