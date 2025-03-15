import styled from 'styled-components';

const lightPurple = '#ACA0EB';
const line = '#00000040';

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
export const LoginButton = styled.div`
  height: 2rem;
  border-radius: 0.25rem;
  width: 22rem;
  text-align: center;
  background-color: ${lightPurple};
  color: white;
  font-size: 0.875rem;
  line-height: 2rem;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 0.5rem ${line};
  }
`;
export const GotoSignup = styled.div`
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
