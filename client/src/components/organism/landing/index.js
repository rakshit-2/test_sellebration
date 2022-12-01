import './index.css';
import Navbar from './../NavBar/index';
import image from '../../assets/image/innovation_img/innovation_img.svg';
import { useEffect } from 'react';
import Footer2 from './../../molecule/footer2/index';
import Footer from './../../molecule/footer/index';
import logo from '../../assets/image/navbar_img/navbar_logo_img.svg';
import map from '../../assets/image/landing_map.svg';
import back_img from './../../assets/image/landing_back.svg';
import centerimg from '../../assets/image/logo/logo_mid.svg';
import logo_quote from './../../assets/image/logo/logo_quote.svg';
import logo_quote1 from './../../assets/image/logo/logo_quote1.svg';
import langAll from './../../assets/store/lang.json';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Switch from '@mui/material/Switch';
import { useNavigate,useLocation  } from 'react-router-dom';

const Landing=(props)=>{
      // scroll to top
      const navigate = useNavigate();
      const location = useLocation();
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
        navigate('/')
    }



return (
    <>
    <div className='landing__outer'>
        <div className='landing__outer__img'>
        </div>
        <div className='landing__inner'>
            <div className='landing__inner__top'>
                <div className='landing__inner__top__img'>
                    <img src={logo} style={{width:"100%",height:"100%",borderRadius:"50%"}}/>
                </div>
                <div style={{width:"4px",height:"150px",borderRadius:"1rem",backgroundColor:"#2F528E",marginLeft:"25px",marginRight:"1px"}}>
                </div>
                <div style={{width:"4px",height:"150px",borderRadius:"1rem",backgroundColor:"#0AB1EE",marginLeft:"1px",marginRight:"25px"}}>
                </div>
                <div className='landing__inner__top__text'>
                    SELLEBRATION PVT. LTD.
                </div>
            </div>
            <div className='landing__inner__bottom'>
                <div className='landing__inner__bottom__inner'>
                <Autocomplete
                disablePortal
                defaultValue={null}
                className="name-field"
                style={{height:"fit-content",borderRadius:"5px",paddingLeft:"0px",fontFamily:"Oswald, sans-serif",fontSize:"12px",width:"200px"}}
                id="combo-box-demo"
                placeholder={"language"}
                options={langAll}
                value={props.viewLang}
                onChange={(event: any, newVal:string | null)=>onChangeLang(newVal.label,'/landing')}
                renderInput={(params) => <TextField {...params} label="" />}
                />
                </div>
            </div>
        </div>
    </div>
    </>
);
}

export default Landing;