import styled from 'styled-components';

const lightPurple = '#ACA0EB';

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
export const Button = styled.div`
  width: 3rem;
  height: 1.625rem;
  border-radius: 0.5rem;
  border: 1px solid ${lightPurple};
  line-height: 1.625rem;
  text-align: center;
  font-size: 0.9375rem;
  font-weight: 400;
  cursor: pointer;
`;
