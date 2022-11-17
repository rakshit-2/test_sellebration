import './index.css';
import CsrStoriesData from './../../assets/store/csrstoriesData';
import CsrCard1 from '../../atom/csrCard1';

import { useNavigate } from 'react-router-dom';



const CsrSection4=(props)=>{
    const navigate = useNavigate();
return (
    <>
    <div className='csr__inner__section4' >
        <div className='csr__inner__section4__heading'>
            {CsrStoriesData.intro.hading}
        </div>
        <div className='csr__inner__section4__heading2'>
            <div className='csr__button__molecule' onClick={()=>{navigate('/stories')}}>
                {CsrStoriesData.intro.button}
            </div>
        </div>
        <div className='csr__inner__section4__display' data-aos="fade-up">
            {CsrStoriesData.display.map((ele)=>{
                const{id,heading,img,text}=ele;
                return(
                    <CsrCard1 id={id} heading={heading} img={img} text={text}/>
                )
            })}
            
        </div>
    </div>
    </>
);
}

export default CsrSection4;