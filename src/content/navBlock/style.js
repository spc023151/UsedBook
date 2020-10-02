import React from 'react';
import styled from 'styled-components';

const Link = ({ className, link, children }) => (
    <a className={className} href={link}>
      {children}
    </a>
);

export const NavHeaderWrapper = styled.div`
    position: relative;
    height: 26px;
    background: black;
`;

export const Nav = styled.div`
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    // background: green;
`

export const NavItem = styled.div`
    padding: 0 15px;
    transition: 250ms;
    list-style: none;
    // padding-inline-start: 0;
    &.left {
        float: left;
    }
    &.right {
        float: right;
    }
`;

export const Item = styled(Link)`
    line-height: 26px;
    font-size: 15px;
    text-decoration: none;
    color: orange;
    align-items: center;
    display: flex;
`;