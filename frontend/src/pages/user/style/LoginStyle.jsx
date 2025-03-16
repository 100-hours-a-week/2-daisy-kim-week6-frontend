import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12rem 0 4rem 0;
`;
export const InputWrapper = styled.div`
  width: 37.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
export const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

export const GotoSignup = styled.div`
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
