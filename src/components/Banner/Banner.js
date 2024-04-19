import './Banner.css'

export default function Banner({title, subTitle}){
    return(
        <div className="banner">
            <span className='banner-span1'>{title}</span>
            <span className='banner-span2'><span id='banner-span-home'><a href='./' id='banner-span-home-link'>{subTitle}</a></span> &nbsp;/&nbsp; <span>{title}</span></span>
        </div>
    );
}