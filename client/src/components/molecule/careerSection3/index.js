



import './index.css';
import CareerData from './../../assets/store/careerData';
import quote from './../../assets/image/career/quote_img.svg';
import test from './../../assets/image/test.png';

const CareerSection3=(props)=>{
return (
    <>
    <div className='career__inner__section3'>
        <div className='career__inner__section3__inner'>
            <div className='career__inner__section3__left'  data-aos="fade-right">
                <img src={test} style={{width:"100%",height:"100%"}}/>
            </div>
            <div className='career__inner__section3__right'  data-aos="fade-left">
                <div className='career__inner__section3__right__left'>
                    <img src={quote} className="career__inner__section3__right__left__pic"/>
                </div>
                <div className='career__inner__section3__right__right'>
                    <div className='career__inner__section3__right__right__top'>
                        {CareerData.section3.text}
                    </div>
                    <div className='career__inner__section3__right__right__line'></div>
                    <div className='career__inner__section3__right__right__bottom'>
                        {CareerData.section3.name}
                    </div>
                    <div className='career__inner__section3__right__right__button'>
                        Know More
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    
);
}

export default CareerSection3;