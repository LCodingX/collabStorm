import React, {Fragment} from "react";
import "../css/Home.css"
import Header from "./Header"
class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <div className="content-section-1">
                    <Header color="#ff5e5e"
                    header="Create a storm - designed for startups, existing products that need a new feature, and school projects HI SPENCER" />
                </div>
                <div className="content-section-2">
                    <Header color="#26262F"
                     header="Get your team excited about your ideas by fully advertising your thoughts before they even see it" />
                </div>
                <div className="content-section-3">
                    <Header  color="#ffe0c8"
                    header="Accomodate for different types of thinkers, and different sizes of teams" />
                </div>
                <div className="content-section-4">
                    <Header  color="#735046"
                    header="Continuously save your document online so your team can work faster and smarter" />
                </div>
            </div>
        )
    }
}
export default Home