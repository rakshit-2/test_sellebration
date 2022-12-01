import './index.css';
import Navbar from './../NavBar/index';
import { useState,useEffect } from 'react';
import LoadingScreen from './../../atom/loadingScreen/index';
import Footer2 from './../../molecule/footer2/index';
import Footer from './../../molecule/footer/index';
import SocialFeed from '../../molecule/socialFeed';
import staticModel from './../../assets/store/staticModel.json';
import { useLocation } from 'react-router-dom';


const TandC=(props)=>{
    const location = useLocation();
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  function  innerDataDisplay(ele)
  {
    var li=[];
    for(var i=0;i<ele.length;i++)
    {
        li.push(
            <p>{ele[i]}</p>
        )
    }
    return li;
  }

return (
    <>
    <div className="event__outer">
        <div className="event__inner">
        <Navbar navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}  changeLang={props.changeLang} lang={props.lang} name={location.pathname} viewLang={props.viewLang}/>
            <div className="event__inner__section1">
                <div className='event__inner__section1__img'>

                </div>
                <div className="event__inner__section1__inner">
                    <div className="event__inner__section1__inner__left" style={{fontSize:"30px",fontWeight:"900"}}>
                        Terms & Conditions
                    </div>
                </div>
            </div>
            <div className='event__inner__inner'>

                <div className='event__inner__section2'>
                    <div className='event__inner__section2__left__tandc'>
                        {
                            staticModel[props.lang].tandc.map((ele)=>{
                                const{head,text}=ele;
                                return(
                                    <>
                                    <div className='policy__head'>
                                        {head}
                                    </div>
                                    <div className='policy__body'>
                                        {innerDataDisplay(text)}
                                    </div>
                                    </>
                                )
                            })
                        }
                        
                    </div>
                    <SocialFeed />
                </div>
            </div>

            <Footer2/>
            <Footer  changeLang={props.changeLang} lang={props.lang} name={location.pathname} viewLang={props.viewLang}/>

        </div>
    </div>
    </>
);
}

export default TandC;