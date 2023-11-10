import { Link } from "react-router-dom";
import LocalData from "../../Utility/LocalData";
import { useEffect, useState } from "react";





const Sidebar = () => {
    const [userName, setUserName] = useState('');
    useEffect(() => {
        const userData = LocalData('userData');
        if (userData && userData.name) {
            setUserName(userData.name);
        }
    }, []);
    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <Link className="nav-link" href="index.html" to={'/'}>
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                        Dashboard
                    </Link>
                    <div className="sb-sidenav-menu-heading">Features</div>
                    <a className="nav-link" href="#">Layouts</a>
                </div>
            </div>
            <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                {userName && userName}
            </div>
        </nav>
    );
};

export default Sidebar;