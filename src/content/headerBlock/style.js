import styled from 'styled-components';
import React from 'react';

const Link = ({ className, link, children }) => (
    <a className={className} href={link}>
      {children}
    </a>
);

export const HeaderWrapper = styled.div`
    position: relative;
    height: 50px;
    background: orange;
`;

export const NavBlock = styled.div`
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    align-items: center;
    display: flex;
`;

export const Ui = styled.ul`
    padding: 0 15px;
    transition: 250ms;
    list-style: none;
    
    &:hover {
        background-color: yellow;
    };
`;

export const Li = styled.li`
    line-height: 26px;
    font-size: 15px;
    text-decoration: none;
    color: orange;
    align-items: center;
    display: flex;
`;

export const Item = styled(Link)`
    line-height: 26px;
    font-size: 15px;
    text-decoration: none;
    color: black;
    // color: orange;
    align-items: center;
    display: flex;
`;