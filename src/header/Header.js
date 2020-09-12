import React, {Component} from 'react';
import { HeaderWrapper, Nav, NavItems, NavItem } from './style.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faUser, faKey, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

export default class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Nav>
                    <NavItems>
                        <NavItem className="left" to="/login">
                            <FontAwesomeIcon icon={faUser} />
                            登入/註冊
                        </NavItem>
                        <NavItem className="left" to="/shopping-cart">
                            <FontAwesomeIcon icon={faCartPlus} />
                            購物車
                        </NavItem>
                        <NavItem className="left" to="/personal">
                            <FontAwesomeIcon icon={faKey} />
                            個人中心
                        </NavItem>
                        <NavItem className="left" to="/customer-service">
                            <FontAwesomeIcon icon={faPhoneAlt} />
                            客服
                        </NavItem>
                        <NavItem className="left" to="/app">
                            手機版
                        </NavItem>
                    </NavItems>
                </Nav>
            </HeaderWrapper>
        )
    }
}