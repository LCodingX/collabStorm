import React from "react"
import "../css/ToDo.css"
function Card(props){
    const i = props.isDone ? <span className="glyphicon glyphicon-ok"></span> : 
    props.isWorking ? <span className="glyphicon glyphicon-pencil"></span> : <span className="glyphicon glyphicon-remove"></span>

    return (
        <div className="card">
            <p style={{"float": "left", "width": "50%", "margin": "0"}}>{props.item}</p>
            
            {i}
        </div>
    )
}
export default Card