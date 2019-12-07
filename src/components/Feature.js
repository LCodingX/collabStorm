import React, {Fragment} from "react";
import "../css/Feature.css"
import Header from "./Header"
class Feature extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text1len: this.props.what_is_it.length,
            text2len: this.props.how_feature_solves.length,
            text3len: this.props.why_feature_necessary.length,
            text1: this.props.what_is_it,
            text2: this.props.how_feature_solves,
            text3: this.props.why_feature_necessary,
        }
    }
    onChange = e => {
        var length = e.target.value.length;
        if (e.target.name === "text1") {
            this.setState({
                text1len: length,
                text1: e.target.value
            })
        }
        else if (e.target.name === "text2") {
            this.setState({
                text2len: length,
                text2: e.target.value
            })
        }
        else if (e.target.name === "text3") {
            this.setState({
                text3len: length,
                text3: e.target.value
            })
        }

    }
    render() {
        return (
            <div style={{"padding": "15px"}}>
            <Header header={"Name="+this.props.feature_name}/>
            <div className="Feature">
                <br />
                <Header header="What the feature is" color="#26262F"/>
                <textarea rows={3} cols={75} minLength={75} value={this.state.text1} name="text1" onChange={this.onChange} />
                <p className="count">Minimum characters: 75. Current Characters: {this.state.text1len}</p>
                <br />
                <Header header="How does the feature help solve the problem?" color="#26262F"/>
                <textarea rows={3} cols={75} minLength={100} value={this.state.text2} name="text2" onChange={this.onChange}  /> 
                <p className="count">Minimum characters: 100. Current Characters: {this.state.text2len}</p>
                <br />
                <Header header="Why is the feature necessary?" color="#26262F"/>
                <textarea rows={3} cols={75} minLength={75} value={this.state.text3} name="text3" onChange={this.onChange}  />
                <p className="count">Minimum characters: 75. Current Characters: {this.state.text3len}</p>
            </div>
            </div>
        )
    }
}
export default Feature