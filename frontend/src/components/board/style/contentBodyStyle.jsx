import styled from 'styled-components';

const gray = '#d9d9d9';
const lightPurple = '#ACA0EB';

export const ContentBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #00000040;
  gap: 0.8rem;
`;
export const ContentImg = styled.img`
  background-color: ${gray};
  max-height: 22.75rem;
`;
export const ContentText = styled.div`
  font-size: 0.9375rem;
`;
export const CountInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  gap: 1rem;
`;
export const CountInfo = styled.div`
  text-align: center;
  background-color: ${gray};
  width: 6.75rem;
  height: 3.64rem;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  padding-top: 0.6rem;
`;
export const LikeButton = styled(CountInfo)`
  cursor: pointer;
  background-color: ${({ isLiked }) => (isLiked ? lightPurple : gray)};
  &:hover {
    transform: scale(0.96);
    transition: transform 0.2s ease;
  }
`;
