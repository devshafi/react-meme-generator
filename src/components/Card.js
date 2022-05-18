
import locationImg from '../images/location.svg';

export default function Card(props) {
    return (
        <>
            <div className="card-container container">
                <img src={props.item.imageUrl} alt="mountain" className="card-img" />
                <div className="card-info">
                    <div className="card-location">
                        <img src={locationImg} alt="location" />
                        <span>{props.item.location}</span>
                        <a href={props.item.googleMapsUrl} >View on google map</a>
                    </div>
                    <h1 className="card-title">{props.item.title}</h1>
                    <strong className="card-date">{props.item.startDate} - {props.item.endDate}</strong>
                    <p className="card-desc">{props.item.description}</p>
                </div>
            </div>
            {/* showing horizontal line based on 
              number of data, if this is last card,
              do not add horizontal line
            */}
            {!props.isLast && <div className="hr" />}
        </>
    )
}