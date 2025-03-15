import styled from 'styled-components';

const lightPurple = '#ACA0EB';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 22rem;
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 0.9375rem;
`;
export const Input = styled.input`
  height: 2rem;
  border-radius: 0.25rem;
  border-width: 1px;
  font-size: 0.875rem;
  background-color: transparent;
  outline-color: ${lightPurple};
`;
export const Helper = styled.div`
  font-size: 0.75rem;
  color: red;
`;
export const NoInputText = styled.div`
  height: 2rem;
  font-size: 0.875rem;
  line-height: 2rem;
`;

//profileImg.jsx
export const ImgInputWrapper = styled.div`
  height: 9.25rem;
  width: 9.25rem;
  border-radius: 4.625rem;
  font-size: 1.5rem;
  background-color: #d9d9d9;
  align-self: center;
  text-align: center;
  line-height: 9.25rem;
  cursor: pointer;
`;
export const ImgInput = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
  position: absolute;
`;
export const CumstomLabel = styled.label`
  cursor: pointer;
  height: 9.25rem;
  width: 9.25rem;
  border-radius: 4.625rem;
  display: flex;
`;
export const Plus = styled.div`
  width: 9.25rem;
  border-radius: 4.625rem;
`;
export const RealImg = styled.img`
  cursor: pointer;
  display: none;
`;
