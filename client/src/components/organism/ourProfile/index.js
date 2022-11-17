import Navbar from './../NavBar/index';
import './index.css';
import { useEffect } from 'react';
import CardType2 from '../../atom/cardType2';
import items from './../../assets/store/OurProfileData.js';
import logo from './../../assets/image/test.png';
import CardType3 from '../../atom/cardType3';
import Footer from './../../molecule/footer/index';
import Carousel from "react-multi-carousel";
import { useNavigate } from 'react-router-dom';



const OurProfile=(props)=>{

  const navigate = useNavigate();

  
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);



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
        <div className="OurProfile__outer">
          <div className="OurProfile__inner">
            <Navbar navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
            <div className='OurProfile__inner__inner'> 
                <div className="OurProfile__about">
                  <div className="OurProfile__about__left"  data-aos="fade-right">
                    <div className="OurProfile__about__heading">
                      About Us
                    </div>
                    <div className="OurProfile__about__he">
                      Our Profile
                    </div>
                    <div className="OurProfile__about__text">
                      Lorem Ipsum is simply dummy text 
                      of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an 
                      unknown printer took a galley of type and 
                      scrambled it to make a type specimen book 
                      and more recently with desktop publishing 
                      software like Aldus PageMaker including 
                      versions of Lorem Ipsum
                    </div>
                  </div>
                  <div className="OurProfile__about__right__inner"  data-aos="fade-left">
                    <img src={logo} className="OurProfile__about__right__inner__img"/>
                  </div>
                </div>


                </div>
                <div className="OurProfile__center__display">
                  <div className="OurProfile__center__head">
                      Our Values
                  </div>
                  <div className='OurProfile__inner__inner'>
                    <div className="OurProfile__center__list"  data-aos="fade-up">
                      {items.ourValues.map((ele) => {
                        const {id,name,info,img}=ele;
                        return(
                          <CardType2 id={id} name={name} info={info} img={img}/>
                        )
                      })}
                    </div>
                    <div className="OurProfile__center__list2"  data-aos="fade-up">
                      <Carousel 
                        responsive={responsive} 
                        draggable
                        autoPlay
                        autoPlaySpeed={2000}
                        pauseOnHover
                        infinite
                        showDots={true}
                        removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
                        {items.ourValues.map((ele) => {
                          const {id,name,info,img}=ele;
                          return(
                            <CardType2 id={id} name={name} info={info} img={img}/>
                          )
                        })}
                        </Carousel>
                    </div>
                  </div>
                </div>
                <div className='OurProfile__inner__inner'>
    
                <div className="OurProfile__team">
                    <div className="OurProfile__team__heading">
                        Our team
                    </div>
                    <div className="OurProfile__team__card"  data-aos="fade-up">
                    {items.ourTeam.map((ele) => {
                        const {id,name,job,img}=ele;
                        return(
                          <CardType3 id={id} name={name} job={job} img={img}/>
                        )
                      })}
                    </div>
                    <div className="OurProfile__team__card1">
                    <Carousel 
                        responsive={responsive} 
                        draggable
                        autoPlay
                        autoPlaySpeed={2000}
                        pauseOnHover
                        infinite
                        showDots={true}
                        removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
                        {items.ourTeam.map((ele) => {
                          const {id,name,job,img}=ele;
                          return(
                            <CardType3 id={id} name={name} job={job} img={img}/>
                          )
                        })}
                        </Carousel>
                    </div>
                </div>
                <div className="OurProfile__team__leaderboad">
                  <div className="OurProfile__team__leaderboad__button" onClick={()=>{navigate('/leadership')}}>
                    View Leadership
                  </div>
                </div>
              </div>
              <Footer/>
          </div>
        </div>
    </>
  );
}

export default OurProfile;