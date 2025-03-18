import styled from 'styled-components';

const lightPurple = '#ACA0EB';
const customPurple = '#7F6AEE';
const shadow = '#00000040';

export const SubmitEdit = styled.div`
  height: 2rem;
  background-color: ${({ $isDisabled }) =>
    $isDisabled ? lightPurple : customPurple};
  width: 22rem;
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 0.25rem;
  line-height: 2rem;
  text-align: center;
  &:hover {
    box-shadow: ${({ $isDisabled }) =>
      $isDisabled ? `none` : `0px 0px 0.5rem ${shadow}`};
  }
  cursor: pointer;
`;
