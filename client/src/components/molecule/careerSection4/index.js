

import './index.css';
import CareerData from './../../assets/store/careerData';
import Carousel from "react-multi-carousel";



const CareerSection4=(props)=>{

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
    <div className='career__inner__section4'>
        <div className='career__inner__section4__inner'>
            <div className='career__inner__section4__heading'>
                {CareerData.section4.heading}
            </div>
            <div className='career__inner__section4__display'  data-aos="fade-up">
                
            {CareerData.section4.card.map((ele)=>{
                    const{id,img,text}=ele;
                    return(
                    <div key={id} className='career__inner__section4__display__each'>
                        <div className='career__inner__section4__display__each__img'>
                            <img src={img} style={{width:"100%",height:"100%"}}></img>
                        </div>
                        <div className='career__inner__section4__display__each__text'>
                            {text}
                        </div>
                    </div>
                    )
                })}
                
            </div>
            <div className='career__inner__section4__display1'  data-aos="fade-up">
            <Carousel 
                responsive={responsive} 
                draggable
                autoPlay
                autoPlaySpeed={2000}
                pauseOnHover
                infinite
                showDots={true}
                removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
                {CareerData.section4.card.map((ele)=>{
                    const{id,img,text}=ele;
                    return(
                    <div key={id} className='career__inner__section4__display__each'>
                        <div className='career__inner__section4__display__each__img'>
                            <img src={img} style={{width:"100%",height:"100%"}}></img>
                        </div>
                        <div className='career__inner__section4__display__each__text'>
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

export default CareerSection4;