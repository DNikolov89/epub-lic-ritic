import { Link } from "react-router-dom";

function Header({
    isLogged
}) {

    if (isLogged) {
        return (
            <header className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <a className="navbar-brand" href="/">
                            <span>
                                ePUB/lic/ritic
                            </span>
                        </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className=""> </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link className="nav-link pl-lg-0" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about"> About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/categories">Categories</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/add-ebook">Add e-book</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/auth/logout">Logout</Link>
                                </li>
                            </ul>
                            <from className="search_form">
                                <input type="text" className="form-control" placeholder="Search here..." />
                                <button className="" type="submit">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </from>
                        </div>
                    </nav>
                </div>
            </header>
        );
    } else {
        return (
            <header className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <a className="navbar-brand" href="/">
                            <span>
                                ePUB/lic/ritic
                            </span>
                        </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className=""> </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link className="nav-link pl-lg-0" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about"> About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/auth/register"> Register </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/auth/login">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }

};

export default Header;