import React, {Fragment} from "react";
import "../css/Navbar.css"
import {Link} from "react-router-dom"
import logo from "./logo.svg"
class Navbar extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="navbar">
                    <img src={logo} className="logo" alt="logo"/>
                    <Link to="/account/1" >{this.props.username}</Link>
                </div>
            </Fragment>
        )
    }
}
export default Navbar