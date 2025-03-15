import styled from 'styled-components';

const line = '#00000040';
const lightPurple = '#ACA0EB';

export const SubmitEdit = styled.div`
  height: 2rem;
  background-color: ${lightPurple};
  width: 22rem;
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 0.25rem;
  line-height: 2rem;
  text-align: center;
  &:hover {
    box-shadow: 0px 0px 0.5rem ${line};
  }
  cursor: pointer;
`;
