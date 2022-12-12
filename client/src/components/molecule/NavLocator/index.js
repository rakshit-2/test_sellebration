import './index.css';
import items from './../../assets/store/NavData'
import NavLocatorEach from './../../atom/NavLocatorEach/index'


const NavLocator=(props)=>{
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