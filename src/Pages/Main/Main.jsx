import React, { useEffect, useMemo, useState } from 'react';
import classes from './Main.module.css';

import { useTranslation } from "react-i18next";
import { Button, makeStyles, TextField } from '@material-ui/core';
import Slider from 'infinite-react-carousel';

import Aos from 'aos';
import 'aos/dist/aos.css';

//IMAGES
import headerLeft from '../../Assets/header-left.svg';
import headerRight from '../../Assets/header-right.svg';
import cationLeft from '../../Assets/cation-left.svg';
import cationRight from '../../Assets/cation-right.svg';
import cation from '../../Assets/cation.svg';
import dotsLeft from '../../Assets/dots-left.svg';
import cha1 from '../../Assets/cha1.svg';
import cha2 from '../../Assets/cha2.svg';
import cha1ua from '../../Assets/cha1-ua.svg';
import cha2ua from '../../Assets/cha2-ua.svg';
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
import bonus1 from '../../Assets/bonus1.svg';
import bonus2 from '../../Assets/bonus2.svg';
import bonus1ua from '../../Assets/bonus1-ua.svg';
import bonus2ua from '../../Assets/bonus2-ua.svg';
import { insta } from '../../Assets/insta.js';
import { fb } from '../../Assets/fb.js';
import { tg } from '../../Assets/tg.js';
import { wb } from '../../Assets/wb.js';
import Register from '../../Components/Register/Register';
import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { setIsRegistered } from '../../Redux/commonReducer';

const useStyles = makeStyles((theme) => ({
    root:{
        '& label.Mui-focused': {
            color: '#01737B'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#01737B' 
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: 0
        }
    }
}));

