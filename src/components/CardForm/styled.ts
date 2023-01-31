import styled from '@emotion/styled';

export const ConfirmButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 0 35px;
`;

export const HeroWrapper = styled.div`
  height: 500px;
  width: 500px;
  border: 2px solid black;
  padding: 40px 50px;
`;

export const Text = styled.div`
  p {
    font-size: 33px;
    font-weight: 700;
    color: #fff;

    &:last-of-type {
      font-size: 16px;
      line-height: 1.7;
      letter-spacing: 0.30px;
      color: #767676;
    }
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 150px;
  width: 100%;
  height: 100%;
`;

export const CardContainer = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  max-width: 450px;
  height: 100%;
  max-height: 250px;

    &:first-of-type {
    max-width: 550px;
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
`;

export const Label = styled.label`
  display: block;
  font-size: 12px;
  padding-bottom: 5px;
  text-transform: uppercase;
  color: #21092F;
`;