import styled from 'styled-components';

//여기서부터 댓글
export const CommentWrapper = styled.div`
  padding: 2rem 0rem;
  display: flex;
  flex-direction: column;
`;

//댓글 목록
export const CommentList = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const CommentItem = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CommentLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CommentContent = styled.div`
  margin-left: 3.05rem;
  font-size: 0.9375rem;
  max-width: 22.25rem;
`;
