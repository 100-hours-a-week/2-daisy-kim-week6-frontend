import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';

const backgroundColor = '#F4F5F7';

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: #00000040;
  position: fixed;
  top: 0px;
  background-color: ${backgroundColor};
`;
export const Container = styled.div`
  width: 37rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
`;
export const Back = styled(IoIosArrowBack)`
  font-size: 1.6rem;
  cursor: pointer;
`;
export const Title = styled.div`
  font-size: 2rem;
`;
export const MyPage = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background-color: #d9d9d9;
  text-align: center;
  line-height: 2rem;
`;
export const Blank = styled.div`
  width: 2rem;
`;
