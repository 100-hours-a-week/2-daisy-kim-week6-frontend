import styled from 'styled-components';

const lightPurple = '#ACA0EB';

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  margin: 12rem 0rem 4rem 0rem;
  flex-direction: column;
  gap: 1rem;
`;
export const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const WithdrawButton = styled.div`
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const EditOk = styled.div`
  width: 6.25rem;
  height: 2.75rem;
  background-color: ${lightPurple};
  color: white;
  border-radius: 2rem;
  font-size: 1.125rem;
  line-height: 2.75rem;
  text-align: center;
  margin-top: 2rem;
`;
