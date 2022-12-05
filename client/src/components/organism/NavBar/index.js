import './index.css';
import navbar_logo from './../../assets/image/navbar_img/navbar_logo_img.svg'
import navbar_icon from './../../assets/image/navbar_img/navbar_button_img.svg'
import NavPanel from './../Nav/index';
import nav_close from './../../assets/image/nav_img/nav_cross_img.svg';
import { useState } from 'react';
import langAll from './../../assets/store/lang.json';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Switch from '@mui/material/Switch';
import { useNavigate,useLocation  } from 'react-router-dom';




const NavBar=(props)=>{

  const navigate = useNavigate();
  const[navOperator,setNavOperator]=useState({open:"flex",close:"none"});
  const[flag,setFlag]=useState(0)

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if(flag!==1)
    {
      if (document.body.scrollTop>80 || document.documentElement.scrollTop>80) 
      {
        document.getElementById("navbar").style.background="linear-gradient(0deg, rgba(9,9,121,0) 35%, rgba(47,49,50,1) 100%)";
        document.getElementById("navbar").style.height="5rem";
        document.getElementById("navbar").style.background="#2F528E";
        document.getElementById("logo").style.width="5rem" ;
        document.getElementById("logo").style.backgroundColor="white";
      }
      else 
      {
        document.getElementById("navbar").style.background="linear-gradient(0deg, rgba(9,9,121,0) 35%, rgba(47,49,50,1) 100%)";
        document.getElementById("navbar").style.height="7rem";
        document.getElementById("logo").style.width="7rem";
        document.getElementById("logo").style.backgroundColor="rgb(255,255,255,0)";
      }
    }
    
  }



  function openNavClicked()
  {
    setNavOperator({open:"none",close:"flex"});
    setFlag(1)
    
    // document.getElementById("navbar").style.background="linear-gradient(0deg, rgba(9,9,121,0) 35%, rgba(47,49,50,1) 100%)";
    document.getElementById("navbar").style.background="rgb(255,255,255,0)"
    document.getElementById("navbar").style.height="7rem";
    document.getElementById("logo").style.width="7rem";
    document.getElementById("logo").style.backgroundColor="white";
    props.openNav();
  }

  function closeNavClicked()
  {
    setNavOperator({open:"flex",close:"none"});
    setFlag(0)
    if (document.body.scrollTop>80 || document.documentElement.scrollTop>80)
    {
      document.getElementById("navbar").style.height="5rem";
      document.getElementById("navbar").style.background="#2F528E";
      document.getElementById("logo").style.width="5rem" ;
      document.getElementById("logo").style.backgroundColor="white";
    }
    else
    {
      document.getElementById("navbar").style.background="linear-gradient(0deg, rgba(9,9,121,0) 35%, rgba(47,49,50,1) 100%)";
      document.getElementById("logo").style.backgroundColor="rgb(255,255,255,0)";
    }
    props.closeNav("nav");
  }


  function HomeRoute()
  {
    closeNavClicked();
    navigate("/home");
  }



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
  return (
    <>
    <NavPanel navDisplay={props.navDisplay} closeNav={props.closeNav} closeNavClicked={closeNavClicked}/>
    <div className="navbar__outer" id="navbar">
      <div className="navbar__inner">

        
        <div className="navbar__left" style={{cursor:"pointer"}} id="logo" onClick={()=>{HomeRoute()}}>
          <img src={navbar_logo} className="navbar__logo"alt=""/>
        </div>


        <div className="navbar__right">
          <div className="navbar__right__icon" style={{display:navOperator.open}}>
            <img src={navbar_icon} className="navbar__icon" alt="" onClick={()=>{openNavClicked()}}/>
          </div>
          <div className="navbar__right__icon"  style={{display:navOperator.close}}>
            <img src={nav_close} className="navbar__icon" alt="" onClick={()=>{closeNavClicked()}}/>
          </div>
          <div className="navbar__right__search">
            <input type="text" placeholder="Search..." className="navbar__search__field"/>
          </div>
          <div className="navbar__right__select">
            <select className="navbar__language__select" value={props.viewLang} onChange={(e)=>{onChangeLang(e.target.value,props.name)}}>
              <option className="navbar__language__option" value={"English"}>English</option>
              <option className="navbar__language__option" value={"deutsch"}>deutsch</option>
              <option className="navbar__language__option" value={"हिन्दी"}>हिन्दी</option>
              <option className="navbar__language__option" value={"français"}>français</option>
              <option className="navbar__language__option" value={"русский"}>русский</option>
              <option className="navbar__language__option" value={"Português"}>Português</option>
              <option className="navbar__language__option" value={"中国人"}>中国人</option>
              <option className="navbar__language__option" value={"español"}>español</option>
              <option className="navbar__language__option" value={"日本"}>日本</option>
            </select>
          </div>
        </div>
      </div>
      
    </div>
    
    </>
  );
}

export default NavBar;