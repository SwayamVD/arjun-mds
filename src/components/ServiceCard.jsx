import Badge from "./Badge";
import './ServiceCard.css'
export default function ServiceCard({iconpath,headline,desp}){
    return(
            <div className="servicecard">
                <div className="badge-icon">
                    <Badge iconpath={iconpath} color="service" className="badge-icon" />
                </div>
                
                <h4>{headline}</h4>
                <p>{desp}</p>
            </div>
    )
}