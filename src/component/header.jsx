
import React from "react";
import {NavLink} from "react-router-dom";
import Home from "./Home";


const Header = () => {
    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    return (
        <>
            <div className={click ? "main-container" : ""} onClick={() => Close()} />
            <nav className="navbar" onClick={e => e.stopPropagation()}>
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        Bizsprout
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/announcements"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Announcements
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/attendance"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Attendance
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/payslip"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Payslip
                            </NavLink>
                        </li>
                        <li className="nav-item text-white">
                        <i class="fa fa-user" aria-hidden="true"></i>
                                Profile
                            
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                </div>
            </nav>
            <Home/>
   
        
        
        </>
    )
}

export default Header;
