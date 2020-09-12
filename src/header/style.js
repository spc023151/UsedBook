import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    background: black;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    // background: green;
    float: right;
`

export const NavItems = styled.ul`
    list-style: none;
    padding-inline-start: 0;
    display: flex;
    align-items: center;
`;

export const NavItem = styled(Link)`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: orange;
    cursor: pointer;
    transition: 250ms;
    text-decoration: none;
    &.left {
        float: left;
    }
`