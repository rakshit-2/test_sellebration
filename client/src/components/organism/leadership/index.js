
import './index.css';
import Navbar from './../NavBar/index';
import Axios from 'axios';
import ApiLink from '../../assets/store/apiLink';
import {useState,useEffect} from 'react';
import { HashLink } from 'react-router-hash-link';
import img from './../../assets/image/bucket/Leadership.jpeg';
import Carousel from "react-multi-carousel";
import LeadershipPanelData from './../../assets/store/leadershippanelData';
import LeadershipCard1 from '../../atom/leadershipCard1';
import LeaderShipData from './../../assets/store/LeadershipData';
import Footer from './../../molecule/footer/index';
import LoadingScreen from '../../atom/loadingScreen';
import profile from './../../assets/image/profile.png';
import { useNavigate,useLocation  } from 'react-router-dom';
import staticModale from './../../assets/store/staticModel.json';


const Leadership=(props)=>{


    const navigate = useNavigate();
    const location = useLocation();
    // scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    

    
    const[director,setDirector]=useState([])
    const[head,setHead]=useState([])
    const[leader,setLeader]=useState([])
    const[vanguard,setVanguard]=useState([])

    const[loadingLeadership,setLoadingLeadership]=useState(true);

    function getterLeadership(x,i)
    {
        Axios.get(ApiLink+'/leadership/detail-each',
        {
        params:{
            name:x,
            language:props.lang,
        }
        }).then((res)=>{
        if(i==0)
        {
            setDirector(res.data);
            setLoadingLeadership(false)
        }
        else if(i===2)
        {
            setHead(res.data);
        }
        else if(i===1)
        {
            setLeader(res.data);
        }
        else if(i===3)
        {
            setVanguard(res.data);
        }
        
        });
    }


    function getAllData()
    {
        var li=["director",'head','leader','vanguard']
        for(var i=0;i<4;i++)
        {
            getterLeadership(li[i],i);
        }
    }
    useEffect(() => {
        getAllData();
    }, []);

    const[val,setVal]=useState("");
    function panelClicked(id)
    {
        var ele=parseInt(id);
        var ss="#"+ele.toString();
        setVal(ss);
    }

    const responsive = {
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1
        },
        tablet: {
        breakpoint: { max: 1024, min: 750 },
        items: 1,
        slidesToSlide: 1
        },
        mobile: {
        breakpoint: { max: 749, min: 0 },
        items: 1,
        slidesToSlide: 1
        }
    };
    const responsive2 = {
        tablet: {
        breakpoint: { max: 1024, min: 750 },
        items: 2,
        slidesToSlide: 1
        },
        mobile: {
        breakpoint: { max: 749, min: 0 },
        items: 2,
        slidesToSlide: 1
        }
    };


    function langChange()
    {
        getAllData();
        return;
    }

    if(props.routeName==="/leadership")
    {
        langChange();
        props.changeRouteName();
    }





