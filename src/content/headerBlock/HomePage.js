import React, { Component } from 'react';
import { HeaderWrapper, Block, ListGroup, ListGroupItem, Detail, ListGroupHeaderItem, Advertise} from './HomePageStyle';
import img1 from '../../images/advertising/1.jpg';
import img2 from '../../images/advertising/2.jpg';

export default class HomePage extends Component {
    constructor(props) {
        super();
        this.state = {
            count: 0,
            imglist: [img1, img2, img1]
        };
    }

    componentDidMount() {
        this.interval = setInterval(this.changeImage.bind(this), 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <HeaderWrapper>
                <Block>
                    <ListGroup>
                        <ListGroupHeaderItem>
                            分類
                        </ListGroupHeaderItem>
                        <ListGroupItem style={{cursor: "pointer"}}>
                            文學藝術
                            <Detail>
                                1
                            </Detail>
                        </ListGroupItem>
                        <ListGroupItem style={{cursor: "pointer"}}>
                            少兒
                            <Detail>
                                2
                            </Detail>
                        </ListGroupItem>
                        <ListGroupItem style={{cursor: "pointer"}}>
                            人文社科
                            <Detail>
                                3
                            </Detail>
                        </ListGroupItem>
                        <ListGroupItem style={{cursor: "pointer"}}>
                            健康生活
                            <Detail>
                                4
                            </Detail>
                        </ListGroupItem>
                        <ListGroupItem style={{cursor: "pointer"}}>
                            期刊雜誌
                            <Detail>
                                5
                            </Detail>
                        </ListGroupItem>
                        <ListGroupItem style={{cursor: "pointer"}}>
                            經營勵志
                            <Detail>
                                6
                            </Detail>
                        </ListGroupItem>
                        <ListGroupItem style={{cursor: "pointer"}}>
                            考試教育
                            <Detail>
                                7
                            </Detail>
                        </ListGroupItem>
                    </ListGroup>
                    <Advertise>
                        <img src={this.state.imglist[this.state.count]} alt="" style={{height:"100%", width:"100%"}}></img>
                    </Advertise>
                </Block>
                <Block>
                    <div>文學藝術 / 更多</div>
                </Block>
                <Block>
                    <div>少兒 / 更多</div>
                </Block>
                <Block>
                    <div>人文社科 / 更多</div>
                </Block>
            </HeaderWrapper>
        )
    }

    changeImage() {
        let index = this.state.count + 1;
        
        if(index > 2) {
            index = 0;
        }
        
        this.setState(() => ({
            count: index
        }));
    }
}
