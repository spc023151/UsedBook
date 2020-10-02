import React, { Component } from 'react';
import { NavHeaderWrapper, Nav, NavItem, Item } from './style.js';

export default class NavHeader extends Component {
    render() {
        return (
            <NavHeaderWrapper>
                <Nav>
                    <NavItem className="left" style={{padding: '0px 15px 0px 0px' }}>
                        <Item link="/customer-service">客服</Item>
                    </NavItem>
                    <NavItem className="left">
                        <Item>手機版</Item>
                    </NavItem>
                    <NavItem className="right">
                        <Item link="/personal">個人中心</Item>
                    </NavItem>
                    <NavItem className="right">
                        <Item link="/register">註冊</Item>
                    </NavItem>
                    <NavItem className="right">
                        <Item link="/login">登錄</Item>
                    </NavItem>
                </Nav>
            </NavHeaderWrapper>
        )
    }
}