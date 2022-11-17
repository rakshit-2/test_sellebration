import './index.css';

const CsrCard2=(props)=>{
return (
    <>
    <div key={props.id}className='csr__inner__section5__display__each'>
        <div className='csr__inner__section5__display__each__img'>
            <img src={props.img} className="csr__inner__section5__display__each__img__img"/>
        </div>
        <div className='csr__inner__section5__display__each__heading'>
            {props.heading}
        </div>
        <div className='csr__inner__section5__display__each__text'>
            {props.text} 
        </div>
    </div>
    </>
);
}

export default CsrCard2;