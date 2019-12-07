import React, {Fragment} from "react";
import Header from "./Header";
import "../css/Account.css"
import {Link} from "react-router-dom"
class Account extends React.Component {
    render() {
        return (
            <div className="Account">
                <Header header={this.props.username+"'s Projects"} />
                <div className="Project">
                    <Link to="/project/1" className="project-link">CollabStorm</Link>
                    <p className="team">{"With " + this.props.project.team.map((member, index) =>  index !== 0 ? " " + member  : member)}</p>
                </div>
            </div>
        )
    }
}
export default Account;