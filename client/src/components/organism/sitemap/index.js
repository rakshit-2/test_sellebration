import './index.css';
import Footer from './../../molecule/footer/index';
import Navbar from './../NavBar/index';
import { useLocation,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import StaticModel from './../../assets/store/staticModel.json';
import { HashLink } from 'react-router-hash-link';




const Sitemap=(props)=>{
    const location = useLocation();
    const navigate =useNavigate();
    // scroll to top

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
return (
    <>
    <div className="home__outer">
        <div className="home__inner">
            <Navbar navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}  changeLang={props.changeLang} lang={props.lang} name={location.pathname} viewLang={props.viewLang}/>
            <div className='sitemap__inner__inner'>
                <div className='sitemap__inner__heading'>
                    <div className='sitemap__inner__heading__top'>
                        HOME / Sitemap
                    </div>
                    <div className='sitemap__inner__heading__mid'>
                        Sitemap
                    </div>
                    <div className='sitemap__inner__heading__bottom'>
                        <div className="sitemap__inner__heading__bottom__button">
                            Share
                        </div>
                    </div>
                </div>
                <div className='sitemap__line'>
                </div>
                <div className='sitemap__inner__display'>
                    {
                        StaticModel.english.sitemap.map((ele)=>{
                            const{id,label,link,each}=ele;
                            if(id===1)
                            {
                                return(
                                    <>
                                        <div key={id} className='sitemap__inner__display__each' >
                                            <div className='sitemap__inner__display__each__heading'>
                                                {label}
                                            </div>
                                            {
                                                each.map((elel)=>{
                                                    if(elel.label==="CSR Policy")
                                                    {
                                                        return (
                                                            <>
                                                            <div key={elel.id} className='sitemap__inner__display__each__inner'>
                                                                <FontAwesomeIcon icon={faCircleArrowRight} size="md" color="#2F528E" style={{cursor:"pointer"}} />{'\u00A0'}<HashLink to='/csr#csr_policy' smooth className='sitemap__inner__display__each__inner' onClick={()=>{navigate(elel.link)}}>{elel.label}</HashLink>
                                                            </div>
                                                            
                                                            </>
                                                        );
                                                    }
                                                    else if(elel.label==="Stories of Hope")
                                                    {
                                                        return (
                                                            <>
                                                            <div key={elel.id} className='sitemap__inner__display__each__inner'>
                                                                <FontAwesomeIcon icon={faCircleArrowRight} size="md" color="#2F528E" style={{cursor:"pointer"}} />{'\u00A0'}<HashLink to='/csr#hope' smooth className='sitemap__inner__display__each__inner' onClick={()=>{navigate(elel.link)}}>{elel.label}</HashLink>
                                                            </div>
                                                            
                                                            </>
                                                        );
                                                    }
                                                    else if(elel.label==="Our Strategy")
                                                    {
                                                        return (
                                                            <>
                                                            <div key={elel.id} className='sitemap__inner__display__each__inner'>
                                                                <FontAwesomeIcon icon={faCircleArrowRight} size="md" color="#2F528E" style={{cursor:"pointer"}} />{'\u00A0'}<HashLink to='/csr#startegy' smooth className='sitemap__inner__display__each__inner' onClick={()=>{navigate(elel.link)}}>{elel.label}</HashLink>
                                                            </div>
                                                            
                                                            </>
                                                        );
                                                    }
                                                    else
                                                    {
                                                        return(
                                                            <>
                                                                <div key={elel.id} className='sitemap__inner__display__each__inner' onClick={()=>{navigate(elel.link)}}>
                                                                    <FontAwesomeIcon icon={faCircleArrowRight} size="md" color="#2F528E" style={{cursor:"pointer"}} />{'\u00A0'}{elel.label}
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                })
                                            }
                                        </div>
                                    </>
                                )
                            }
                            else if(id===2 || id===3)
                            {
                                return(
                                    <>
                                        <div key={id} className='sitemap__inner__display__each'>
                                            {
                                                each.map((elel)=>{
                                                    return(
                                                        <>
                                                            <div className='sitemap__inner__display__each__heading2'  onClick={()=>{navigate(elel.link)}} >
                                                                {elel.label}
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </>
                                )
                            }
                            else
                            {
                                return(
                                    <>
                                        <div key={id} className='sitemap__inner__display__each' >
                                            <div className='sitemap__inner__display__each__heading'>
                                                {label}
                                            </div>
                                            {
                                                each.map((elel)=>{
                                                    return(
                                                        <>
                                                            <div key={elel.id} className='sitemap__inner__display__each__inner' onClick={()=>{navigate(elel.link)}}>
                                                                <FontAwesomeIcon icon={faCircleArrowRight} size="md" color="#2F528E" style={{cursor:"pointer"}} />{'\u00A0'}{elel.label}
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </>
                                )
                            }
                        })
                    }
                    
                </div>
            </div>  
            <Footer changeLang={props.changeLang} lang={props.lang} name={location.pathname} viewLang={props.viewLang}/>
        </div>
    </div>
    </>
);
}

export default Sitemap;