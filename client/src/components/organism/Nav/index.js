import './index.css';
import NavLocator from './../../molecule/NavLocator/index'

const Nav=(props)=>{
  return (
    <>
    <div className='nav__outer' style={{display:props.navDisplay.nav}}>
      <div className="nav__inner">
        <div className='nav__inner__inner'>
          <NavLocator changePageState={props.changePageState} closeNav={props.closeNav} closeNavClicked={props.closeNavClicked}/>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default Nav;