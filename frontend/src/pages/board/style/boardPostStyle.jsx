import styled from 'styled-components';

const line = '#00000040';
const lightPurple = '#ACA0EB';
const gray = '#d9d9d9';

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
  align-items: center;
`;
export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-self: center;
`;
export const InputWrapper = styled.div`
  width: 37rem;
`;
export const TitleText = styled.div`
  margin: 1rem 1.5rem;
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
  padding: 0;
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
  height: 1rem;
`;
export const InputContent = styled.textarea`
  background-color: transparent;
  border: none;
  margin: 1rem 1.5rem;
  padding: 0;
  width: 34rem;
  min-height: 14.25rem;
  max-height: 17.25rem;
  resize: none;
  outline-color: ${lightPurple};
  font-size: 0.9375rem;
`;

export const InputImgWrapper = styled.div`
  display: flex;
  margin: 0rem 1.5rem;
  gap: 1rem;
  align-items: center;
`;
export const CustomLabel = styled.label`
  background-color: ${gray};
  height: 1.75rem;
  width: 4.25rem;
  border-radius: 0.25rem;
  border: 1px solid black;
  font-size: 0.875rem;
  text-align: center;
  line-height: 1.75rem;
  cursor: pointer;
`;
export const ImgSpan = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  max-width: 28.75rem;
`;
export const InputImg = styled.input`
  display: none;
`;
