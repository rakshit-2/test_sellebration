

import './index.css';
import CareerData from './../../assets/store/careerData';
import Carousel from "react-multi-carousel";

const CareerSection5=(props)=>{



    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1181 },
          items: 3,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 1181, min: 750 },
          items: 2,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 749, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };


return (
    <>
    <div className='career__inner__section5'>
        <div className='career__inner__section5__inner'>
            <div className='career__inner__section5__head'>
                {CareerData.section5.heading}
            </div>
            <div className='career__inner__section5__head__small'>
                {CareerData.section5.text}
            </div>
            <div className='career__inner__section5__display'  data-aos="fade-up">
                {CareerData.section5.card.map((ele)=>{
                    const{id,img,text,col}=ele;
                    return(
                    <div key={id} className='career__inner__section5__display__each'>
                        <div className='career__inner__section5__display__each__img'>
                            <img src={img} style={{width:"100%",height:"100%",borderRadius:"50%"}}/>
                        </div>
                        <div className='career__inner__section5__display__each__text' style={{color:col}}>
                            {text}
                        </div>
                    </div>      
                    )
                })}
                
            </div>
            <div className='career__inner__section5__display1'  data-aos="fade-up">
                <Carousel 
                responsive={responsive} 
                draggable
                autoPlay
                autoPlaySpeed={2000}
                pauseOnHover
                infinite
                showDots={true}
                removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
                {CareerData.section5.card.map((ele)=>{
                    const{id,img,text,col}=ele;
                    return(
                    <div key={id} className='career__inner__section5__display__each'>
                        <div className='career__inner__section5__display__each__img'>
                            <img src={img} style={{width:"100%",height:"100%",borderRadius:"50%"}}/>
                        </div>
                        <div className='career__inner__section5__display__each__text' style={{color:col}}>
                            {text}
                        </div>
                    </div>      
                    )
                })}
                </Carousel>
            </div>
        </div>
    </div>
    </>
    
);
}

export default CareerSection5;