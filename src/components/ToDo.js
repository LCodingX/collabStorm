import React, {Fragment} from "react";
import "../css/ToDo.css"
class ToDo extends React.Component {
    render() {
        return (
            <div className="todo-container">
                {this.props.project.stage3.done.map((done, index) => <Fragment key={index}><p>{done}</p></Fragment>)}
            </div>
        )
    }
}
export default ToDo