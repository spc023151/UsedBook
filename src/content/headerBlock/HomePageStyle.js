import styled from 'styled-components';

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

export const Detail = styled.div`
    height: 250px;
    width: 600px;
    background: orange;
    position: absolute;
    top: 0px;
    left: 565px;
    text-align: left;
    display: none;
    cursor: auto;
`;

export const ListGroupHeaderItem = styled.div`
    height: 40px;
    line-height: 40px;
    background-color: black;
    color: white;
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
    // background-color: orange;
`;


export const Menu = styled.div`
//     background-color: transparent;
//     height: 35px;
//     // align-items: center;
//     float: left;
//     margin: 0 auto;
//     display: table-column-group;
//     // border: 1px solid;
//     // position: absolute;
//     cursor: pointer;
`;

export const DropdownMenu = styled.div`
//     // border: 1px solid #fff;
//     // color:white;
//     position: absolute;
//     min-width: 160px;
//     box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//     z-index: 1;
`;