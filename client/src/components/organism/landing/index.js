import './index.css';
import { useEffect } from 'react';
import logo from '../../assets/image/navbar_img/navbar_logo_img.svg';
import map from './../../assets/image/landing_map.svg';
import langAll from './../../assets/store/lang.json';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate  } from 'react-router-dom';
import StaticModel from './../../assets/store/staticModel.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

const Landing=(props)=>{
      // scroll to top
      const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function onChangeLang(lang,route)
    {
        var langEle="english"
        if(lang==="English")
        {
            langEle="english";
        }
        else if(lang==="deutsch")
        {
            langEle="german";
        }
        else if(lang==="हिन्दी")
        {
            langEle="hindi";
        }
        else if(lang==="français")
        {
            langEle="french";
        }
        else if(lang==="русский")
        {
            langEle="russian";
        }
        else if(lang==="Português")
        {
            langEle="portuguese";
        }
        else if(lang==="中国人")
        {
            langEle="chinese";
        }
        else if(lang==="español")
        {
            langEle="spanish";
        }
        else
        {
            langEle="japnese";
        }
        props.changeLang(langEle,route,lang);
        
    }

    function proceed()
    {
        navigate('/home')
    }

return (
    <>
    <div className='landing__outer'>
        <div className='landing__outer__img'>
        </div>
        <div className='mobile__landing__inner'>
            <div className='mobile__landing__inner__top'>
                <div className='mobile__landing__inner__top__img'>
                    <img src={logo} style={{width:"100%",height:"100%",borderRadius:"50%"}} alt="img"/>
                </div>
                <div className='mobile__lightblue__line__landing'>
                </div>
                <div className='mobile__darkblue__line__landing'>
                </div>
                <div className='mobile__landing__inner__top__text'>
                    SELLEBRATION PVT. LTD.
                </div>
            </div>
            <marquee direction="up" scrollamount="1" loop="100" className='mobile__landing__inner__middle'>
                <div className="mobile__landing__inner__middle__div">
                    <p style={{color:"#2F528E"}} className="mobile__landing__inner__middle__each">Welcome to Sellebration Private Limited</p>
                    <p style={{color:"#0AB1EE"}} className="mobile__landing__inner__middle__each">सेलब्रेशन प्राइवेट लिमिटेड में आपका स्वागत है</p>
                    <p style={{color:"#2F528E"}} className="mobile__landing__inner__middle__each">Willkommen bei Sellebration Private Limited</p>
                    <p style={{color:"#0AB1EE"}} className="mobile__landing__inner__middle__each">Bienvenue chez Sellebration Private Limited</p>
                    <p style={{color:"#2F528E"}} className="mobile__landing__inner__middle__each">Добро пожаловать в Sellebration Private Limited</p>
                    <p style={{color:"#0AB1EE"}} className="mobile__landing__inner__middle__each">Bem-vindo à Sellebration Private Limited</p>
                    <p style={{color:"#2F528E"}} className="mobile__landing__inner__middle__each">欢迎来到 Sellebration 私人有限公司</p>
                    <p style={{color:"#0AB1EE"}} className="mobile__landing__inner__middle__each">Bienvenido a Selbration Private Limited</p>
                    <p style={{color:"#2F528E"}} className="mobile__landing__inner__middle__each">Sellebration Private Limited へようこそ</p>
                </div>
            </marquee>
            <div className='mobile__landing__inner__bottom'>
                <div className='mobile__landing__inner__bottom__img'>
                    {/* <img src={map} style={{width:"100%",height:"100%"}} alt="img"/> */}
                </div>

                <div className='mobile__landing__inner__bottom__inner'>
                    <Autocomplete
                    disablePortal
                    defaultValue={null}
                    className="mobile__name-field"
                    id="combo-box-demo"
                    placeholder={"language"}
                    options={langAll}
                    value={props.viewLang}
                    onChange={(event: any, newVal:string | null)=>onChangeLang(newVal.label,'/landing')}
                    renderInput={(params) => <TextField {...params} label="" />}
                    />
                </div>
                <div className='mobile__landing__button' onClick={()=>{proceed()}}>
                    {StaticModel[props.lang].landing[0]}
                </div>
            </div>
            <div className='mobile__landing__inner__footer'>
                <div className='mobile__landing__inner__footer__each'>
                <FontAwesomeIcon icon={faCopyright} size="lg" color="white" style={{cursor:"pointer"}} />{'\u00A0'}{StaticModel[props.lang].landing[1]}
                </div>
            </div>
        </div>



        <div className='landing__inner'>
                <div className='landing__inner__top'>
                    <div className='landing__inner__top__img'>
                        <img src={logo} style={{width:"100%",height:"100%",borderRadius:"50%"}} alt="img"/>
                    </div>
                    <div className='lightblue__line__landing'>
                    </div>
                    <div className='darkblue__line__landing'>
                    </div>
                    <div className='landing__inner__top__text'>
                        SELLEBRATION PVT. LTD.
                    </div>
                </div>
                <marquee direction="up" scrollamount="1" loop="100" className='landing__inner__middle'>
                    <div className="landing__inner__middle__div">
                        <p style={{color:"#2F528E"}} className="landing__inner__middle__each">Welcome to Sellebration Private Limited</p>
                        <p style={{color:"#0AB1EE"}} className="landing__inner__middle__each">सेलब्रेशन प्राइवेट लिमिटेड में आपका स्वागत है</p>
                        <p style={{color:"#2F528E"}} className="landing__inner__middle__each">Willkommen bei Sellebration Private Limited</p>
                        <p style={{color:"#0AB1EE"}} className="landing__inner__middle__each">Bienvenue chez Sellebration Private Limited</p>
                        <p style={{color:"#2F528E"}} className="landing__inner__middle__each">Добро пожаловать в Sellebration Private Limited</p>
                        <p style={{color:"#0AB1EE"}} className="landing__inner__middle__each">Bem-vindo à Sellebration Private Limited</p>
                        <p style={{color:"#2F528E"}} className="landing__inner__middle__each">欢迎来到 Sellebration 私人有限公司</p>
                        <p style={{color:"#0AB1EE"}} className="landing__inner__middle__each">Bienvenido a Selbration Private Limited</p>
                        <p style={{color:"#2F528E"}} className="landing__inner__middle__each">Sellebration Private Limited へようこそ</p>
                    </div>
                </marquee>
                <div className='landing__inner__bottom'>
                    <div className='landing__inner__bottom__img'>
                        <img src={map} style={{width:"100%",height:"100%"}} alt="img"/>
                    </div>

                    <div className='landing__inner__bottom__inner'>
                        <Autocomplete
                        disablePortal
                        defaultValue={null}
                        className="name-field"
                        id="combo-box-demo"
                        placeholder={"language"}
                        options={langAll}
                        value={props.viewLang}
                        onChange={(event: any, newVal:string | null)=>onChangeLang(newVal.label,'/landing')}
                        renderInput={(params) => <TextField {...params} label="" />}
                        />
                    </div>
                    <div className='landing__button' onClick={()=>{proceed()}}>
                        {StaticModel[props.lang].landing[0]}
                    </div>
                </div>
        </div>
    </div>
    </>
);
}

export default Landing;