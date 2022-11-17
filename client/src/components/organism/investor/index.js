import './index.css';
import Carousel from "react-multi-carousel";
import { useEffect, useState } from 'react';
import "./../../../../node_modules/react-multi-carousel/lib/styles.css";
import innerEach from './../../assets/store/investorData';
import img from './../../assets/image/test.png';
import Navbar from './../NavBar/index';
import Footer from './../../molecule/footer/index';
import Axios from 'axios';
import ApiLink from '../../assets/store/apiLink';
import LoadingScreen from '../../atom/loadingScreen';

const Investor=(props)=>{

    // scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const[update,setUpdate]=useState()
    const[updateLoading,setUpdateLoading]=useState(true)

    const[company,setCompany]=useState()
    const[companyLoading,setCompanyLoading]=useState(true)
    


    function requestGetter(x)
    {
        if(x==="update")
        {
            Axios.get(ApiLink+'/investor/update-data',
            {
            params:{
                name:"update",
            }
            }).then((res)=>{
                setUpdate(res.data);
                setUpdateLoading(false);
            })
        }
        else if(x==="company")
        {
            Axios.get(ApiLink+'/investor/company-data',
            {
            params:{
                name:"company",
            }
            }).then((res)=>{
                setCompany(res.data);
                setCompanyLoading(false);
            })
        }
    }

    useEffect(() => {
        requestGetter("update");
        requestGetter("company");
    }, []);


    const responsive = {
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1
        },
        smallLaptop: {
        breakpoint: { max: 1120, min: 900 },
        items: 3,
        slidesToSlide: 1
        },
        tablet: {
        breakpoint: { max: 900, min: 750 },
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
    <div className="inverstor__outer">
        <div className="investor__inner">
                <Navbar  navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
                
                <div className="investor__inner__section1">
                    <div className="investor__inner__section1__inner">
                        <div className="investor__inner__section1__inner__left">
                            INVESTORS
                        </div>
                        <div className='investor__inner__section1__inner__right'>
                            SHARE
                        </div>
                    </div>
                </div>
                <div className='investor__inner__inner'>
                <div className="investor__inner__section2">
                    <div className="investor__inner__section2__heading">
                        UPDATES
                    </div>
                    {
                        updateLoading ? (
                            <div className='loading__outer' >
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
                            removeArrowOnDeviceType={["tablet","smallLaptop", "mobile","desktop"]}>
                                {update.map((ele)=>{
                                    const{id,info}=ele;
                                    return(
                                        <div key={id} className='investor__inner__section2__each'>
                                            {info}
                                        </div>
                                    )
                                })}
                            </Carousel>
                        )
                    }
                </div>
                <div className='investor__inner__section3'>
                    <div className='investor__inner__section3__heading'>
                        Company financials
                    </div>
                    {
                        companyLoading ? (
                            <div className='loading__outer'>
                                <LoadingScreen/>    
                            </div>
                            
                        ):(
                        <div className='investor__inner__section3__displayouter'>
                            {company.map((ele)=>{
                                const{id,name,info}=ele;
                                
                                if(id%2===0)
                                {
                                    return(
                                        <div key={id} className='investor__inner__section3__display'>
                                            <div className='investor__inner__section3__display__left'>
                                                <div className='investor__inner__section3__display__left__top'>
                                                    <img src={img} className="investor__inner__section3__display__left__top__pic"/>
                                                </div>
                                                <div className='investor__inner__section3__display__left__bottom'>
                                                    {name}
                                                </div>
                                            </div>
                                            <div className='investor__inner__section3__display__right'>
                                                <div className='investor__inner__section3__display__right__top'>
                                                    {info}
                                                </div>
                                                <div className='investor__inner__section3__display__right__bottom'>
                                                    {innerEach.map((val)=>{
                                                        const{id,name}=val;
                                                        return(
                                                            <div key={id} className='investor__inner__section3__display__right__bottom__each'>
                                                                {name}
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                else
                                {
                                    return(
                                        <div key={id} className='investor__inner__section3__display' style={{flexWrap:"wrap-reverse"}}>
                                            <div className='investor__inner__section3__display__right'>
                                                <div className='investor__inner__section3__display__right__top'>
                                                    {info}
                                                </div>
                                                <div className='investor__inner__section3__display__right__bottom'>
                                                    {innerEach.map((val)=>{
                                                        const{id,name}=val;
                                                        return(
                                                            <div key={id} className='investor__inner__section3__display__right__bottom__each'>
                                                                {name}
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            <div className='investor__inner__section3__display__left'>
                                                <div className='investor__inner__section3__display__left__top'>
                                                    <img src={img} className="investor__inner__section3__display__left__top__pic"/>
                                                </div>
                                                <div className='investor__inner__section3__display__left__bottom'>
                                                    {name}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                        )
                    }
                    
                    
                </div>
            </div>
            <Footer/>
        </div>
    </div>
    </>
);
}

export default Investor;