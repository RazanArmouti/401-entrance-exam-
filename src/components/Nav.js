import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div>
                \
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/FavList">My Faviorites</Link>
                        </li>
                        <li>

                            <Link to="/Profile">Profile</Link>

                        </li>
                    </ul>
                </nav>


            </div>
        )
    }
}

export default Nav
