import React, { Component } from 'react';
import { HeaderWrapper, Block, ListGroup, ListGroupItem, Detail, DetailBlock, DetailItemBlock, DetailItem, ListGroupHeaderItem, Advertise, ListBlock} from './HomePageStyle';
import advertise1 from '../../images/advertising/1.jpg';
import advertise2 from '../../images/advertising/2.jpg';
import advertise3 from '../../images/advertising/3.jpg';
import img1 from '../../images/pic/1.jpg';
import img2 from '../../images/pic/2.jpg';
import img3 from '../../images/pic/3.jpg';
import img4 from '../../images/pic/4.jpg';

export default class HomePage extends Component {
    constructor(props) {
        super();
        this.state = {
            count: 0,
            imgAdvertiselist: [advertise1, advertise2, advertise3],
            imgBookList: [img1, img2, img3, img4]
        };
    }

    componentDidMount() {
        // this.interval = setInterval(this.changeImage.bind(this), 3000);
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
                                <DetailBlock>
                                    <DetailItemBlock><DetailItem link="/">藝術理論</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>建築藝術</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>公益美術</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>鑒賞收藏</DetailItem></DetailItemBlock>
                                </DetailBlock>
                                <DetailBlock>
                                    <DetailItemBlock><DetailItem>書法</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>攝影</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>音樂</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>舞蹈</DetailItem></DetailItemBlock>
                                </DetailBlock>
                            </Detail>
                        </ListGroupItem>
                        <ListGroupItem style={{cursor: "pointer"}}>
                            少兒
                            <Detail>
                                <DetailBlock>
                                    <DetailItemBlock><DetailItem>幼兒啟蒙</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>兒童文學</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>兒童繪本</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>少兒英文</DetailItem></DetailItemBlock>
                                </DetailBlock>
                                <DetailBlock>
                                    <DetailItemBlock><DetailItem>智力遊戲</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>繪畫書法</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>科普百科</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>嬰兒讀物</DetailItem></DetailItemBlock>
                                </DetailBlock>
                            </Detail>
                        </ListGroupItem>
                        <ListGroupItem style={{cursor: "pointer"}}>
                            人文社科
                            <Detail>
                                <DetailBlock>
                                    <DetailItemBlock><DetailItem>世界文化</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>文化理論</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>神秘現象</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>文化評述</DetailItem></DetailItemBlock>
                                </DetailBlock>
                                <DetailBlock>
                                    <DetailItemBlock><DetailItem>政治/軍事</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>法律事務</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>法律法規</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>新聞傳播</DetailItem></DetailItemBlock>
                                </DetailBlock>
                            </Detail>
                        </ListGroupItem>
                        <ListGroupItem style={{cursor: "pointer"}}>
                            健康生活
                            <Detail>
                                <DetailBlock>
                                    <DetailItemBlock><DetailItem>遊戲攻略</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>旅遊隨筆</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>飲食文化</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>餐飲指南</DetailItem></DetailItemBlock>
                                </DetailBlock>
                                <DetailBlock>
                                    <DetailItemBlock><DetailItem>服裝搭配</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>減肥/瘦身</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>體育運動</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>生活竅門</DetailItem></DetailItemBlock>
                                </DetailBlock>
                            </Detail>
                        </ListGroupItem>
                        <ListGroupItem style={{cursor: "pointer"}}>
                            期刊雜誌
                            <Detail>
                                <DetailBlock>
                                    <DetailItemBlock><DetailItem>生活休閒</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>時尚美妝</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>旅遊地理</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>健康美食</DetailItem></DetailItemBlock>
                                </DetailBlock>
                                <DetailBlock>
                                    <DetailItemBlock><DetailItem>母嬰育兒</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>社會人學</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>科普期刊</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>文學文摘</DetailItem></DetailItemBlock>
                                </DetailBlock>
                            </Detail>
                        </ListGroupItem>
                        <ListGroupItem style={{cursor: "pointer"}}>
                            經營勵志
                            <Detail>
                                <DetailBlock>
                                    <DetailItemBlock><DetailItem>貿易政策</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>國際經濟</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>通俗讀物</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>市場/營銷</DetailItem></DetailItemBlock>
                                </DetailBlock>
                                <DetailBlock>
                                    <DetailItemBlock><DetailItem>金融/投資</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>人生/哲學</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>名人勵志</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>情商/情緒管理</DetailItem></DetailItemBlock>
                                </DetailBlock>
                            </Detail>
                        </ListGroupItem>
                        <ListGroupItem style={{cursor: "pointer"}}>
                            考試教育
                            <Detail>
                                <DetailBlock>
                                    <DetailItemBlock><DetailItem>英文讀物</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>雅思</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>托福</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>文學鑒賞</DetailItem></DetailItemBlock>
                                </DetailBlock>
                                <DetailBlock>
                                    <DetailItemBlock><DetailItem>外文考試</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>研究生/本科/專科</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>漢語</DetailItem></DetailItemBlock>
                                    <DetailItemBlock><DetailItem>百科全書</DetailItem></DetailItemBlock>
                                </DetailBlock>
                            </Detail>
                        </ListGroupItem>
                    </ListGroup>
                    <Advertise>
                        <img src={this.state.imgAdvertiselist[this.state.count]} alt="" style={{height:"100%", width:"100%"}}></img>
                    </Advertise>
                </Block>
                <Block>
                    <div style={{display: "block"}}>文學藝術 / 更多</div>
                </Block>
                <ListBlock style={{height:"140px"}}>
                    <span id="" class="" style={{height:"140px", width:"200px", display:"block", float: "left"}} >
                        <img src={this.state.imgBookList[0]} alt="" style={{maxHeight:"100%", maxWidth:"100%", marginLeft:"0px"}}></img>
                    </span>
                    <span id="" class="" style={{height:"140px", width:"200px", display:"block", float: "left"}}>
                        <img src={this.state.imgBookList[1]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                    </span>
                    <span id="" class="" style={{height:"140px", width:"200px", display:"block", float: "left"}}>
                        <img src={this.state.imgBookList[2]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                    </span>
                    <span id="" class="" style={{height:"140px", width:"200px", display:"block", float: "left"}}>
                        <img src={this.state.imgBookList[3]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                    </span>
                    <span id="" class="" style={{height:"140px", width:"200px", display:"block", float: "left"}} >
                        <img src={this.state.imgBookList[0]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                    </span>
                    <span id="" class="" style={{height:"140px", width:"200px", display:"block", float: "left"}}>
                        <img src={this.state.imgBookList[1]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                    </span>
                </ListBlock>
                    
                <Block>
                    <div>少兒 / 更多</div>
                </Block>
                <ListBlock style={{height:"140px"}}>
                    <span id="" class="" style={{height:"140px", width:"200px", display:"block", float: "left"}} >
                        <img src={this.state.imgBookList[0]} alt="" style={{maxHeight:"100%", maxWidth:"100%", marginLeft:"0px"}}></img>
                    </span>
                    <span id="" class="" style={{height:"140px", width:"200px", display:"block", float: "left"}}>
                        <img src={this.state.imgBookList[1]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                    </span>
                    <span id="" class="" style={{height:"140px", width:"200px", display:"block", float: "left"}}>
                        <img src={this.state.imgBookList[2]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                    </span>
                    <span id="" class="" style={{height:"140px", width:"200px", display:"block", float: "left"}}>
                        <img src={this.state.imgBookList[3]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                    </span>
                    <span id="" class="" style={{height:"140px", width:"200px", display:"block", float: "left"}} >
                        <img src={this.state.imgBookList[0]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                    </span>
                    <span id="" class="" style={{height:"140px", width:"200px", display:"block", float: "left"}}>
                        <img src={this.state.imgBookList[1]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                    </span>
                </ListBlock>
                <Block>
                    <div>人文社科 / 更多</div>
                </Block>
                <ListBlock style={{height:"140px"}}>
                    <span id="" class="" style={{height:"140px", width:"200px", display:"block", float: "left"}} >
                        <img src={this.state.imgBookList[0]} alt="" style={{maxHeight:"100%", maxWidth:"100%", marginLeft:"0px"}}></img>
                    </span>
                    <span id="" class="" style={{height:"140px", width:"200px", display:"block", float: "left"}}>
                        <img src={this.state.imgBookList[1]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                    </span>
                    <span id="" class="" style={{height:"140px", width:"200px", display:"block", float: "left"}}>
                        <img src={this.state.imgBookList[2]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                    </span>
                    <span id="" class="" style={{height:"140px", width:"200px", display:"block", float: "left"}}>
                        <img src={this.state.imgBookList[3]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                    </span>
                    <span id="" class="" style={{height:"140px", width:"200px", display:"block", float: "left"}} >
                        <img src={this.state.imgBookList[0]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                    </span>
                    <span id="" class="" style={{height:"140px", width:"200px", display:"block", float: "left"}}>
                        <img src={this.state.imgBookList[1]} alt="" style={{maxHeight:"100%", maxWidth:"100%", margin:"0px"}}></img>
                    </span>
                </ListBlock>
            </HeaderWrapper>
        )
    }

    changeImage() {
        let index = this.state.count + 1;
        
        if(index > 2) {
            index = 0;
        }
        console.log(index);
        this.setState(() => ({
            count: index
        }));
    }
}
