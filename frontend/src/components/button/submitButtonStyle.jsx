import styled from 'styled-components';

const lightPurple = '#ACA0EB';
const customPurple = '#7F6AEE';
const shadow = '#00000040';

export const SubmitEdit = styled.div.attrs(({ isDisable }) => ({
  'aria-disabled': isDisable,
}))`
  height: 2rem;
  background-color: ${({ isDisable }) =>
    isDisable ? lightPurple : customPurple};
  width: 22rem;
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 0.25rem;
  line-height: 2rem;
  text-align: center;
  &:hover {
    box-shadow: ${({ isDisable }) =>
      isDisable ? `none` : `0px 0px 0.5rem ${shadow}`};
  }
  cursor: pointer;
`;
