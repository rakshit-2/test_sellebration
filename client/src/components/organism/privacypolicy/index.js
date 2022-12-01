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
  
  function  innerDataDisplayBullet(ele)
  {
    var li=[];
    for(var i=0;i<ele.length;i++)
    {
        li.push(
            <li>{ele[i]}</li>
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
                        Privacy Policy
                    </div>
                </div>
            </div>
            <div className='event__inner__inner'>

                <div className='event__inner__section2'>
                    <div className='event__inner__section2__left__tandc'>
                        {
                            staticModel[props.lang].privacy[0].map((ele)=>{
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
                        <div className='policy__head'>
                            {staticModel[props.lang].privacy[11].head}
                        </div>
                        <div className='policy__body'>
                            {innerDataDisplay(staticModel[props.lang].privacy[11].text1)}
                        </div>
                        <div className='policy__body'>
                            <ul>
                                {innerDataDisplayBullet(staticModel[props.lang].privacy[11].bullets)}
                            </ul>
                        </div>
                        <div className='policy__body'>
                            {innerDataDisplay(staticModel[props.lang].privacy[11].text2)}
                        </div>




                        <div className='policy__head'>
                            {staticModel[props.lang].privacy[22].head}
                        </div>
                        <div className='policy__body'>
                            {innerDataDisplay(staticModel[props.lang].privacy[22].text1)}
                        </div>
                        <div className='policy__body'>
                            <ul>
                                {innerDataDisplayBullet(staticModel[props.lang].privacy[22].bullets)}
                            </ul>
                        </div>
                        <div className='policy__body'>
                            <b>{staticModel[props.lang].privacy[22].headSmall1}</b><br></br><br></br>
                            <b>{staticModel[props.lang].privacy[22].textSmall1}</b>
                            <b></b>
                            <ul>
                                {innerDataDisplayBullet(staticModel[props.lang].privacy[22].bulletsSmall1)}
                            </ul>
                        </div>
                        <div className='policy__body'>
                            <b>{staticModel[props.lang].privacy[22].headSmall2}</b><br></br><br></br>
                            <b>{staticModel[props.lang].privacy[22].textSmall2}</b>
                            <b></b>
                            <ul>
                                {innerDataDisplayBullet(staticModel[props.lang].privacy[22].bulletsSmall2)}
                            </ul>
                        </div>


                        <div className='policy__head'>
                            {staticModel[props.lang].privacy.cookie.head}
                        </div>
                        <div className='policy__body'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>{staticModel[props.lang].privacy.cookie.headSmall1}</th>
                                        <th>{staticModel[props.lang].privacy.cookie.headSmall2}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Projeto">{staticModel[props.lang].privacy.cookie.inner1Small1}</td>
                                        <td data-label="Descrição">{innerDataDisplay(staticModel[props.lang].privacy.cookie.inner2Small2)} <a href={"https://tools.google.com/dlpage/gaoptout"}>https://tools.google.com/dlpage/gaoptout</a></td>
                                    </tr>
                                    <tr>
                                        <td data-label="Projeto">{staticModel[props.lang].privacy.cookie.inner1Small2}</td>
                                        <td data-label="Descrição">{innerDataDisplay(staticModel[props.lang].privacy.cookie.inner2Small2)} <a href={"https://learn.microsoft.com/en-us/clarity/faq"}>https://learn.microsoft.com/en-us/clarity/faq</a></td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>


                        {
                            staticModel[props.lang].privacy[1].map((ele)=>{
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