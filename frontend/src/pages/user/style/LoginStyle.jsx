import styled from 'styled-components';

const lightPurple = '#ACA0EB';

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;
export const InputWrapper = styled.div`
  width: 37.5rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
export const Title = styled.h2``;
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
    box-shadow: 0px 0px 0.5rem #00000040;
  }
`;
export const GotoSignup = styled.div`
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
