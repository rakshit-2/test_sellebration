import './index.css';

const WomenLeadershipCard1=(props)=>{
    return (
        <>
        <div className="WomenLeadershipCard1__outer">
            <div className="WomenLeadershipCard1__heading">
                {props.heading}
            </div>
            <div className="WomenLeadershipCard1__info">
                {props.info}
            </div>
            <div className="WomenLeadershipCard1__name">
                {props.name}
            </div>
            <div className="WomenLeadershipCard1__title">
                {props.title}
            </div>
        </div>
        </>
    );
    }

export default WomenLeadershipCard1;