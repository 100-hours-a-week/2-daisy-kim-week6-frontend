import styled from 'styled-components';

const gray = '#d9d9d9';

export const UserInfo = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;
export const UserImg = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 1.125rem;
  background-color: ${gray};
`;
export const UserName = styled.div`
  font-size: 0.9375rem;
  font-weight: 700;
`;
export const Date = styled.div`
  font-size: 0.875rem;
  margin-left: 0.2rem;
`;
