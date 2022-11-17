import './index.css';
import items from './../../assets/store/NavData'
import NavLocatorEach from './../../atom/NavLocatorEach/index'
import { useNavigate } from 'react-router-dom';


const NavLocator=(props)=>{
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
            if(info===check[i])
            {
                props.closeNavClicked();
                navigate(link[i]);
                return;
            }
        }
        
    }
    return (
    <>
    <div className='navlocator__outer'>
      <div className='navlocator__inner'>
              {items.map((item) => {
                  const {id,heading,data,icon}=item;
                  if(id===1)
                  {
                    return (
                        <>
                        <div key={id} className="navlocator__each">
                            <div className="navlocator__each__heading" style={{cursor:"default"}}>
                                {heading}
                            </div>
                            <div className="navlocator__white__line__outer">
                                <div className="navlocator__white__line"></div>
                            </div>
                            <NavLocatorEach closeNav={props.closeNav} data={data} index={id} closeNavClicked={props.closeNavClicked}/>
                        </div>
                        <div className='navlocator__white__line__nav'>
                        </div>
                        </>
                    );
                  }
                  if(id===4)
                  {
                    return (
                        <>
                        <div key={id} className="navlocator__each">
                            <NavLocatorEach closeNav={props.closeNav} data={data} index={id} icon={icon} closeNavClicked={props.closeNavClicked}/>
                        </div>
                        </>
                    );
                  }
                  else
                  {
                    return (
                        <>
                        <div key={id} className="navlocator__each">
                            <div className="navlocator__each__heading" style={{cursor:"default"}}>
                                {heading}
                            </div>
                            <NavLocatorEach changePageState={props.changePageState} closeNav={props.closeNav} data={data} index={id} closeNavClicked={props.closeNavClicked}/>
                        </div>
                        <div className='navlocator__white__line__nav'>
                        </div>
                        </>
                    );
                  }
              })}
          </div>
        
    </div>
    </>
  );
}

export default NavLocator;