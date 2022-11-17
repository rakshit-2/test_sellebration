
import './index.css';
import Navbar from './../NavBar/index';
import Carousel from "react-multi-carousel";
import Footer from './../../molecule/footer/index';
import cover_back from './../../assets/image/innovation_img/innovation_img1.png';
import image from '../../assets/image/innovation_img/innovation_img.svg';
import Innovationdata from '../../assets/store/innovationData';
import InnovationCard1 from '../../atom/innovationCard1';
import InnovationCard2 from '../../atom/innovationCard2';
import { useEffect,useState } from 'react';
import Axios from 'axios';
import ApiLink from '../../assets/store/apiLink';
import LoadingScreen from '../../atom/loadingScreen';
import img from './../../assets/image/test.png';
import innovation_back from './../../assets/image/innovation_img/innovation_back.png';
import { useNavigate } from 'react-router-dom';



const Innovation=(props)=>{

    const navigate = useNavigate();
    const[insight,setInsight]=useState()
    const[insightLoading,setInsightLoading]=useState(true)

    const[card,setCard]=useState()
    const[cardLoading,setCardLoading]=useState(true)

    // scroll to top

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function requestGetter(x)
    {
        if(x==="insight")
        {
            Axios.get(ApiLink+'/innovation/insight-data',
            {
            params:{
                name:"insight",
            }
            }).then((res)=>{
                setInsight(res.data);
                setInsightLoading(false);
            })
        }
        else if(x==="card")
        {
            Axios.get(ApiLink+'/innovation/card-data',
            {
            params:{
                name:"card",
            }
            }).then((res)=>{
                setCard(res.data);
                setCardLoading(false);
            })
        }
    }

    useEffect(() => {
        requestGetter("insight");
        requestGetter("card");
    }, []);

    const responsive = {
        tablet: {
        breakpoint: { max: 1024, min: 750 },
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
    <div className='innovation_outer'>
        <div className='innovation_inner'>

       
                <Navbar  navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
                <div className='innovation__sec1'>
                    <div className='innovation__sec1__top'>
                        <img src={innovation_back} style={{width:"100%",height:"100%",position:"absolute"}}/>
                        <div className='innovation__sec1__top__inner'>
                            <div className='innovation__sec1__top__left'>
                                Innovation
                            </div>
                            <div className='innovation__sec1__top__right'>
                                <div className='innovation__sec1__top__right__inner'>
                                Share
                                <img style={{padding:"0 0 0 1rem"}} src={image}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='innovation__sec1__bottom'>
                    <img src={cover_back} className="innovation__sec1__bottom__image"/>
                        <div className='innovation__sec1__bottom__inner' data-aos="fade-up">
                            <div className='innovation__sec1__bottom__inner_head'>
                                Innovation insights
                            </div>
                            <div className='innovation__sec1__bottom__inner_title'>
                                <div className='innovation__sec1__bottom__inner_title__inner'onClick={()=>{navigate('/stories')}}>
                                    More stories
                                </div>
                            </div>
                            {
                                insightLoading ? (

                                <div className='loading__outer'>
                                    <LoadingScreen/>    
                                </div>
                                    
                                ):(
                                <>
                                    <div className='innovation__sec1__bottom__inner_card' >
                                        {insight.map((ele)=>{
                                            const{id,info}=ele;
                                            return(
                                                <>
                                                    <InnovationCard1 flag={0} id={id} img={img} title={info}/>
                                                </>
                                            )
                                        })}
                                    </div>
                                    <div className='innovation__sec1__bottom__inner_card2' >
                                    <Carousel 
                                    responsive={responsive} 
                                    draggable
                                    autoPlay
                                    autoPlaySpeed={2000}
                                    pauseOnHover
                                    infinite
                                    showDots={true}
                                    removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
                                        {insight.map((ele)=>{
                                            const{id,info}=ele;
                                            return(
                                                <>
                                                    <InnovationCard1 flag={1} id={id} img={img} title={info}/>
                                                </>
                                            )
                                        })}
                                    </Carousel>
                                    </div>
                                </>
                                )
                            }
                            <div className='innovation__sec1__bottom__inner_title2'>
                                <div className='innovation__sec1__bottom__inner_title__inner2' onClick={()=>{navigate('/stories')}}>
                                    More stories
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    cardLoading ? (

                    <div className='loading__outer'>
                        <LoadingScreen/>    
                    </div>
                        
                    ):(
                        <>
                        {card.map((ele)=>{
                            const{id,name,info}=ele;
                            if(id%2===0)
                            {
                                return(
                                    <InnovationCard2 flag={0} id={id} name={name} info={info} img={img} />
                                )
                            }
                            else
                            {
                                return (
                                    <InnovationCard2 flag={1} id={id} name={name} info={info} img={img} />
                                )
                            }
                        })}
                        </>
                    )
                }
                

            <Footer/>
        </div>
    </div>
    </>
);
}

export default Innovation;