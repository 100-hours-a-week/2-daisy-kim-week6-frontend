import styled from 'styled-components';

const background = '#00000040';
const okColor = '#C4A5FA';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: ${background};
  position: fixed;
  top: 0;
  left: 0;
`;
export const Container = styled.div`
  background-color: white;
  width: 25.5rem;
  height: 15.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  border-radius: 0.75rem;
`;
export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;
export const Content = styled.div`
  font-size: 1.25rem;
`;
export const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;
export const Cancel = styled.div`
  background-color: black;
  font-size: 1.25rem;
  width: 8rem;
  height: 2.75rem;
  color: white;
  line-height: 2.75rem;
  text-align: center;
  border-radius: 0.75rem;
  cursor: pointer;
`;
export const Ok = styled(Cancel)`
  background-color: ${okColor};
  color: black;
`;
