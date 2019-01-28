import React from "react";

//a navbar containing a logo the the front page, and score info
function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <a className="navbar-brand" href="/">Clicky Game</a>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a class="nav-link disabled" href="#">{props.message}</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link disabled" href="#">Score:{props.score}|Top Score:{props.topScore}</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;