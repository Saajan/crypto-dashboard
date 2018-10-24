import styled from 'styled-components';


export const Navbar = styled.div`
    flex: 0 0 250px;
    grid-area: nav;
    background-image: linear-gradient(to right, #f4faff,#e6f6ff);
    background-color: #313541;
`;

export const Menu = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export const MenuItem = styled.li`
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
`;

export const MenuLink = styled.span`
    display: block;
    padding: 1rem 2rem;
    color: #76808f;
    text-decoration: none;
    &:hover,
    &:focus {
      color: #fff;
      background-color: #1f222d;
    }
`;