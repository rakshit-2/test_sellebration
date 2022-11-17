import './index.css';


const CsrCard1=(props)=>{

    
    return(
    <>
    <div className='csr__inner__section4__display__each'>
        <div className='csr__inner__section4__display__each__img'>
            <img src={props.img} className="csr__inner__section4__display__each__img__img"/>
        </div>
        <div className='csr__inner__section4__display__each__heading'>
            <div className='csr__inner__section4__display__each__heading__top'>
                CSR
            </div>
            <div className='csr__inner__section4__display__each__heading__bottom'>
                {props.heading}
            </div>
        </div>
        <div className='csr__inner__section4__display__each__text'>
            {props.text}
        </div>
    </div>
    </>
  );
}

export default CsrCard1;