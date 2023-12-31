import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{props.contact}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{props.about}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.prototype = {
    title: PropTypes.string,
    home: PropTypes.string,
    contact: PropTypes.string,
    about: PropTypes.string
}

Navbar.defaultProps = {
    title: "Text-Analyser",
    home: "Home",
    contact: "Contact",
    about: "About us"
}