import React, {Fragment} from "react";
import "../css/Project.css"
import Header from "./Header"
import Feature from "./Feature"
import ToDo from "./ToDo"
class Project extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stage: 1,
            text1len: props.project.stage1.problem.length,
            text2len: props.project.stage1.solution.length,
            text3len: props.project.stage1.how_the_solution_solves.length,
            text1: props.project.stage1.problem,
            text2: props.project.stage1.solution,
            text3: props.project.stage1.how_the_solution_solves,
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
    on1Submit = e => {
        this.setState({
            stage: 2,
            problemvis: false,
            solutionvis: false,
            howvis: false
        })
    }
    on2Submit = e => {
        this.setState({
            stage: 3,

        })
    }
    render() {
        if (this.state.stage === 1) {
            return (
                <form>
                <div className="project-container">
                    <div className="question">
                        <Header header="What problem do you see in the world that you would like to solve?"  color="#26262F"/>
                        <textarea spellCheck="false" onChange={this.onChange} name="text1" style={{"width": "auto", "height": "auto"}}  value={this.state.text1} rows={10} cols={100} minLength={350}/>
                        <p className="count">Minimum characters: 350. Current Characters: {this.state.text1len}</p>
                    </div>
                    <div className="question">
                        <Header header="What is your solution to that problem?"  color="#26262F"/>
                        <textarea spellCheck="false" onChange={this.onChange}  name="text2" style={{"width": "auto", "height": "auto"}} value={this.state.text2} rows={10} cols={100} minLength={400}/>
                        <p className="count">Minimum characters: 400. Current Characters: {this.state.text2len}</p>
                    </div>
                    <div className="question">
                        <Header header="How does your solution solve that problem?"  color="#26262F"/>
                        <textarea spellCheck="false" onChange={this.onChange}  name="text3" style={{"width": "auto", "height": "auto"}} value={this.state.text3} rows={10} cols={100} minLength={300} />
                        <p className="count">Minimum characters: 300. Current Characters: {this.state.text3len}</p>
                    </div>
                    <button onClick={this.on1Submit} className="btn btn-primary">Continue to Team Creation and Feature Decisions</button>

                </div>
                
                </form>
            )
        }
        else if (this.state.stage === 2) {
            return (
                <form onSubmit={this.on1Submit}>
                <div className="project-container">
                <div className="dropdown">
                    <button type="button" className="btn btn-primary">Edit/View Problem or Solution</button>
                    <div className="dropdown-content">
                        <a onClick={(e) => {this.setState({problemvis: true,solutionvis:false,howvis:false})}}>Edit/View Problem</a>
                        <a onClick={(e) => {this.setState({problemvis: false,solutionvis:true,howvis:false})}}>Edit/View Solution</a>
                        <a onClick={(e) => {this.setState({problemvis: false,solutionvis:false,howvis:true})}}>Edit/View the Solution's explanation</a>
                    </div>
                </div>
                <br />
                    
                <div className="question" style={{"display": this.state.problemvis ? "block" : "none"}}>
                    <textarea spellCheck="false" onChange={this.onChange} name="text1" style={{"width": "auto", "height": "auto"}}  value={this.state.text1} rows={10} cols={100} minLength={350}/>
                    <p className="count">Minimum characters: 350. Current Characters: {this.state.text1len}</p>
                </div>
                <div className="question" style={{"display": this.state.solutionvis ? "block" : "none"}}>
                    <textarea spellCheck="false" onChange={this.onChange} name="text2" style={{"width": "auto", "height": "auto"}}  value={this.state.text2} rows={10} cols={100} minLength={350}/>
                    <p className="count">Minimum characters: 400. Current Characters: {this.state.text2len}</p>
                </div>
                <div className="question" style={{"display": this.state.howvis ? "block" : "none"}}>
                    <textarea spellCheck="false" onChange={this.onChange} name="text3" style={{"width": "auto", "height": "auto"}}  value={this.state.text3} rows={10} cols={100} minLength={350}/>
                    <p className="count">Minimum characters: 300. Current Characters: {this.state.text3len}</p>
                </div>
                <button  type="button" style={{"display": this.state.problemvis || this.state.solutionvis || this.state.howvis ? "block" : "none"}}
                onClick={e => {this.setState({problemvis: false, solutionvis: false, howvis: false})}} className="btn btn-primary">Done</button>
                <br />
                
                <Header header="Features" color="#26262F"/>
                <hr />
                <div className="features">
                    
                    {this.props.project.stage2.features.map((feature, index) => 
                        <Feature key={index} {...this.props} {...feature} />
                    )}

                </div>



                <button type="button" onClick={this.on2Submit} className="btn btn-primary">Continue to Development</button>



                </div>
                
                </form>
            )
        } else {
            return (
                <div>
                    <ToDo {...this.props}/>
                </div>
            )
        }
    }
}
export default Project