import './index.css';

const HomeCard2=(props)=>{
return (
    <>
    <div key={props.id} className='homecard2__each'>
        <div className='homecard2__each__heading'>
        {props.date}
        </div>
        <div className='homecard2__each__content'>
        {props.info}
        </div>
    </div>
    </>
);
}

export default HomeCard2;