const Main = (props) => {
    const material = useStyles();
    const history = useHistory();

    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState("ua");

    const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(false);

    const [isScrolledNav, setIsScrolledNav] = useState(false);

    const [isOpenOneTrener, setIsOpenOneTrener] = useState(false);
    const [isOpenSecondTrener, setIsOpenSecondTrener] = useState(false);

    const [userURL, setUserURL] = useState(history.location.href);

    const [subscribeValue, setSubscribeValue] = useState("");

    const handleScroll = () => {
        
        if(window.scrollY > 150){
            setIsScrolledNav(true);
        }else{
            setIsScrolledNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[]);

    useEffect(() => {
        Aos.init({duration: 1000})
    }, []);


    useEffect(() => {
        if(history.location.pathname.includes("/register")){
            setIsOpenRegisterModal(true)
        }
        if(history.location.pathname.includes("/thankyou")){
            props.setIsRegistered(true);
            setIsOpenRegisterModal(true)
        }
    },[history.location.pathname]);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setCurrentLanguage(language);
    }

    const comments = useMemo(()=>[
        {
            text: "Актуальные темы, форма подачи информации понятная и интересная!",
            name: "Чернышов Руслан Николаевич, руководитель отдела фарм компании"
        },
        {
            text: "Отлично структурированная обучающая информация, основанная на живом опыте. Рабочие техники, без 'воды;, что очень ценно.",
            name: "Катерина, агро-IT"
        },
        {
            text: "Екатерина – специалист высокого класса, который увлекает за собой в мир переговоров. Никаких унылых и оторванных от жизни схем. Оригинальный и дерзкий взгляд на переговоры. Вот за это спасибо!",
            name: "Лилиана, дизайнер"
        },
        {
            text: "Методы, которые были представлены на курсе, не были известны мне ранее. Информация подавалась креативно, было много реальных примеров, которые свидетельствуют о том, что методика работает. Мой мир не будет таким, как прежде ☺",
            name: "Коваль Алина, специалист ВЭД"
        },
        {
            text: "Дуже вдячна за те, що я зараз можу пушити свої iнтереси навіть в перемовах англійською мовою з носіями. Хоча мій рівень intermediate+ Це просто неймовірно. Інколи сама собі дивуюсь і не вірю, що це в мене якимось чином виходить :)",
            name: "Снозова Катерина, digital marketing"
        },
        {
            text: "После прохождения Курса больше новых клиентов стали постоянными. Пропал страх начинать разговор и задавать вопросы.",
            name: "Осадчук Павел, сфера услуг"
        },
        {
            text: "На многие ситуации, которые раньше казались обыденными, смотрю с позиции переговоров и открываются новые грани. Некоторые техники сразу «испытывал» в жизни. Новой и полезной информации много и, вместе с тем, есть ощущение, что это только начало.",
            name: "Прийма Максим, IT"
        },
        {
            text: "Открыла для себя новый мир переговоров, возникло желание научиться договариваться, а не рубить с плеча. Благодарна прекрасному тренеру Катерине Ластенко за смыслы и новые знания",
            name: "Гульнара Расулова, руководитель отдела маркетинга"
        },
        {
            text: "Очень сильно! За всего два с хвостиком месяца чувствую, как навык начал формироваться. Если раньше было ощущение пробки в океане, которую носит куда угодно. То сейчас понимаю, что можно управлять процессом и более осознанно использовать возможности, которые дают переговоры.",
            name: "Дарина, PR"
        }
    ], []);

    const slider = useMemo(() => (
        <Slider dotsClass={classes.dots} className={classes.slider} centerMode dots infinite autoplay arrows swipe>
            {comments.map((item, index) => {
                console.log({item})
                return(
                    <div className={classes.slide} key={"slide" + index}>
                        <p>{item.text}</p>
                        <span>{item.name}</span>
                    </div>
                )
            })}
        </Slider>
    ), [])

    const handleIsOpenModal = (open) => {
        setIsOpenRegisterModal(open);
    }

    return(
        <div className={classes.main}>
            {isOpenRegisterModal && <div><Register userURL={userURL} setIsOpenRegisterModal={handleIsOpenModal}/></div>}
            <div data-aos-duration={800} className={classes.lang + " " + (isScrolledNav ? classes.scrolledNav : "")}>
                <Button className={currentLanguage === "ru" ? classes.activeLang : ""} onClick={()=>{changeLanguage("ru")}}>RU</Button>
                <Button className={currentLanguage === "ua" ? classes.activeLang : ""} onClick={()=>{changeLanguage("ua")}}>UA</Button>
            </div>
            <div className={classes.home}>
                <img src={headerLeft} className={classes.headerLeft} alt="absoluteImage"/>
                <img src={headerRight} className={classes.headerRight} alt="absoluteImage"/>
                <h1 data-aos="fade" data-aos-duration={1300}>{t("home.title")}</h1>
                <span data-aos="zoom-in" data-aos-duration={600}  data-aos-delay={1800}>{t("home.date")}</span>
                <div className={classes.sub}>
                    <p data-aos="fade-down" data-aos-duration={900}  data-aos-delay={300}>{t("home.sub")}</p>
                    <div className={classes.words}>
                        <p data-aos="fade" data-aos-duration={800}  data-aos-delay={600}>{t("home.govori")}</p>
                        <p data-aos="fade" data-aos-duration={800}  data-aos-delay={900} className={classes.vsegda}>{t("home.vsegda")}</p>
                        <p data-aos="fade" data-aos-duration={800}  data-aos-delay={1300}>{t("home.sluwai")}</p>
                    </div>
                </div>
            </div>
            <div className={classes.cation}>
                <img src={cationLeft} className={classes.cationLeft} alt="absoluteImage"/>
                <img src={cationRight} className={classes.cationRight} alt="absoluteImage"/>
                <div className={classes.cationInfo}>
                    <div className={classes.cationInfoContainer}>
                        <h2 data-aos="fade-right" data-aos-duration={1000}>{t("cation.title")}</h2>
                        <span data-aos="fade-right" data-aos-duration={1000}>{t("cation.one")}</span>
                        <span data-aos="fade-right" data-aos-duration={1000}>{t("cation.two")}</span>
                        <span data-aos="fade-right" data-aos-duration={1000}>{t("cation.three")}</span>
                        <span data-aos="fade-right" data-aos-duration={1000}>{t("cation.four")}</span>
                        <span data-aos="fade-right" data-aos-duration={1000}>{t("cation.five")}</span>
                    </div>
                    <img src={cation} data-aos="fade-left" data-aos-duration={1000} alt="cation"/>
                </div>
                <Button onClick={handleIsOpenModal} className={classes.registerBut}>
                    <NavLink to="/register">{t("register")}</NavLink>
                </Button>
            </div>
            <div className={classes.chat}>
                <img src={dotsLeft} className={classes.chaLeft} alt="absoluteImage"/>
                <img src={chaRight} className={classes.chaRight} alt="absoluteImage"/>
                <div className={classes.chatImages} data-aos="fade-right" data-aos-duration={1000}>
                    <img src={currentLanguage === "ru" ? cha1 : cha1ua} alt="chat1"/>
                    <img src={currentLanguage === "ru" ? cha2 : cha2ua} alt="chat2"/>
                </div>
                <div className={classes.chatContent}>
                    <h2 data-aos="fade-left" data-aos-duration={1000}>{t("chat.title")}</h2>
                    <h2 data-aos="fade-left" data-aos-duration={1000}>{t("chat.titleOne")}</h2>
                    <div className={classes.chatSub}>
                        <p data-aos="fade-left">{t("chat.one")} <span>{t("chat.oneBlack")}</span></p>
                        <p data-aos="fade-left">{t("chat.two")}</p>
                        <p data-aos="fade-left">{t("chat.three")} <span>{t("chat.threeBlack")}</span></p>
                        <p data-aos="fade-left">{t("chat.four")}</p>
                        <p data-aos="fade-left">{t("chat.five")} <span>{t("chat.fiveBlack")}</span></p>
                        <p data-aos="fade-left" >{t("chat.six")}</p>
                        <p data-aos="fade-left" ><span>{t("chat.sevenBlack")}</span></p>
                    </div>
                </div>
            </div>
            <div className={classes.attention} data-aos="fade-up">
                <p>{t("attention.one")}</p>
                <p>{t("attention.two")}</p>
                <p className={classes.attentionBlack}>{t("attention.three")}</p>
                <p>{t("attention.four")}</p>
                <p><strong>{t("attention.five")}</strong></p>
            </div>
            <Button onClick={handleIsOpenModal} className={classes.registerBut}>
                <NavLink to="/register">{t("register")}</NavLink>
            </Button>
            <div className={classes.who}>
                <h2 data-aos="fade-right">{t("who.title")}</h2>
                <div className={classes.whoContainer} >
                    <div className={classes.whoText}>
                        <div className={classes.whoPoint}  data-aos="fade-right">
                            <span className={classes.for}>Для</span>
                            <p>{t("who.1")}</p>
                        </div>
                        <div className={classes.whoPoint}  data-aos="fade-right">
                            <span className={classes.for}>Для</span>
                            <p>{t("who.2")}</p>
                        </div>
                        <div className={classes.whoPoint}  data-aos="fade-right">
                            <span className={classes.for}>Для</span>
                            <p>{t("who.1")}</p>
                        </div>
                        <div className={classes.whoPoint}  data-aos="fade-right">
                            <span className={classes.for}>Для</span>
                            <p>{t("who.3")}</p>
                        </div>
                        <div className={classes.whoPoint}  data-aos="fade-right">
                            <span className={classes.for}>Для</span>
                            <p>{t("who.4")}</p>
                        </div>
                        <div className={classes.whoPoint}  data-aos="fade-right">
                            <span className={classes.for}>Для</span>
                            <p>{t("who.5")}</p>
                        </div>
                        <div className={classes.whoPoint}  data-aos="fade-right">
                            <span className={classes.for}>Для</span>
                            <p>{t("who.6")}</p>
                        </div>
                        <div className={classes.whoPoint}  data-aos="fade-right">
                            <span className={classes.for}>Для</span>
                            <p>{t("who.7")}</p>
                        </div>
                        <div className={classes.whoPoint}  data-aos="fade-right">
                            <span className={classes.for}>Для</span>
                            <p>{t("who.8")}</p>
                        </div>
                        <div className={classes.whoPoint}  data-aos="fade-right">
                            <span className={classes.for}>Для</span>
                            <p>{t("who.9")}</p>
                        </div>
                        <div className={classes.whoPoint}  data-aos="fade-right">
                            <span className={classes.for}>Для</span>
                            <p>{t("who.10")}</p>
                        </div>
                        <p className={classes.forAll} data-aos-duration="500" data-aos="zoom-in">{t("who.11")}</p>
                    </div>
                    <img src={hands} data-aos="fade-down" data-aos-duration="1500" alt="hands"/>
                </div>
                <div className={classes.program}>
                    <h2 data-aos="fade-left">{t("program.title")}</h2>
                    <div className={classes.blocks} data-aos="fade-right">
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
                    <div className={classes.blocks}  data-aos="fade-left">
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
                    <div className={classes.blocks}  data-aos="fade-right">
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
                    <div className={classes.blocks}  data-aos="fade-left">
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
                    <div className={classes.blocks}  data-aos="fade-right">
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
                <div className={classes.programEnd} data-aos="zoom-in" data-aos-duration="1000">
                    <p>{t("program.end.text")}</p>
                    <Button onClick={handleIsOpenModal} className={classes.registerBut}>
                        <NavLink to="/register">{t("register")}</NavLink>
                    </Button>
                    <div className={classes.whiteSpace}></div>
                </div>
            </div>
            <div className={classes.treners}>
                <img src={trenerLeft} className={classes.trenerLeft} alt="absoluteImage"/>
                <img src={trenerRight} className={classes.trenerRight} alt="absoluteImage"/>
                <div className={classes.trenersContainer}>
                    <h2  data-aos="fade-up">{t("treners.title")}</h2>
                    <div className={classes.trenersBlock} data-aos="fade-up">
                        <div className={classes.trener}>
                            <img src={trener1} alt="trener"/>
                            <h3>{t("treners.one.title")}</h3>
                            <Button onClick={()=>{setIsOpenOneTrener(!isOpenOneTrener)}}>
                                <img src={arrowDown} alt="arrowDown"/>
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
                            <img src={trener2} alt="trener"/>
                        
                            <h3>{t("treners.two.title")}</h3>
                            <Button onClick={()=>{setIsOpenSecondTrener(!isOpenSecondTrener)}}>
                                <img src={arrowDown} alt="arrowDown"/>
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
                <img src={priceLeft} className={classes.priceLeft} alt="absoluteImage"/>
                <img src={priceRight} className={classes.priceRight} alt="absoluteImage"/> 
                <div className={classes.priceContainer}>
                    <h2 data-aos="fade-left">{t("price.title")}</h2>
                    <div className={classes.pricesContainer}>
                        <div className={classes.priceSide} data-aos="zoom-in"  data-aos-duration="1200" data-aos-delay="400">
                            <h3>{t("price.early.title")}</h3>
                            <div className={classes.priceSideText}>
                                <span>{t("price.early.date")}</span>
                                <span>{t("price.early.price")}</span>
                            </div>
                        </div>
                        <div className={classes.priceSide} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="1000">
                            <h3>{t("price.full.title")}</h3>
                            <div className={classes.priceSideText}>
                                <span>{t("price.full.date")}</span>
                                <span>{t("price.full.price")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.bonus} data-aos="fade-up" >
                <img src={currentLanguage === "ru" ? bonus1 : bonus1ua} alt="bonus1"/>
                <img src={currentLanguage === "ru" ? bonus2 : bonus2ua} alt="bonus2"/>
            </div>
            <div className={classes.buttons}>
                <Button className={classes.registerBut}>
                    <a target="_blank" href="https://secure.wayforpay.com/button/beafc695700e1">{t("pay")}</a>
                </Button>
                <Button onClick={handleIsOpenModal} className={classes.registerBut}>
                    <NavLink to="/register">{t("register")}</NavLink>
                </Button>
            </div>
            <div className={classes.comments} data-aos="fade">
                <h2>{t("comments.title")}</h2>
                {slider}
            </div>
            <div className={classes.footer}>
                <div className={classes.footSide}>
                    <div className={classes.links}>
                        <a href="https://www.instagram.com/profi_business_school/" target="_blank">
                            {insta}
                        </a>
                        <a href="https://www.facebook.com/profispaceschool/" target="_blank">
                            {fb}
                        </a>
                        <a href="https://t.me/profi_space" target="_blank">
                            {tg}
                        </a>
                        <a href="http://www.profi-space.com/" target="_blank">
                            {wb}
                        </a>
                    </div>
                </div>
                <div className={classes.footSide}>
                    <TextField value={subscribeValue} onChange={(e)=>{setSubscribeValue(e.target.value)}} classes={material} variant="outlined" label={t("subscribe")}/>
                    <Button onClick={()=>{setSubscribeValue("")}} type="submit">OK</Button>
                </div>
            </div>
        </div>
    );
}

export default connect(null, {setIsRegistered})(Main);