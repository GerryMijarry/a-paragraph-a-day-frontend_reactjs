import React from "react";


const Nav = () => {


    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">A Paragraph A Day</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">My Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">My Books</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">My Chapters</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">My Paragraphs</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-success" type="submit">Login</button>

                    </form>
                </div>
            </div>
        </nav>

    )

}

export default Nav;