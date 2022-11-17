
import './index.css';
import { useEffect } from 'react';
import Navbar from './../NavBar/index';
import Footer from './../../molecule/footer/index';
import milestoneData from './../../assets/store/milestoneData';



const Milestone=(props)=>{


    // scroll to top

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



return (
    <>
    <div className='milestone__outer'>
        <div className='milestone__inner'>
            <Navbar  navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
            <div className='milestone__inner__section1'>
                <div className='milestone__inner__section1__inner'>
                    <div className='milestone__inner__section1__left'>
                        <div className='milestone__inner__section1__left__top'>
                            Home / About us
                        </div>
                        <div className='milestone__inner__section1__left__bottom'>
                            Milestones
                        </div>
                    </div>
                    <div className='milestone__inner__section1__right'></div>
                </div>
            </div>
            <div className='milestone__inner__inner'>
                    
                <div className="milestone__display__inner">
                    <div className="milestone__display__inner__middle"></div>
                    {milestoneData.map((ele) => {
                        const {id,year,data}=ele;
                        return(
                            <>
                            <div key={id} className="milestone__display__inner__heading__inner">
                                {year}
                            </div>
                            {data.map((elel) => {
                            const {id,info}=elel;
                            console.log(id,info)
                            if(id%2===0)
                            {
                                return(
                                <>
                                <div key={id} className="milestone__display__inner__inner1" data-aos="fade-right">
                                    <div className="milestone__display__inner__inner__right">
                                        <div className="milestone__display__inner__inner__ele"></div>
                                        <div className="milestone__display__inner__inner__info">
                                        {info}
                                        </div>
                                    </div>
                                </div>
                                </>
                                )
                            }
                            else
                            {
                                return(
                                <div key={id} className="milestone__display__inner__inner2"  data-aos="fade-left">
                                    <div className="milestone__display__inner__inner__left">
                                        <div className="milestone__display__inner__inner__info">
                                        {info}
                                        </div>
                                        <div className="milestone__display__inner__inner__ele"></div>
                                    </div>
                                </div>
                                )
                            }
                            })}
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

export default Milestone;