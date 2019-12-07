import React, {Fragment} from "react";
import "../css/Header.css"
class Header extends React.Component {
    render() {
        return (
            <Fragment>
                <h2 className="general-header" style={{"color": this.props.color}}>{this.props.header}</h2>
            </Fragment>
        )
    }
}
export default Header