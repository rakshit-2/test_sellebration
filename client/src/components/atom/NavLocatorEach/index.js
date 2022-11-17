import './index.css';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const NavLocatorEach=(props)=>{

    const navigate = useNavigate();

    function onclickfunction(x,info)
    {
        var link=["/","/ourprofile","/leadership","/womenleadership","/visionvalue","/milestone",
                "/bussinessbrand","/bussinessbrand","/csr",
                "/csr","/bringchange","/OurStrategy",
                "/StoriesofHope","/csr","/Media","/mediarelease","/pressreoprt",
                "/Stories","/event","/Downloads","/logo","/Innovation","/investor",
                "/career","/contactus"];
        var check=["About Us","Our Profile","Leadership","Women Leaders","Vision&Values",
                    "Milestones","Businesses & Brands","Sustainability","CSR",
                    "CSR At Sellebration","Bringing The Change","Our Strategy",
                    "Stories of Hope","CSR Policy","Media","Media Releases","Media Reports",
                    "Stories","Events","Downloads","Our Logo","Innovation","Investors",
                    "Careers","Contact Us"]
            
        for(var i=0;i<check.length;i++)
        {
            console.log(info)
            if(info===check[i])
            {
                props.closeNavClicked();
                props.closeNav();
                navigate(link[i]);
                return;
            }
        }
        
    }


    return (
        <>
        {props.data.map((ele) => {
            const {id,info}=ele;
            if(props.index===1)
            {
                return(
                <div key={id} className="navlocatoreach__each__heading"  onClick={()=>{onclickfunction(id,info)}}>
                    {info}
                </div>
                )
                
            }
            else if(props.index===4)
            {
                if(id===3)
                {
                    return (
                        <>
                        <div key={id} className="navlocatoreach__each__heading"  onClick={()=>{onclickfunction(id,info)}}>
                            {info}
                        </div>
                        <div className="navlocatoreach__white__line__outer">
                            <div className="navlocatoreach__white__line"></div>
                        </div>
                        <div className="navlocatoreach__each__heading" style={{display:"flex",alignItem:"center",justifyContent:"space-around",width:"88%" ,cursor:"default"}}>
                        {props.icon.map((elel) => {
                            const {id,info,link}=elel;
                            return (
                                <>
                                <a key={id} href={link}><img src={info} /></a>
                                </>
                            );
                        })}
                        </div>
                        </>
                    );
                }
                else
                {
                    return (
                        <>
                        <div key={id} className="navlocatoreach__each__heading"  onClick={()=>{onclickfunction(id,info)}}>
                            {info}
                        </div>
                        <div className="navlocatoreach__white__line__outer">
                            <div className="navlocatoreach__white__line"></div>
                        </div>
                        </>
                    );
                }
            }
            else
            {
                if(info==="CSR Policy")
                {
                    return (
                        <>
                        <HashLink to='/csr#csr_policy' smooth className="navlocatoreach__each__each"  onClick={()=>{onclickfunction(id,info)}}>{info}</HashLink>
                        </>
                    );
                }
                else if(info==="Stories of Hope")
                {
                    return (
                        <>
                        <HashLink to='/csr#hope' smooth className="navlocatoreach__each__each"  onClick={()=>{onclickfunction(id,info)}}>{info}</HashLink>
                        </>
                    );
                }
                else if(info==="Our Strategy")
                {
                    return (
                        <>
                        <HashLink to='/csr#startegy' smooth className="navlocatoreach__each__each"  onClick={()=>{onclickfunction(id,info)}}>{info}</HashLink>
                        </>
                    );
                }
                else{
                    return (
                        <>
                        <div key={id} className="navlocatoreach__each__each" onClick={()=>{onclickfunction(id,info)}}>
                            {info}
                        </div>
                        </>
                    );
                }
            }
        })}
        </>
    );
}

export default NavLocatorEach;