
import './index.css';
import Axios from 'axios';
import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


import ApiLink from './../../assets/store/apiLink';
import Carousel from "react-multi-carousel";
import "./../../../../node_modules/react-multi-carousel/lib/styles.css";
import map from './../../assets/image/home_img/map1.svg';
import HomePanelData from './../../assets/store/homepanelData';
import HomeDisplayData from './../../assets/store/homedisplayData';
import HomeCard1 from '../../atom/homeCard1';
import HomeLatestData from './../../assets/store/homelatestData';
import HomeCard2 from './../../atom/homeCard2/index';
import twitter from './../../assets/image/home_img/twitter.svg';
import facebook from './../../assets/image/home_img/facebook.svg';
import HomeCard3 from './../../atom/homeCard3/index';
import HomeNewsData from './../../assets/store/homenewsData';
import Footer from './../../molecule/footer/index';
import Navbar from './../NavBar/index';
import LoadingScreen from './../../atom/loadingScreen/index'

const Home=(props)=>{


    const navigate = useNavigate();
  // scroll to top

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



    const[recommended,setRecommended]=useState([<></>])
    const[csr,setCsr]=useState([<></>])
    const[leadership,setLeadership]=useState([<></>])
    const[sustainability,setSustainability]=useState([<></>])

    const[latestNews,setLatestNews]=useState([<></>])



    const li=[recommended,leadership,csr,sustainability];




    const[loadingOurStories,setLoadingOurStories]=useState(true);
    const[loadingLatestNews,setLoadingLatestNews]=useState(true)

    function getterOurStories(x,i)
    {
        Axios.get(ApiLink+'/home/our-stories/OurStories',
        {
        params:{
            name:x,
        }
        }).then((res)=>{
        if(i==0)
        {
            setRecommended(res.data);
            setLoadingOurStories(false);
        }
        else if(i==2)
        {
            setCsr(res.data);
        }
        else if(i==1)
        {
            setLeadership(res.data);
        }
        else if(i==3)
        {
            setSustainability(res.data);
        }
        
        });
    }
    useEffect(() => {
        var lis=["recommended",'leadership','csr','sustainability']
        for(var i=0;i<4;i++)
        {
        getterOurStories(lis[i],i);
        }
       
    }, []);







    function getterLatestNews()
    {
        Axios.get(ApiLink+'/home/latest-news',
        {
            test:"test",
        }).then((res)=>{
            setLatestNews(res.data);
            setLoadingLatestNews(false);
            return;
        })

    }
    useEffect(() => {
        getterLatestNews();
        
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

    const[clickedPanel,setClickedPanel]=useState(0);
    function panelClicked(id)
    {
        setClickedPanel(parseInt(id));
    }


    return (
        <>
        <div className="home__outer">
            <div className="home__inner">
            <Navbar navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
            <div className="home__inner__section1">
                <div className="home__inner__section1__img__outer">
                    <img src={map} className="home__inner__section1__img"/>
                </div>
            </div>
                <div className="home__inner__inner">
                    
                    <div className="home__inner__section2" data-aos="fade-up"> 
                        <div className="home__inner__section2__heading">
                            Our Stories
                        </div>
                        <div className="home__inner__section2__panel">
                            <div className="home__inner__section2__panel__left">
                                {
                                    HomePanelData.map((item) => {
                                        const {id,name}=item;
                                        if(id===clickedPanel)
                                        {
                                            return(
                                                <>
                                                    <div key={id}className="home__inner__section2__panel__left__each" style={{borderBottom:"2px solid orange"}} onClick={()=>{panelClicked(id,name)}}>
                                                        {name}
                                                    </div>
                                                </>
                                                )  
                                        }
                                        else
                                        {
                                            return(
                                                <>
                                                    <div key={id}className="home__inner__section2__panel__left__each" onClick={()=>{panelClicked(id,name)}}>
                                                        {name}
                                                    </div>
                                                </>
                                                )
                                        }
                                    })
                                }
                                
                            </div>
                            <div className="home__inner__section2__panel__right">
                                <div className="home__inner__section2__panel__right__button" onClick={()=>{navigate('/stories')}}>
                                    View All
                                </div>
                            </div>
                        </div>
                        <div className="home__inner__section2__display">
                        {
                            loadingOurStories ? (
                                <div className='loading__outer'>
                                    <LoadingScreen/>    
                                </div>
                                
                            ):(
                                <Carousel 
                                responsive={responsive} 
                                draggable
                                autoPlay
                                autoPlaySpeed={2000}
                                pauseOnHover
                                infinite
                                showDots={true}
                                removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
                                {li[clickedPanel].map((ele) => {
                                    const {id,heading,info}=ele;
                                    return(
                                        <HomeCard1 id={id} heading={heading} info={info}/>
                                    )
                                })}
                                </Carousel>
                            )
                        }
                        
                        </div>
                    </div>
                    <div className="home__inner__section3">
                        <div className="home__inner__section3__heading" data-aos="fade-up">
                            Latest news
                        </div>
                        <div className='home__inner__section3__display' >
                            <div className='home__inner__section3__display__left' data-aos="fade-right">
                            {
                                loadingLatestNews ? (
                                    <div className='loading__outer'>
                                        <LoadingScreen/>    
                                    </div>
                                    
                                ):(
                                latestNews.slice(0, 3).map((ele) => {
                                    const {id,date,info}=ele;
                                    var monthLis=["January","February","March","April","May","June","July","August","September","October","November","December"]
                                    var month=date.slice(5, 7);
                                    var day=date.slice(8,10);
                                    var dateValue="";
                                    if(day[1]==='2')
                                    {
                                        dateValue=parseInt(day).toString()+'nd'+" "+monthLis[parseInt(month)-1];
                                    }
                                    else if(day[1]==='3')
                                    {
                                        dateValue=parseInt(day).toString()+'rd'+" "+monthLis[parseInt(month)-1];
                                    }
                                    else
                                    {
                                        dateValue=parseInt(day).toString()+'st'+" "+monthLis[parseInt(month)-1];
                                    }
                                    console.log(dateValue)
                                    return(
                                        <>
                                            <HomeCard2 id={id} date={dateValue} info={info}  />
                                        </>
                                    )
                                })
                                )
                            }
                            <div className='home__inner__section3__viewmore'>
                                <div className='home__inner__section3__viewmorebutton' onClick={()=>{navigate('/mediarelease')}}>
                                    View All
                                </div>
                            </div>
                            </div>
                            <div className='home__inner__section3__display__right' data-aos="fade-left">
                                <iframe className='home__inner__section3__display__right__vid' src="https://www.youtube.com/embed/HlWISmjCfb8" title="Kanye West - Heartless (Lyrics)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <div className='home__inner__section3__display__right__vidbottom'>
                                    <div className='home__inner__section3__display__right__vidbottom__button'>
                                        View More Videos
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* section 4 */}
                    <div className='home__inner__section4'>
                        <div className='home__inner__section4__left' data-aos="fade-right">
                            <img src={twitter} className="home__inner__section4__img"/>
                            <div className='home__inner__section4__left__out'>
                                {HomeNewsData.map((ele) => {
                                    const {id,time,info}=ele;
                                    return(
                                        <>
                                            <HomeCard3 id={id} time={time} info={info}  />
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='home__inner__section4__left' data-aos="fade-left">
                            <img src={facebook} className="home__inner__section4__img"/>
                            <div className='home__inner__section4__left__out'>
                                {HomeNewsData.map((ele) => {
                                    const {id,time,info}=ele;
                                    return(
                                        <>
                                            <HomeCard3 id={id} time={time} info={info}  />
                                        </>
                                    )
                                })}
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

export default Home;