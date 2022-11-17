
import './index.css';
import Navbar from './../NavBar/index';
import err_img from './../../assets/image/err.jpg';

const Err=(props)=>{
return (
    <>
    <Navbar navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
    <div className='err__outer'>
        <div className='err__img'>
            <img src={err_img} style={{width:"100%",height:"100%"}}/>
        </div>
    </div>
    </>
);
}

export default Err;