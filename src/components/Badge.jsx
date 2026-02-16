import './Badge.css'
export default function({iconpath, color}){
    return(
        <div className={`badge badge-${color}`}>
            <img src={`${iconpath}`} alt="" />
        </div>
    )
}