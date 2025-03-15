import styled from 'styled-components';

const gray = '#d9d9d9';

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 1rem;
  width: 37rem;
  box-shadow: 0.2rem 0.2rem 0.2rem #00000010;
  cursor: pointer;
  &:hover {
    transform: scale(0.98);
    transition: transform 0.2s ease;
  }
`;
export const ItemTop = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #00000040;
  gap: 0.8rem;
`;
export const ItemTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;
export const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
`;
export const ItemCountWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
export const ItemCount = styled.div``;
export const ItemDate = styled.div``;
export const ItemBottom = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 1.5rem;
  align-items: center;
`;
export const ItemUserImg = styled.img`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 1.125rem;
  background-color: ${gray};
  border: none;
`;
export const ItemUserName = styled.div`
  font-size: 0.9375rem;
  font-weight: 700;
`;
