
import './index.css';
import Navbar from './../NavBar/index';





import Footer from './../../molecule/footer/index';
import CsrSection1 from '../../molecule/csrSection1';
import CsrSection2 from '../../molecule/csrSection2';
import CsrCardData from './../../assets/store/csrcardData';
import CsrSection4 from '../../molecule/csrSection4';
import CsrInitiativeData from '../../assets/store/csrinitiativeData';
import CsrCard2 from '../../atom/csrCard2';
import CsrCard3 from '../../atom/csrCard3';
import csr_pdf_img from './../../assets/image/csr_img/csr_policy_img.svg';
import { useEffect } from 'react';

const Csr=(props)=>{


    // scroll to top

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    


return (
    <>
    <div className="csr__outer">
        <div className="csr__inner">
            <Navbar  navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>

            <CsrSection1/>

            <CsrSection2/>
            <div className='csr__inner__inner'  id="startegy" >
                <div style={{width:"100%",height:"fit-content",overflow:"hidden"}}>
                {CsrCardData.map((ele)=>{
                    const{id,heading,img,text,button}=ele;
                    return(
                        <CsrCard3 id={id} heading={heading} img={img} text={text} button={button} flag={true}/>
                    )
                })}
                </div>


            </div>
            <p id="hope"></p>
            <br></br>
            <br></br>
            <div className='csr__inner__inner__special'>
                <CsrSection4/>
            </div>
            
            <div className='csr__inner__inner' >

                <div className='csr__inner__section5' id="initiatives">
                    <div className='csr__inner__section5__heading'>
                        Our Initiatives
                    </div>
                    <div className='csr__inner__section5__display'  data-aos="fade-up">
                        {CsrInitiativeData.map((ele)=>{
                            const{id,img,heading,text}=ele;
                            return(
                                <CsrCard2 id={id} img={img} heading={heading} text={text}/>
                            )
                        })}
                    </div>
                </div>

                
            </div>
            <div className='csr__inner__section6' id="csr_policy">
                    <div className='csr__inner__section6__inner'>
                        <div className='csr__inner__section6__inner__each'  data-aos="fade-left">
                            <div className='csr__inner__section6__inner__each__left'>
                                Businesses:
                            </div>
                            <div className='csr__inner__section6__inner__each__left' style={{cursor:"pointer"}}>
                                CSR Policy <img src={csr_pdf_img} className="csr__pdf__img"/>
                            </div>
                        </div>

                        <div className='csr__inner__section6__inner__each'  data-aos="fade-right">
                            <div className='csr__inner__section6__inner__each__left'>
                                Sellebration:
                            </div>
                            <div className='csr__inner__section6__inner__each__left'  style={{cursor:"pointer"}}>
                                Transcending business <img src={csr_pdf_img} className="csr__pdf__img"/>
                            </div>
                        </div>
                    </div>

                </div>
            <Footer />
        </div>
    </div>
    </>
);
}

export default Csr;