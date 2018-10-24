import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const FormWrapper = styled.div`
  position:absolute;
  display:flex;
  align-items:center;
  justify-content:center;
  height: calc(100% - 40px);
  width:100%;
`;

export const SmallFormContainer = styled.div`
  min-width:300px;
  width: 400px;
  background-color:#fff;
  padding:30px;
  border-radius:3px;
  animation: 2s ${fadeInAnimation};
  box-shadow: 0px 0px 300px 0px rgba(219,219,219,1);
`;

export const BigFormContainer = styled.div`
  min-width:300px;
  width: 850px;
  background-color:#fff;
  padding:30px;
  border-radius:3px;
  animation: 2s ${fadeInAnimation};
  box-shadow: 0px 0px 300px 0px rgba(219,219,219,1);
`;

export const Logo = styled.img`
  height:80px;
  width:80px;
`;

export const Center = styled.div`
  text-align:center;
  padding:15px;
`;
