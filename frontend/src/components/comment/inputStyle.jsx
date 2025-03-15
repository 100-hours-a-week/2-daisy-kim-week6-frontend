import styled from 'styled-components';

const line = '#00000040';
const lightPurple = '#ACA0EB';
const purple = '#7a6fee';

export const CommentInputWrapper = styled.div`
  background-color: white;
  width: 37rem;
  border-radius: 1rem;
`;
export const CommentInputContainer = styled.div`
  border-bottom: 1px solid ${line};
`;

export const Input = styled.textarea`
  margin: 1rem;
  border: none;
  outline: none;
  width: 34.75rem;
  height: 5.75rem;
  resize: none;
`;
export const CommentButton = styled.div`
  background-color: ${lightPurple};
  width: 8.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  border-radius: 1rem;
  margin: 0.5rem;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  justify-self: flex-end;
  cursor: pointer;
  &:hover {
    background-color: ${purple};
  }
`;
