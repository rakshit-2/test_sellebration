import './index.css';
import facebook_panel__img from './../../assets/image/event/facebook_panel__img.svg';
import twitter_panel__img from './../../assets/image/event/twitter_panel_img.svg';
import {useState} from 'react';


const SocialFeed=(props)=>{
    const[changeFeed,setChangeFeed]=useState({
                                            facebook:"block",
                                            twitter:"none"
    })
return (
    <>
    <div className='event__inner__section2__right'>
        <div className='event__inner__section2__right__top'>
            Social feeds
        </div>
        <div className='event__inner__section2__right__panel'>
            <div className='event__inner__section2__right__panel__each' style={{backgroundColor:"#374E91"}} onClick={()=>{setChangeFeed({facebook:"block",twitter:"none"})}}>
                <img src={facebook_panel__img} className="event__inner__section2__right__panel__each__img"/>
            </div>
            <div className='event__inner__section2__right__panel__each'  style={{backgroundColor:"white"}}  onClick={()=>{setChangeFeed({facebook:"none",twitter:"block"})}}>
                <img src={twitter_panel__img} className="event__inner__section2__right__panel__each__img"/>
            </div>
        </div>
        <div className='event__inner__section2__right__middle__outer' style={{display:changeFeed.facebook}}>
            <div className='event__inner__section2__right__middle'>
                
                <div className='event__inner__section2__right__middle__each'>
                    <div className='event__inner__section2__right__middle__inner'>
                    facebook
                    </div>
                    <div className='event__inner__section2__right__middle__text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum
                    </div>
                </div>
                <div className='event__inner__section2__right__middle__each'>
                    <div className='event__inner__section2__right__middle__inner'>

                    </div>
                    <div className='event__inner__section2__right__middle__text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum
                    </div>
                </div>
                <div className='event__inner__section2__right__middle__each'>
                    <div className='event__inner__section2__right__middle__inner'>

                    </div>
                    <div className='event__inner__section2__right__middle__text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum
                    </div>
                </div>

            </div>
        </div>

        <div className='event__inner__section2__right__middle__outer' style={{display:changeFeed.twitter}}>
            <div className='event__inner__section2__right__middle'>
                
                <div className='event__inner__section2__right__middle__each'>
                    <div className='event__inner__section2__right__middle__inner'>
                    twitter
                    </div>
                    <div className='event__inner__section2__right__middle__text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum
                    </div>
                </div>
                <div className='event__inner__section2__right__middle__each'>
                    <div className='event__inner__section2__right__middle__inner'>

                    </div>
                    <div className='event__inner__section2__right__middle__text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum
                    </div>
                </div>
                <div className='event__inner__section2__right__middle__each'>
                    <div className='event__inner__section2__right__middle__inner'>

                    </div>
                    <div className='event__inner__section2__right__middle__text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
);
}

export default SocialFeed;