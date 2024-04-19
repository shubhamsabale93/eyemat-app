import './NewEvent.css'

export default function NewEvent({imgSrc, para}){
    return(
        <div className='newEvent'>
            <img src={imgSrc} className='event-img'/>
            <div className='event-para'>
                <p>{para}</p>
            </div>
        </div>
    );
}