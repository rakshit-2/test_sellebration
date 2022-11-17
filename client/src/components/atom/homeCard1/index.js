import './index.css';

const HomeCard1=(props)=>{
    return (
        <>
        <div key={props.id} className='homecard1__each'>
            <div className='homecard1__each__img'>

            </div>
            <div className='homecard1__each__heading'>
                {props.heading}
            </div>
            <div className='homecard1__each__para'>
                {props.info}
            </div>
        </div>
        </>
    );
    }

export default HomeCard1;