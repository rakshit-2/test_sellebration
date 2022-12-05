
import './index.css';
import Navbar from './../NavBar/index';
import Footer from './../../molecule/footer/index';
import ContactUsSection1 from '../../molecule/contactusSection1';
import ContactUsData from '../../assets/store/contactusData';
import ReCAPTCHA from "react-google-recaptcha";
import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha
  } from 'react-google-recaptcha-v3';







import { useEffect, useState } from 'react';
import alert from './../../assets/image/event/alert.svg';
import Axios from 'axios';
import ApiLink from './../../assets/store/apiLink';
import { useLocation ,useNavigate} from 'react-router-dom';
import reload from './../../assets/image/reload.png';
 

const ContactUs=(props)=>{
    const navigate=useNavigate();
    const[captcha,setCaptcha]=useState("CAPTCHA");
    const[captchaImage,setCaptchaImage]=useState("");
    const[captchaValue,setCaptchaValue]=useState(-1)
    const[contactLoading,setContactLoading]=useState(true)
    const location = useLocation();
    // scroll to top
    const [token, setToken] = useState();
    const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
    
    
    
    
    
    
    
    
    const handleVerify = (token) => {
        setToken(token);
      };
    function doSomething(){
    setRefreshReCaptcha(r => !r);
    }

    function generateCaptcha()
    {
       
        Axios.get(ApiLink+'/captcha',
        {

        }).then((res)=>{
            setCaptcha(res.data);
        })
    }


    useEffect(() => {
        generateCaptcha();
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
        // if(captchaValue!==captcha)
        // {
        //     setErrHiding("flex");
        //     setErrorMessage("Your Captcha Failed");
        //     setTimeout(hidingError, 3000);
        //     generateCaptcha()
        //     return;
        // }
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
            setName("");
            setEmail("");
            setOrganisation("");
            setContactNumber("");
            setQueryIsFor("Select Company");
            setQueryType("Select Query");
            setYourQuery("");
            document.getElementById("name0").value="";
            document.getElementById("name1").value="";
            document.getElementById("name2").value="";
            document.getElementById("name3").value="";
            document.getElementById("qfor").value="";
            document.getElementById("qtype").value="";
            document.getElementById("textareaField").value="";
            document.getElementById("captchaVal").value="";
            doSomething()
            
        })


    }

    return (
    <>
    <div className="contactus__outer">
        <div className="contactus__inner">

        <Navbar navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}  changeLang={props.changeLang} lang={props.lang} name={location.pathname} viewLang={props.viewLang}/>
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
                                    <input id={"name"+id.toString()} type={type} placeholder={placeholder} className='contactus__inner__seaction2__dispaly__each__input' onChange={(e)=>{checker(e.target.value,name)}} />
                                </div>
                            )
                        })}



                        <div className='contactus__inner__seaction2__dispaly__each'>
                            <div className='contactus__inner__seaction2__dispaly__each__heading'>
                                Query is for<span style={{color:"red"}}>*</span>
                            </div>
                            <select  id="qfor"  className='contactus__inner__seaction2__dispaly__each__input' onChange={(e)=>{setQueryIsFor(e.target.value)}}>
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
                            <select  id="qtype" className='contactus__inner__seaction2__dispaly__each__input'  onChange={(e)=>{setQueryType(e.target.value)}}>
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
                            <textarea id="textareaField" type={ContactUsData.selectTextarea.type} placeholder={ContactUsData.selectTextarea.placeholder} style={{height:"4rem",paddingLeft:"5px"}} className='contactus__inner__seaction2__dispaly__each__input' onChange={(e)=>{setYourQuery(e.target.value)}}/>
                        </div>
                        <div className='contactus__inner__seaction2__dispaly__each'>
                            <GoogleReCaptchaProvider reCaptchaKey="6LdbeFQjAAAAALc7X1qAlX4ao7cnZ5wlaaKSv31S">
                                <GoogleReCaptcha 
                                onVerify={handleVerify} 
                                refreshReCaptcha={refreshReCaptcha}
                                />
                            </GoogleReCaptchaProvider>
                            {/* <ReCAPTCHA
                                sitekey="6LdbeFQjAAAAALc7X1qAlX4ao7cnZ5wlaaKSv31S"
                                onChange={onChange}
                            /> */}
                            {/* <div className='contactus__captcha' id="captcha">
                                <div className='captcha__outer'>
                                    <div className=''>
                                        <div className='contactus__captcha__each' id="captcha">{captcha}</div>
                                        <img src={captchaImage} className="contactus__captcha__each"/>
                                        <ClientCaptcha captchaCode={this.setCode}/>
                                    </div>
                                    <img src={reload} style={{width:"30px",height:"30px",marginLeft:"1rem",cursor:"pointer"}} onClick={()=>{generateCaptcha()}}/>
                                    
                                </div>
                                <input id="captchaVal" type={"text"} placeholder={"captcha"} className='contactus__inner__seaction2__dispaly__each__input' onChange={(e)=>{setCaptchaValue(e.target.value)}} />
                                
                            </div> */}
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

            <Footer  changeLang={props.changeLang} lang={props.lang} name={location.pathname} viewLang={props.viewLang}/>
        </div>
    </div>

    </>
);
}

export default ContactUs;