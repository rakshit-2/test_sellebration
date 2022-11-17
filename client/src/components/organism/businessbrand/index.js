
import './index.css';
import Navbar from './../NavBar/index';
import Footer from './../../molecule/footer/index';
import BusinessBrandData from '../../assets/store/businessbrandData';
import BusinessbBandCard1 from '../../atom/businessbrandCard1';
import test from './../../assets/image/test.png'
import { useState,useEffect} from 'react';

const BusinessBrand=(props)=>{


  // scroll to top

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);




    const[readMore,setReadMore]=useState({
                                        small:"flex",
                                        larg:"none"
    })
    const[count,setCount]=useState(0);
    const[text,setText]=useState('Read More')

    function showMoreCheck()
    {
        if(count%2!=0)
        {
            setReadMore({small:"none",larg:"flex"});
            setText("Read Less");
        }
        else
        {
            setReadMore({small:"flex",larg:"none"});
            setText("Read More");
        }
        setCount(count+1);
    }
return (
    <>     
    <div className="BusinessBrand__outer">
        <div className="BusinessBrand__inner">
            <Navbar  navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
            <div className="BusinessBrand__sec1">
                <div className="BusinessBrand__sec1__inner">
                    <div className="BusinessBrand__sec1__head">
                            Our Businesses
                    </div>
                    <div className="BusinessBrand__sec1__content">
                        Contrary to popular belief, Lorem Ipsum is not
                        simply random text. It has roots in a piece of classical
                        Latin literature from 45 BC, making it over 2000 years old
                        . Richard McClintock, a Latin professor at Hampden-Sydney 
                        College in Virginia, looked up one of the more obscure 
                        e source.
                    </div>
                    <div className="BusinessBrand__sec1__buttons">
                        <div className="BusinessBrand__sec1__button" >
                            COMPANIES
                        </div>
                        <div className="BusinessBrand__sec1__button" style={{backgroundColor:"grey"}} >
                            BRANDS
                        </div>
                    </div>
                </div>
            </div>
            <div className="BusinessBrand__sec2">
                <div className="BusinessBrand__sec2__inner">
                    <div className="BusinessBrand__sec2__head">
                        <select className="BusinessBrand__sec2__head__left">
                            <option>view by sector</option>
                            <option>view by sector</option>
                            <option>view by sector</option>
                            <option>view by sector</option>
                        </select>
                        <div className="BusinessBrand__sec2__head__right">
                            <input type="text" placeholder="Search Company" className="BusinessBrand__search__field"/>
                        </div>
                    </div>
                    <div className="BusinessBrand__sec2__base">
                        <div className='BusinessBrand__sec2__base__outer'>
                            <div className="BusinessBrand__sec2__base__left">
                                    {BusinessBrandData.card.map((ele)=>{
                                        const{id,info}=ele;
                                        return(
                                            <BusinessbBandCard1 id={id} info={info}/>
                                        )
                                    })}
                            </div>
                        </div>
                        <div className="BusinessBrand__sec2__base__right">
                            <div className='BusinessBrand__sec2__base__right__top'>
                                <img src={test} className="BusinessBrand__sec2__base__right__top__img"></img>
                            </div>
                            <div className='BusinessBrand__sec2__base__right__text'>
                                <span  style={{display:readMore.small,transform:"0.4s"}}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Contrary to popular belief, Lorem Ipsum is not 
                                    simply random text...
                                </span>
                                <span style={{display:readMore.larg,transform:"0.4s"}}> 
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Contrary to popular belief, Lorem Ipsum is not 
                                    simply random text...Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Contrary to popular belief, Lorem Ipsum is not 
                                    simply random text...Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Contrary to popular belief, Lorem Ipsum is not 
                                    simply random text...Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Contrary to popular belief, Lorem Ipsum is not 
                                    simply random text...
                                </span>
                            </div>
                            <div className='BusinessBrand__sec2__base__right__out'>
                                <div className='BusinessBrand__sec2__base__right__rmore' onClick={()=>{showMoreCheck()}}>
                                    {text}
                                </div>
                            </div>
                            <div className='BusinessBrand__sec2__base__right__product'>
                                <div className='BusinessBrand__sec2__base__right__product__head'>
                                    Products
                                </div>
                                <div className='BusinessBrand__sec2__base__right__product__base'>
                                    {BusinessBrandData.products.map((ele)=>{
                                            const{id,info}=ele;
                                            return(
                                                <div className='BusinessBrand__sec2__base__right__product__base__each'>
                                                    <div className='BusinessBrand__sec2__base__right__product__base__each__left'>
                                                        
                                                    </div>
                                                    <div className='BusinessBrand__sec2__base__right__product__base__each__right'>
                                                    Lorem Ipsum
                                                    </div>
                                                </div>
                                            )
                                        })}
                                </div>
                            </div>
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

export default BusinessBrand;