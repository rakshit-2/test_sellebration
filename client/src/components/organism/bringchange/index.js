
import './index.css';
import BringChangeData from '../../assets/store/bringchangeData.js';
import img from './../../assets/image/test.png';
import Navbar from './../NavBar/index';
import button_image from './../../assets/image/bringchange_img/bringchange_img.svg';
import BringChangeCard1 from '../../atom/bringchangeCard1';
import Footer from './../../molecule/footer/index';
import {useState,useEffect} from 'react';
import CsrCard3 from '../../atom/csrCard3';
import Carousel from "react-multi-carousel";


const BringChange=(props)=>{

  // scroll to top

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [idb,setId]=useState(0);
   function checker(id){
    setId(id)
   }
   const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1181 },
      items: 1,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1181, min: 750 },
      items: 1,
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
    <div className="bringchange__outer">
        <div className="bringchange__inner">
            <Navbar  navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
            <div className='bringchange__inner__inner'>

                
                <div className="bringchange__sec1">
                    <div className="bringchange__sec1__home">
                        HOME / ABOUT US
                    </div>
                    <div className="bringchange__sec1__title">
                        Bring The Change
                    </div>
                    <div className="bringchange__sec1__text">
                        “Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Contrary to popular belief,
                        Lorem Ipsum is not simply random text. It has roots 
                        in a piece of classical Latin literature from 45 BC”
                    </div>
                </div>

                <div className="bringchange__sec2">
                    <div className="bringchange__sec2__title">
                        Our Focus Area
                    </div>
                    <div className="bringchange__sec2__buttons">
                        {BringChangeData.buttonData.map((ele)=>{
                            const {id,title}=ele;
                            if(id===idb)
                            {
                                console.log(id)
                                return(
                                <>
                                <div  className="bringchange__sec2__button1" >
                                    <div  style={{backgroundColor:"#2F528E"}} key={id} className="bringchange__sec2__button1__head">
                                        {title}
                                    </div>
                                    <img style={{display:"flex"}} className="bringchange__sec2__button1_img" src={button_image}/>
                                </div>
                                </>
                                )
                            }
                            else{
                                return(
                                    <div  className="bringchange__sec2__button1" onClick={()=>{checker(id)}}>
                                        <div   key={id} className="bringchange__sec2__button1__head">
                                        {title}
                                        </div>
                                    </div>
                                    )
                            }
                        })}
                    </div>
                    <div className="bringchange__sec2__buttons2">
                        {BringChangeData.buttonData.map((ele)=>{
                            const {id,title}=ele;
                            if(id!==idb)
                            {
                                console.log(id)
                                return(
                                <>
                                <div  className="bringchange__sec2__button1" onClick={()=>{checker(id)}}>
                                    <div   key={id} className="bringchange__sec2__button1__head">
                                    {title}
                                    </div>
                                </div>
                                </>
                                )
                            }
                        })}
                    </div>
                    <div className="bringchange__sec2__buttons2" style={{marginTop:"0rem"}}>
                        {BringChangeData.buttonData.map((ele)=>{
                            const {id,title}=ele;
                            if(id===idb)
                            {
                                console.log(id)
                                return(
                                <>
                                <div  className="bringchange__sec2__button1" >
                                    <div  style={{backgroundColor:"#2F528E"}} key={id} className="bringchange__sec2__button1__head">
                                        {title}
                                    </div>
                                    <img style={{display:"flex"}} className="bringchange__sec2__button1_img" src={button_image}/>
                                </div>
                                </>
                                )
                            }
                        })}
                    </div>
                    {BringChangeData.imageData.map((ele)=>{
                        const{id,pic}=ele;
                        if(id===idb){
                            return(
                            <div className='bringchange__sec2__image'>
                                <img className='bringchange__sec2__button1__images' src={pic}/>
                            </div>
                            )
                        }
                    
                    })}
                </div>
                <div className="bringchange__sec3">
                    <div className="bringchange__sec3__head">
                        Lorem Ipsum
                    </div>
                    {
                        BringChangeData.iconData.map((ele)=>{
                            const{id,icon,data}=ele;
                            return(
                            <div key={id} className='bringchange__sec3__data'>
                                <div className='bringchange__sec3__data__inner1'>
                                    <img className="bringchange__sec3__data__inner1__img" src= {icon}/>
                                </div>
                                <div className='bringchange__sec3__data__inner'>
                                    {data}
                                </div>
                            </div>
                            )
                        })
                    }
                    
                </div>
            </div>
            <div className='bringchange__sec4'>
                    <div className='bringchange__sec4__head'>
                        Govenment schemes we work with
                    </div>
                    <div className='bringchange__inner__inner'>
                        <div className='bringchange__sec4__content'>
                            { BringChangeData.cardData.map((ele)=>{
                                const {id,image,title}=ele;
                                return(<>
                                    <BringChangeCard1  id={id}  image={image}  title={title}  flag={0}  />
                                </>)
                            })}
                        </div>
                        <div className='bringchange__sec4__content1'>
                            
                            <Carousel 
                            responsive={responsive} 
                            draggable
                            autoPlay
                            autoPlaySpeed={2000}
                            pauseOnHover
                            infinite
                            showDots={true}
                            removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
                            {BringChangeData.cardData.map((ele) => {
                                const {id,image,title}=ele;
                                return(
                                    <BringChangeCard1  id={id}  image={image}  title={title} flag={1} />
                                )
                            })}
                            </Carousel>
                        </div>
                    </div>
            </div>
            <div className='bringchange__inner__inner'>
                <div className='bringchange__sec5'>
                    { BringChangeData.bigCardData.map((ele)=>{
                        const {id,image,heading,text}=ele;
                        return(
                            <>
                                <CsrCard3 id={id} heading={heading} img={img} text={text} flag={false}/>
                            </>
                        )
                    })}

                </div>
            </div>
            <Footer/>
        </div>
    </div>
    </>
);
}

export default BringChange;