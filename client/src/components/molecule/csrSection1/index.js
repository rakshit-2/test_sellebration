import './index.css';
import CsrDisplayData from '../../assets/store/csrdisplayData';
const CsrSection1=(props)=>{
return (
    <>
    <div className='csr__inner__section1'>
        <div className='csr__inner__section1__inner'>
            <div className='csr__inner__section1__inner__top'>
                {CsrDisplayData.heading}
            </div>
            <div className='csr__inner__section1__inner__bottom'>
                {CsrDisplayData.text}
            </div>
            <div className='csr__inner__section1__inner__bottomv'>
                {CsrDisplayData.name}
            </div>
            <div className='csr__inner__section1__inner__bottomm'>
                {CsrDisplayData.desc}
            </div>
        </div>
    </div>
    </>
);
}

export default CsrSection1;