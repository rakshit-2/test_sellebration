import './index.css';

const HomeCard3=(props)=>{
return (
    <>
    <div key={props.id} className='homecard3__left__inner'>
        <div className='homecard3__left__inner__img'>

        </div>
        <div className='homecard3__left__inner__time'>
            {props.time}
        </div>
        <div className='homecard3__left__inner__info'>
            {props.info}
        </div>
    </div>
    </>
);
}

export default HomeCard3;