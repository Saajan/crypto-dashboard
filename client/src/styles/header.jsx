import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    flex-basis: 100%;
    grid-area: header;
    height: 70px;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    position: relative;
`;

export const Heading = styled.h3`
    color:#fff;
    margin:0px;
`;

export const User = styled.h3`
    margin:0px;
    text-transform:capitalize;
`;

export const Logo = styled.div`
    display: flex;
    flex: 0 0 150px;
    height: 70px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0;
    color: #fff;
    background-color: #153E5C;
    font-size: 1rem;
  `;

export const Toolbar = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
`;


