import React from "react";

//a navbar containing a logo the the front page, and score info
function Nav(props) {
    return (
        // <nav className="nav">
        //     <a className="navbar-brand" href="/">Clicky Game</a>
        //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //         <span class="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse">
        //         <ul className="navbar-nav">
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#">{props.message}</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-item" href="#">Score:{props.score}|Top Score:{props.topScore}</a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Clicky Game</a>
            {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> */}
            <div id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link disabled" href="#">{props.message}</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link disabled" href="#">Score:{props.score}|Top Score:{props.topScore}</a>
                    </li>
                    {/* <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Nav;