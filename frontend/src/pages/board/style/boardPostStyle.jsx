import styled from 'styled-components';

const line = '#00000040';
const lightPurple = '#ACA0EB';

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6rem 0 4rem 0;
`;
export const Container = styled.div`
  width: 37rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-self: center;
`;
export const InputWrapper = styled.div``;
export const TitleText = styled.div`
  margin: 2rem 1.5rem 1rem 1.5rem;
  font-weight: 700;
  font-size: 1rem;
`;
export const InputContainer = styled.div`
  border-top: 1px solid ${line};
  border-bottom: 1px solid ${line};
`;
export const InputTitle = styled.input`
  background-color: transparent;
  border: none;
  margin: 1rem 1.5rem;
  width: 34rem;
  font-weight: 700;
  outline: none;
  font-size: 1rem;
`;
export const HelperText = styled.div`
  font-size: 0.75rem;
  color: red;
  margin: 0rem 1.5rem;
  line-height: 1rem;
`;
export const InputContent = styled.textarea`
  background-color: transparent;
  border: none;
  margin: 1rem 1.5rem;
  width: 34rem;
  height: 17.25rem;
  resize: none;
  outline-color: ${lightPurple};
  font-size: 0.9375rem;
`;
export const InputImg = styled.input`
  margin: 0rem 1.5rem;
`;
export const SubmitButton = styled.div`
  width: 22rem;
  height: 2rem;
  background-color: ${lightPurple};
  color: white;
  border-radius: 0.25rem;
  align-self: center;
  line-height: 2rem;
  text-align: center;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 0.5rem ${line};
  }
`;
