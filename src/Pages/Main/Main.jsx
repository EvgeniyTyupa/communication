import React, { useEffect, useState } from 'react';
import classes from './Main.module.css';

import { useTranslation } from "react-i18next";
import { Button } from '@material-ui/core';

//IMAGES
import headerLeft from '../../Assets/header-left.svg';
import headerRight from '../../Assets/header-right.svg';
import cationLeft from '../../Assets/cation-left.svg';
import cationRight from '../../Assets/cation-right.svg';
import cation from '../../Assets/cation.svg';
import dotsLeft from '../../Assets/dots-left.svg';
import cha1 from '../../Assets/cha1.svg';
import cha2 from '../../Assets/cha2.svg';
import chaRight from '../../Assets/cha-right.svg';
import hands from '../../Assets/hands.jpg';
import { programDraft } from '../../Assets/programDraft.js';
import trenerLeft from '../../Assets/trenerLeft.svg';
import trenerRight from '../../Assets/trenerRight.svg';
import trener1 from '../../Assets/trener1.jpg';
import trener2 from '../../Assets/trener2.jpg';
import arrowDown from '../../Assets/arrow-down.svg';
import priceLeft from '../../Assets/price-left.svg';
import priceRight from '../../Assets/price-right.svg';

const Main = (props) => {
    const { t, i18n } = useTranslation();

    const [isScrolledNav, setIsScrolledNav] = useState(false);

    const [isOpenOneTrener, setIsOpenOneTrener] = useState(false);
    const [isOpenSecondTrener, setIsOpenSecondTrener] = useState(false);

    const handleScroll = () => {
        
        if(window.scrollY > 150){
            setIsScrolledNav(true);
        }else{
            setIsScrolledNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return function cleanup(){
            window.removeEventListener('scroll', handleScroll);
        }
    },[]);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    return(
        <div className={classes.main}>
            <div className={classes.lang + " " + (isScrolledNav ? classes.scrolledNav : "")}>
                <Button onClick={()=>{changeLanguage("ru")}}>RU</Button>
                <Button onClick={()=>{changeLanguage("ua")}}>UA</Button>
            </div>
            <div className={classes.home}>
                <img src={headerLeft} className={classes.headerLeft}/>
                <img src={headerRight} className={classes.headerRight}/>
                <h1>{t("home.title")}</h1>
                <span>{t("home.date")}</span>
                <div className={classes.sub}>
                    <p>{t("home.sub")}</p>
                    <div className={classes.words}>
                        <p>{t("home.govori")}</p>
                        <p className={classes.vsegda}>{t("home.vsegda")}</p>
                        <p>{t("home.sluwai")}</p>
                    </div>
                </div>
            </div>
            <div className={classes.cation}>
                <img src={cationLeft} className={classes.cationLeft}/>
                <img src={cationRight} className={classes.cationRight}/>
                <div className={classes.cationInfo}>
                    <div className={classes.cationInfoContainer}>
                        <h2>{t("cation.title")}</h2>
                        <span>{t("cation.one")}</span>
                        <span>{t("cation.two")}</span>
                        <span>{t("cation.three")}</span>
                        <span>{t("cation.four")}</span>
                        <span>{t("cation.five")}</span>
                    </div>
                    <img src={cation}/>
                </div>
                <Button className={classes.registerBut}>{t("register")}</Button>
            </div>
            <div className={classes.chat}>
                <img src={dotsLeft} className={classes.chaLeft}/>
                <img src={chaRight} className={classes.chaRight}/>
                <div className={classes.chatImages}>
                    <img src={cha1}/>
                    <img src={cha2}/>
                </div>
                <div className={classes.chatContent}>
                    <h2>{t("chat.title")}</h2>
                    <h2>{t("chat.titleOne")}</h2>
                    <div className={classes.chatSub}>
                        <p>{t("chat.one")} <span>{t("chat.oneBlack")}</span></p>
                        <p>{t("chat.two")}</p>
                        <p>{t("chat.three")} <span>{t("chat.threeBlack")}</span></p>
                        <p>{t("chat.four")}</p>
                        <p>{t("chat.five")} <span>{t("chat.fiveBlack")}</span></p>
                        <p>{t("chat.six")}</p>
                        <p><span>{t("chat.sevenBlack")}</span></p>
                    </div>
                </div>
            </div>
            <div className={classes.attention}>
                <p>{t("attention.one")}</p>
                <p>{t("attention.two")}</p>
                <p className={classes.attentionBlack}>{t("attention.three")}</p>
                <p>{t("attention.four")}</p>
                <p><strong>{t("attention.five")}</strong></p>
            </div>
            <Button className={classes.registerBut}>{t("register")}</Button>
            <div className={classes.who}>
                <h2>{t("who.title")}</h2>
                <div className={classes.whoContainer}>
                    <div className={classes.whoText}>
                        <div className={classes.whoPoint}>
                            <span className={classes.for}>Для</span>
                            <p>{t("who.1")}</p>
                        </div>
                        <div className={classes.whoPoint}>
                            <span className={classes.for}>Для</span>
                            <p>{t("who.2")}</p>
                        </div>
                        <div className={classes.whoPoint}>
                            <span className={classes.for}>Для</span>
                            <p>{t("who.1")}</p>
                        </div>
                        <div className={classes.whoPoint}>
                            <span className={classes.for}>Для</span>
                            <p>{t("who.3")}</p>
                        </div>
                        <div className={classes.whoPoint}>
                            <span className={classes.for}>Для</span>
                            <p>{t("who.4")}</p>
                        </div>
                        <div className={classes.whoPoint}>
                            <span className={classes.for}>Для</span>
                            <p>{t("who.5")}</p>
                        </div>
                        <div className={classes.whoPoint}>
                            <span className={classes.for}>Для</span>
                            <p>{t("who.6")}</p>
                        </div>
                        <div className={classes.whoPoint}>
                            <span className={classes.for}>Для</span>
                            <p>{t("who.7")}</p>
                        </div>
                        <div className={classes.whoPoint}>
                            <span className={classes.for}>Для</span>
                            <p>{t("who.8")}</p>
                        </div>
                        <div className={classes.whoPoint}>
                            <span className={classes.for}>Для</span>
                            <p>{t("who.9")}</p>
                        </div>
                        <div className={classes.whoPoint}>
                            <span className={classes.for}>Для</span>
                            <p>{t("who.10")}</p>
                        </div>
                        <p className={classes.forAll}>{t("who.11")}</p>
                    </div>
                    <img src={hands}/>
                </div>
                <div className={classes.program}>
                    <h2>{t("program.title")}</h2>
                    <div className={classes.blocks}>
                        <div className={classes.blockItem + " " + classes.itemGreen + " " + classes.blockTop}>
                            <label>1</label>
                            {programDraft}
                            <h4>{t("program.one.title")}</h4>
                            <ul>
                                <li>{t("program.one.one")}</li>
                                <li>{t("program.one.two")}</li>
                                <li>{t("program.one.three")}</li>
                            </ul>
                        </div>
                        <div className={classes.blockItem + " " + classes.itemOrange + " " + classes.blockTop}>
                            <label>2</label>
                            {programDraft}
                            <h4>{t("program.two.title")}</h4>
                            <ul>
                                <li>{t("program.two.one")}</li>
                                <li>{t("program.two.two")}</li>
                                <li>{t("program.two.three")}</li>
                                <li>{t("program.two.four")}</li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.blocks}>
                        <div className={classes.blockItem + " " + classes.itemOrange + " " + classes.blockBot}>
                            <label>3</label>
                            {programDraft}
                            <h4>{t("program.three.title")}</h4>
                            <ul>
                                <li>{t("program.three.one")}</li>
                                <li>{t("program.three.two")}</li>
                                <li>{t("program.three.three")}</li>
                                <li>{t("program.three.four")}</li>
                            </ul>
                        </div>
                        <div className={classes.blockItem + " " + classes.itemGreen + " " + classes.blockBot}>
                            <label>4</label>
                            {programDraft}
                            <h4>{t("program.four.title")}</h4>
                            <ul>
                                <li>{t("program.four.one")}</li>
                                <li>{t("program.four.two")}</li>
                                <li>{t("program.four.three")}</li>
                                <li>{t("program.four.four")}</li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.blocks}>
                        <div className={classes.blockItem + " " + classes.itemGreen + " " + classes.blockTop}>
                            <label>5</label>
                            {programDraft}
                            <h4>{t("program.five.title")}</h4>
                            <ul>
                                <li>{t("program.five.one")}</li>
                                <li>{t("program.five.two")}</li>
                                <li>{t("program.five.three")}</li>
                                <li>{t("program.five.four")}</li>
                            </ul>
                        </div>
                        <div className={classes.blockItem + " " + classes.itemOrange + " " + classes.blockTop}>
                            <label>6</label>
                            {programDraft}
                            <h4>{t("program.six.title")}</h4>
                            <ul>
                                <li>{t("program.six.one")}</li>
                                <li>{t("program.six.two")}</li>
                                <li>{t("program.six.three")}</li>
                                <li>{t("program.six.four")}</li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.blocks}>
                        <div className={classes.blockItem + " " + classes.itemOrange + " " + classes.blockBot}>
                            <label>7</label>
                            {programDraft}
                            <h4>{t("program.seven.title")}</h4>
                            <ul>
                                <li>{t("program.seven.one")}</li>
                                <li>{t("program.seven.two")}</li>
                                <li>{t("program.seven.three")}</li>
                                <li>{t("program.seven.four")}</li>
                            </ul>
                        </div>
                        <div className={classes.blockItem + " " + classes.itemGreen + " " + classes.blockBot}>
                            <label>8</label>
                            {programDraft}
                            <h4>{t("program.eight.title")}</h4>
                            <ul>
                                <li>{t("program.eight.one")}</li>
                                <li>{t("program.eight.two")}</li>
                                <li>{t("program.eight.three")}</li>
                                <li>{t("program.eight.four")}</li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.blocks}>
                        <div className={classes.blockItem + " " + classes.itemGreen + " " + classes.blockTop}>
                            <label>9</label>
                            {programDraft}
                            <h4>{t("program.nine.title")}</h4>
                            <ul>
                                <li>{t("program.nine.one")}</li>
                            </ul>
                        </div>
                        <div className={classes.blockItem + " " + classes.itemOrange + " " + classes.blockTop}>
                            <label>10</label>
                            {programDraft}
                            <h4>{t("program.ten.title")}</h4>
                            <ul>
                                <li>{t("program.ten.one")}</li>
                                <li>{t("program.ten.two")}</li>
                                <li>{t("program.ten.three")}</li>
                                <li>{t("program.ten.four")}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={classes.programEnd}>
                    <p>{t("program.end.text")}</p>
                    <Button className={classes.registerBut}>{t("register")}</Button>
                    <div className={classes.whiteSpace}></div>
                </div>
            </div>
            <div className={classes.treners}>
                <img src={trenerLeft} className={classes.trenerLeft}/>
                <img src={trenerRight} className={classes.trenerRight}/>
                <div className={classes.trenersContainer}>
                    <h2>{t("treners.title")}</h2>
                    <div className={classes.trenersBlock}>
                        <div className={classes.trener}>
                            <img src={trener1}/>
                            <h3>{t("treners.one.title")}</h3>
                            <Button onClick={()=>{setIsOpenOneTrener(!isOpenOneTrener)}}>
                                <img src={arrowDown}/>
                            </Button>
                            <div className={classes.openBlock + " " + (isOpenOneTrener ? classes.open : "")}>
                                <p>{t("treners.one.one")}</p>
                                <p>{t("treners.one.two")}</p>
                                <p>{t("treners.one.three")}</p>
                                <p>{t("treners.one.four")}</p>
                                <p>{t("treners.one.five")}</p>
                                <p>{t("treners.one.six")}</p>
                                <p>{t("treners.one.seven")}</p>
                                <p>{t("treners.one.eight")}</p>
                            </div>
                        </div>
                        <div className={classes.trener}>
                            <img src={trener2}/>
                        
                            <h3>{t("treners.two.title")}</h3>
                            <Button onClick={()=>{setIsOpenSecondTrener(!isOpenSecondTrener)}}>
                                <img src={arrowDown}/>
                            </Button>
                            <div className={classes.openBlock + " " + (isOpenSecondTrener ? classes.open : "")}>
                                <p>{t("treners.two.one")}</p>
                                <p>{t("treners.two.two")}</p>
                                <p>{t("treners.two.three")}</p>
                                <p>{t("treners.two.four")}</p>
                                <p>{t("treners.two.five")}</p>
                                <p>{t("treners.two.six")}</p>
                                <p>{t("treners.two.seven")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.price}>
                <div className={classes.priceContainer}>
                    <h2>{t("price.title")}</h2>
                    <div className={classes.pricesContainer}>
                        <div className={classes.priceSide}>
                            <h3>{t("price.early.title")}</h3>
                            <div className={classes.priceSideText}>
                                <span>{t("price.early.date")}</span>
                                <span>{t("price.early.price")}</span>
                            </div>
                        </div>
                        <div className={classes.priceSide}>
                            <h3>{t("price.full.title")}</h3>
                            <div className={classes.priceSideText}>
                                <span>{t("price.full.date")}</span>
                                <span>{t("price.full.price")}</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Main;