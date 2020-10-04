import styled from 'styled-components';
import React from 'react';

const Link = ({ className, link, children }) => (
    <a className={className} href={link}>
      {children}
    </a>
);

export const HeaderWrapper = styled.div`
    position: relative;
    height: 100%;
`;

export const Block = styled.div`
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    margin-top: 50px;
`;

export const ListGroup = styled.div`
    background-color: transparent;
    height: 100%;
    width: 250px;
    border: solid 1px black;
    text-align: center;
    padding: 0px;
`;

export const ListGroupHeaderItem = styled.div`
    height: 40px;
    line-height: 40px;
    background-color: black;
    color: white;
`;

export const Detail = styled.div`
    height: 250px;
    width: 600px;
    background: orange;
    position: absolute;
    top: 0px;
    left: 557px;
    text-align: left;
    display: none;
    cursor: auto;
`;

export const DetailBlock = styled.div`
    display: inline-block;
    width: 100%;
    // text-align: center;
`;

export const DetailItemBlock = styled.div`
    display: inline-block;
    width: 150px;
    text-align: center;
`;

export const DetailItem = styled(Link)`
    font-size: 15px;
`;

export const ListGroupItem = styled.div`
    height: 40px;
    line-height: 40px;

    &:hover {
        background-color: orange;
    }
    &:hover ${Detail} {
        display: block;
    }
`;

export const Advertise = styled.div`
    margin-left: 20px;
    width: 100%;
    height: 322px;
`;

export const ListBlock = styled(Block)`
    margin-top: 10px;
    display: block;
`;


