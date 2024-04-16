import './Profile.css'

export default function Profile({msg}){
    return(
        <div className='profile' style={{alignSelf:"center"}}>
            <i className="fa-solid fa-download" style={{color:"white"}}></i>
            <span>{msg}</span>
        </div>
    );
}