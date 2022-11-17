
import './index.css';
import Navbar from './../NavBar/index';
import Footer from './../../molecule/footer/index';
import ContactUsSection1 from '../../molecule/contactusSection1';
import ContactUsData from '../../assets/store/contactusData';
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from 'react';
import alert from './../../assets/image/event/alert.svg';
import Axios from 'axios';
import ApiLink from './../../assets/store/apiLink';


const ContactUs=(props)=>{



    // scroll to top

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[organisation,setOrganisation]=useState("");
    const[contactNumber,setContactNumber]=useState("");
    const[queryIsFor,setQueryIsFor]=useState("Select Company");
    const[queryType,setQueryType]=useState("Select Query");
    const[yourQuery,setYourQuery]=useState("");
    const[errorMessage,setErrorMessage]=useState("fill all * marked fields")
    const[errHiding,setErrHiding]=useState("none");
    // const[confirmMessage,setConfirmMessage]=useState("none");
    const[submitClickedChange,setSubmitClickedChange]=useState({
                                                                submit:"flex",
                                                                loading:"none",
                                                                success:"none",        
    });
    
  


    function onChange(value) {
        console.log("Captcha value:", value);
    }


    function checker(e,name)
    {
        switch(name) {
            case "Name":
                setName(e);
                break;
            case "Organisation":
                setOrganisation(e);
                break;
            case "Email":
                setEmail(e);
                break;
            case "Contact Number":
                setContactNumber(e);
                break;
            default:
                console.log("must not run if printing check file contactus/index.js default case")
          }
    }






    function hidingError()
    {
        setErrHiding("none");
    }

    function changeSubmit()
    {
        setSubmitClickedChange({submit:"flex",loading:"none",success:"none"});
    }

    function changeSubmit()
    {
        setSubmitClickedChange({submit:"flex",loading:"none",success:"none"});
    }


    function ContactUsSubmit()
    {
        if(name==="")
        {
            setErrHiding("flex");
            setErrorMessage("Fill Name Field");
            setTimeout(hidingError, 3000);
            return;
        }
        else
        {
            let flagname=/^[A-Z a-z]+$/;
            if(flagname.test(name)===false)
            {
                setErrHiding("flex");
                setErrorMessage("Fill Name Field With A-Z/a-Z");
                setTimeout(hidingError, 3000);
                return;
            }
        }

        if(email==="")
        {
            setErrHiding("flex");
            setErrorMessage("Fill Email Field");
            setTimeout(hidingError, 3000);
            return;
        }
        else
        {
            var emailCheck=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(emailCheck.test(email)===false)
            {
                setErrHiding("flex");
                setErrorMessage("Fill Email Field With @abc@example.com");
                setTimeout(hidingError, 3000);
                return;
            }
        }
        // organization captcha left

        if(contactNumber!=="")
        {
            if(contactNumber.length<10 && contactNumber>15)
            {
                setErrHiding("flex");
                setErrorMessage("Fill Contact Number 15<num>10");
                setTimeout(hidingError, 3000);
                return;
            }
        }


        if(queryIsFor==="Select Company")
        {
            setErrHiding("flex");
            setErrorMessage("Select Company Name");
            setTimeout(hidingError, 3000);
            return;
        }
        
        
        if(queryType==="Select Query")
        {
            setErrHiding("flex");
            setErrorMessage("Select Quary Type");
            setTimeout(hidingError, 3000);
            return;
        }


        if(yourQuery==="")
        {
            setErrHiding("flex");
            setErrorMessage("Your Query field is Empty");
            setTimeout(hidingError, 3000);
            return;
        }

        setSubmitClickedChange({submit:"none",loading:"flex",success:"none"})
        Axios.post(ApiLink+'/contact-us/full-data',
        {
            name:name,
            email:email,
            org:organisation,
            contact:contactNumber,
            qfor:queryIsFor,
            qtype:queryType,
            yourQ:yourQuery,

        }).then((res)=>{
            setSubmitClickedChange({submit:"none",loading:"none",success:"flex"});
            setTimeout(changeSubmit, 3000);
        })


    }

    return (
    <>
    <div className="contactus__outer">
        <div className="contactus__inner">

            <Navbar  navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
            
            <ContactUsSection1/>
            
            <div className='contactus__inner__seaction2'>
                <div className='contactus__inner__seaction2__inner'>
                    <div className='contactus__inner__seaction2__heading'>
                        Write to us
                    </div>
                    <div className='contactus__inner__seaction2__dispaly'>
                        {ContactUsData.input.map((ele)=>{
                            const{id,name,type,star,placeholder,inputfield}=ele;
                            return(
                                <div key={id} className='contactus__inner__seaction2__dispaly__each'>
                                    <div className='contactus__inner__seaction2__dispaly__each__heading'>
                                        {name}<span style={{color:"red",display:`${star}`}}>*</span>
                                    </div>
                                    <input type={type} placeholder={placeholder} className='contactus__inner__seaction2__dispaly__each__input' onChange={(e)=>{checker(e.target.value,name)}} />
                                </div>
                            )
                        })}



                        <div className='contactus__inner__seaction2__dispaly__each'>
                            <div className='contactus__inner__seaction2__dispaly__each__heading'>
                                Query is for<span style={{color:"red"}}>*</span>
                            </div>
                            <select className='contactus__inner__seaction2__dispaly__each__input' onChange={(e)=>{setQueryIsFor(e.target.value)}}>
                                {ContactUsData.selectCompany.map((ele)=>{
                                    const{id,name}=ele;
                                    return(
                                        <option key={id} value={name}>{name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='contactus__inner__seaction2__dispaly__each'>
                            <div className='contactus__inner__seaction2__dispaly__each__heading'>
                                Query type<span style={{color:"red"}}>*</span>
                            </div>
                            <select className='contactus__inner__seaction2__dispaly__each__input'  onChange={(e)=>{setQueryType(e.target.value)}}>
                                {ContactUsData.selectQuery.map((ele)=>{
                                    const{id,name}=ele;
                                    return(
                                        <option key={id} value={name}>{name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='contactus__inner__seaction2__dispaly__each'>
                            <div className='contactus__inner__seaction2__dispaly__each__heading'>
                                Your query<span style={{color:"red"}}>*</span>
                            </div>
                            <textarea type={ContactUsData.selectTextarea.type} placeholder={ContactUsData.selectTextarea.placeholder} style={{height:"4rem",paddingLeft:"5px"}} className='contactus__inner__seaction2__dispaly__each__input' onChange={(e)=>{setYourQuery(e.target.value)}}/>
                        </div>
                        <div className='contactus__inner__seaction2__dispaly__each'>
                            <div className='contactus__inner__seaction2__dispaly__each__heading'>
                                Captcha<span style={{color:"red"}}>*</span>
                            </div>
                            <ReCAPTCHA
                                sitekey="Your client site key"
                                onChange={onChange}
                            />
                        </div>
                        
                    </div>
                </div>
                <div className='conatctus__error__display' style={{display:errHiding}}>
                    <div className='conatctus__error__display__inner'>
                        <img src={alert} style={{width:"30px",height:"30px"}}/>{'\u00A0'}{errorMessage}
                    </div>
                </div>
                <div className='contactus__inner__seaction2__bottom__out'>
                    <div className='contactus__inner__seaction2__button' onClick={()=>{ContactUsSubmit()}} style={{display:submitClickedChange.submit}}>
                        SUBMIT
                    </div>
                    <div className='contactus__inner__seaction2__button'  style={{display:submitClickedChange.loading,background: "linear-gradient(to right, #00f260, #0575e6)"}}>
                        Sending...
                    </div>
                    <div className='contactus__inner__seaction2__button' style={{display:submitClickedChange.success,backgroundColor: "#00f260"}}>
                        Success
                    </div>
                </div>
            </div>






            <div className='contactus__inner__seaction2__inner'>
                <div className='contactus__inner__seaction3'>
                    <div className='contactus__inner__seaction3__left'>
                        <div className='contactus__inner__seaction3__left__heading'>
                            Our location
                        </div>
                        <div className='contactus__inner__seaction3__left__text'>
                            Lorem Ipsum is simply dummy text of the 
                            printing and typesetting industry. 
                            Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s,
                        </div>
                        <div className='contactus__inner__seaction3__left__heading'>
                            <div className='contactus__inner__seaction2__button' style={{fontSize:"18px"}}>
                                get direction
                            </div>
                        </div>
                    </div>
                    <div className='contactus__inner__seaction3__right'>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    </div>

    </>
);
}

export default ContactUs;