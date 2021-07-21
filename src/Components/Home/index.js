import React, { Component } from 'react';
import "./styles.css";

class Home extends Component {
    render() {
        return (
            <div className="Wrapper">
            <div className="Container01">
                <ul className="listContainer01">
                    <li>
                        Home
                    </li>
                    <li>
                        Graphic Design
                    </li>
                    <li>
                        Web Dev
                    </li>
                </ul>
            </div>
            </div>
        )
    }
}

export default Home;