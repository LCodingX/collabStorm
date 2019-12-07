import React, {Fragment} from "react";
import "../css/Account.css"
class Account extends React.Component {
    render() {
        return (
            <Fragment>
                <h2 className="general-Account" style={{"color": this.props.color}}>{this.props.Account}</h2>
            </Fragment>
        )
    }
}
export default Account