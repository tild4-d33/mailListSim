import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <Link to='/'>Inbox</Link>
            </nav>
        )

    }
}