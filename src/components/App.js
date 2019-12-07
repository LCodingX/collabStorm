import React from 'react';
import '../css/App.css';
import Navbar from "./Navbar"
import Header from "./Header"
import Home from "./Home";
import {BrowserRouter as Router, Link, Route, Redirect} from "react-router-dom"
import axios from "axios"
import data from "../data/hello.json"
import Project from "./Project.js"
class App extends React.Component {
  onLogin = (e) => {
    axios.post("/api/auth/login", {
        username: this.state.user.username,
        password: this.state.user.password
    }).then(res => {
        console.log(res)
        return <Redirect to="/" />
    }).catch(error => {
        console.log(error)
    })
}
onRegister = (e) => {
    axios.post("/api/auth/register", {
        nickname: this.state.user.nickname,
        first_name: this.state.user.first_name,
        username: this.state.user.username,
        password: this.state.user.password,
        email: this.state.user.email
    }).then(res => {
        console.log(res)
        return <Redirect to="/" />
    }).catch(error => {
        console.log(error)
    })
}
render() {
    return (
        <Router>
            <Navbar {...data}/>
            <Route exact path="/" component={Home} />
            {/*<Route exact path="/project/1" render={(props) => <Project {...props} data={...data}/>} />*/}
        </Router>
    )
  }
}

export default App;