return (
    <>
    <div className='leadership__outer'>
        <div className='leadership__inner'>
        <Navbar navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}  changeLang={props.changeLang} lang={props.lang} name={location.pathname} viewLang={props.viewLang}/>
            <div className='leadership__inner__seaction1' >
                <img src={img} className="leadership__top__image"/>
                <div className='leadership__inner__seaction1__inner'>
                    <div className='leadership__inner__seaction1__button' onClick={()=>{navigate('/ourprofile')}}>
                        {staticModale[props.lang].leadership[0]}
                    </div>
                    <HashLink to='/visionvalue#message' smooth  className='leadership__inner__seaction1__button'>
                        {staticModale[props.lang].leadership[1]}
                    </HashLink>
                </div>
            </div>
            
            <div className='leadership__inner__seaction2'>
                {LeadershipPanelData.map((ele)=>{
                    const{id,name}=ele;
                    return(
                        <a href={val} key={id} className='leadership__inner__seaction2__button' onClick={()=>{panelClicked(id)}}>
                            {name}
                        </a>
                    )
                })}
            </div>
            <div className='leadership__inner__inner'>
                <div className='leadership__inner__seaction3'>
                    <p id="0"></p>
                    <div className="leadership__inner__seaction3__innerheading">
                    {staticModale[props.lang].leadership[2]}
                    </div>
                    <div className="leadership__inner__seaction3__innerdisplay" data-aos="fade-up">
                        {
                            loadingLeadership ? (
                                <div className='loading__outer'>
                                    <LoadingScreen/>    
                                </div>
                                
                            ):(
                            director.map((ele)=>{
                                const{id,jobtitle,name}=ele;
                                return(
                                    <><LeadershipCard1 flag={0} name={name} img={profile} job={jobtitle} /></>
                                )
                            })
                            )
                        }
                    </div>
                    <div className="leadership__inner__seaction3__innerdisplay2" data-aos="fade-up">
                        {
                            loadingLeadership ? (
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
                                    {director.map((ele)=>{
                                        const{id,jobtitle,name}=ele;
                                        return(
                                            <><LeadershipCard1 flag={1} name={name} img={profile} job={jobtitle} /></>
                                        )
                                    })}
                                </Carousel>
                            )
                        }
                    </div>
                    <p id="1"></p><br></br><br></br>
                    <div className="leadership__inner__seaction3__innerheading">
                    {staticModale[props.lang].leadership[3]}
                    </div>
                    <div className="leadership__inner__seaction3__innerdisplay" data-aos="fade-up"> 
                        {
                            loadingLeadership ? (
                                <div className='loading__outer'>
                                    <LoadingScreen/>    
                                </div>
                                
                            ):(
                            head.map((ele)=>{
                                const{id,jobTitle,name}=ele;
                                return(
                                    <><LeadershipCard1 flag={0} name={name} img={profile} job={jobTitle} /></>
                                )
                            })
                            )
                        }
                    </div>
                    <div className="leadership__inner__seaction3__innerdisplay2" data-aos="fade-up">
                        {
                            loadingLeadership ? (
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
                                    {head.map((ele)=>{
                                        const{id,jobTitle,name}=ele;
                                        return(
                                            <><LeadershipCard1  flag={1} name={name} img={profile} job={jobTitle} /></>
                                        )
                                    })}
                                </Carousel>
                            )
                        }
                    </div>
                    <p id="2"></p><br></br><br></br>
                    <div className="leadership__inner__seaction3__innerheading" >
                        {staticModale[props.lang].leadership[4]}
                    </div>
                    <div className="leadership__inner__seaction3__innerdisplay" data-aos="fade-up">
                        {
                            loadingLeadership ? (
                                <div className='loading__outer'>
                                    <LoadingScreen/>    
                                </div>
                                
                            ):(
                                leader.map((ele)=>{
                                const{id,jobTitle,name}=ele;
                                return(
                                    <><LeadershipCard1 name={name} img={profile} job={jobTitle} /></>
                                )
                            })
                            )
                        }
                    </div>
                    <div className="leadership__inner__seaction3__innerdisplay2" data-aos="fade-up">
                        {
                            loadingLeadership ? (
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
                                    {leader.map((ele)=>{
                                        const{id,jobTitle,name}=ele;
                                        return(
                                            <><LeadershipCard1  flag={1} name={name} img={profile} job={jobTitle} /></>
                                        )
                                    })}
                                </Carousel>
                            )
                        }
                    </div>
                    <p id="3"></p><br></br><br></br>
                    <div className="leadership__inner__seaction3__innerheading">
                        {staticModale[props.lang].leadership[5]}
                    </div>
                    <div className="leadership__inner__seaction3__innerdisplayv" data-aos="fade-up">
                        <div className='leadership__inner__seaction3__innerdisplay__text'>
                            {staticModale[props.lang].leadership[6]}
                        </div>
                        <div className='leadership__inner__seaction3__innerdisplay__dis'>
                        {
                            loadingLeadership ? (
                                <div className='loading__outer'>
                                    <LoadingScreen/>    
                                </div>
                            ):(
                                vanguard.map((ele)=>{
                                const{id,name}=ele;
                                return(
                                    <>
                                    <div key={id} className='leadership__inner__seaction3__innerdisplay__dis__each'>
                                        {name}
                                    </div>
                                    </>
                                    )
                                })
                            )
                        }
                        </div>
                        <div className='leadership__inner__seaction3__innerdisplay__dis2'>
                        {
                            loadingLeadership ? (
                                <div className='loading__outer'>
                                    <LoadingScreen/>    
                                </div>
                            ):(
                                <Carousel 
                                responsive={responsive2} 
                                draggable
                                autoPlay
                                autoPlaySpeed={2000}
                                pauseOnHover
                                infinite
                                showDots={true}
                                removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
                                    {vanguard.map((ele)=>{
                                        const{id,name}=ele;
                                        return(
                                            <>
                                            <div key={id} style={{margin:"auto",marginTop:"2rem",marginBottom:"4rem"}} className='leadership__inner__seaction3__innerdisplay__dis__each'>
                                                {name}
                                            </div>
                                            </>
                                        )
                                    })}
                                </Carousel>
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
            <Footer  changeLang={props.changeLang} lang={props.lang} name={location.pathname} viewLang={props.viewLang}/>
        </div>
    </div>
    </>
);
}

export default Leadership;