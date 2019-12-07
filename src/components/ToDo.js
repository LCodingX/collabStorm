import React, {Fragment} from "react";
import "../css/ToDo.css"
import Card from "./Card"
import Header from "./Header"
class ToDo extends React.Component {
    render() {
        return (
            <div className="todo-container">

                <div className="to-do-part">
                    <Header header="To do" color='#26262F' />
                    {this.props.project.stage3.to_do.map((item, index) => <Card isDone={false} isWorking={false} item={item} key={index} />)}
                </div>
                <div className="doing-part">
                    <Header header="In progress" color='#26262F' />
                    {this.props.project.stage3.in_progress.map((item, index) => <Card isDone={false} isWorking={true} item={item} key={index}  />)}
                </div>
                <div className="done-part">
                    <Header header="Done" color='#26262F' />
                    {this.props.project.stage3.done.map((item, index) => <Card isDone={true} isWorking={false} item={item} key={index} />)}
                </div>
            </div>
        )
    }
}
export default ToDo