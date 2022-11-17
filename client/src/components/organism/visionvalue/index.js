
import './index.css';
import { useEffect } from 'react';

import Navbar from './../NavBar/index';
import Footer from './../../molecule/footer/index';
import VisionValueSection1 from '../../molecule/visionvalueSection1';
import VisionValueSection2 from '../../molecule/visionvalueSection2';
import quote_img from './../../assets/image/vision&values_img/quote_img.svg'

const VisionValue=(props)=>{

    // scroll to top

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


return (
    <>
    <div className="vision__outer">
        <div className="vision__inner">
            
            <Navbar  navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>

            <VisionValueSection1/>

            <VisionValueSection2/>
            
            
            <div className='vision__inner__inner'>
                <div className="vision__bottom">
                    <div className="vision__bottom__head" >
                        Why Do We Follow This?
                    </div>
                    <div  className="vision__bottom__content"  data-aos="fade-up">
                        <div className="vision__bottom__content__left">
                            <div className="vision__bottom__content1">
                            Lorem Ipsum is simply dummy text 
                            of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard
                            dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make 
                            a type specimen book. It has survived not only f
                            ive centuries, but also the leap into electronic 
                            typesetting,
                            remaining essentially unchanged.
                            </div>
                            <br></br>
                            <br></br>
                            <div className="vision__bottom__content1">
                            Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has 
                            survived not only five centuries, but also the leap 
                            into electronic 
                            typesetting, remaining essentially unchanged.
                            </div>
                        </div>
                        <div className="vision__bottom__content__right">
                                <img src={quote_img} className="vision__bottom__content__pic__img"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
    </>
);
}

export default VisionValue;