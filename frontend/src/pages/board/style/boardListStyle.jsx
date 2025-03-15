import styled from 'styled-components';

const lightPurple = '#ACA0EB';

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6rem 0 4rem 0;
  gap: 1rem;
`;
export const Title = styled.div`
  text-align: center;
  font-size: 1.5rem;
`;
export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 37rem;
  gap: 1rem;
  align-items: flex-end;
`;
export const PostButton = styled.div`
  width: 8.5rem;
  height: 2.5rem;
  background-color: ${lightPurple};
  line-height: 2.5rem;
  text-align: center;
  border-radius: 1rem;
  font-weight: 700;
  color: white;
  font-size: 1rem;
  cursor: pointer;
`;
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
