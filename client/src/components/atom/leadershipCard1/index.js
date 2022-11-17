import './index.css';


const LeadershipCard1=(props)=>{

    if(props.flag==1)
    {
        return(
            <>
                <div className="leadershipcard1__each__card" style={{margin:"auto",marginTop:"2rem",marginBottom:"4rem"}}>
                    <div className="leadershipcard1__each__card__image">
                        <img src={props.img} className="leadershipcard1__each__card__image__img"/>
                    </div>
                    <div className="leadershipcard1__each__card__name">
                        {props.name}
                    </div>
                    <div className="leadershipcard1__each__card__jobtitle">
                        {props.job}
                    </div>
                </div>
            </>
          );
    }
    else
    {
        return(
        <>
            <div className="leadershipcard1__each__card">
                <div className="leadershipcard1__each__card__image">
                    <img src={props.img} className="leadershipcard1__each__card__image__img"/>
                </div>
                <div className="leadershipcard1__each__card__name">
                    {props.name}
                </div>
                <div className="leadershipcard1__each__card__jobtitle">
                    {props.job}
                </div>
            </div>
        </>
      );

    }
    
}

export default LeadershipCard1;