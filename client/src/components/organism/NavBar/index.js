import './index.css';
import navbar_logo from './../../assets/image/navbar_img/navbar_logo_img.svg'
import navbar_icon from './../../assets/image/navbar_img/navbar_button_img.svg'
import NavPanel from './../Nav/index';
import nav_close from './../../assets/image/nav_img/nav_cross_img.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';





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
    navigate("/");
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
            <select className="navbar__language__select" value={props.lang} onChange={(e)=>{props.changeLang(e.target.value,props.name)}}>
              <option className="navbar__language__option" value={"english"}>English</option>
              <option className="navbar__language__option" value={"german"}>German</option>
              <option className="navbar__language__option" value={"spanish"}>Spanish</option>
              <option className="navbar__language__option" value={"hindi"}>Hindi</option>
              <option className="navbar__language__option" value={"russian"}>Russian</option>
              <option className="navbar__language__option" value={"chinese"}>Chinese</option>
              <option className="navbar__language__option" value={"french"}>French</option>
              <option className="navbar__language__option" value={"portuguese"}>Portuguese</option>
              <option className="navbar__language__option" value={"japnese"}>Japanese</option>
            </select>
          </div>
        </div>
      </div>
      
    </div>
    
    </>
  );
}

export default NavBar;