import React, { Component } from 'react';
import { HeaderWrapper, NavBlock, Ui, Li, Item } from './style';

export default class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <NavBlock>
                    <Ui style={{padding: '0px 15px 0px 0px' }}>
                        <Li className="hover"><Item link="/">首頁</Item></Li>
                    </Ui>
                    <Ui>
                        <Li className="hover"><Item link="/shop">書店</Item></Li>
                    </Ui>
                    <Ui>
                        <Li className="hover"><Item link="/newBook">新書</Item></Li>
                    </Ui>
                    <Ui>
                        <Li className="hover"><Item link="/auction">在線拍賣</Item></Li>
                    </Ui>
                    <Ui>
                        <Li className="hover"><Item link="/community">社區</Item></Li>
                    </Ui>
                </NavBlock>
            </HeaderWrapper>
        )
    }
}
