import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [sidebarToggled, setSidebarToggled] = useState(false);
    const [profileToggled, setProfileToggled] = useState(false);

    const handleSidebar = () => {
        setSidebarToggled(!sidebarToggled);
    }

    const handleProfileToggle = () => {
        setProfileToggled(!profileToggled)
    }

    useEffect(() => {
        if (sidebarToggled) {
            document.body.classList.add('sb-sidenav-toggled');
        } else {
            document.body.classList.remove('sb-sidenav-toggled');
        }
    }, [sidebarToggled]);

    useEffect(() => {
        const profileMenus = document.getElementsByClassName('profile_toggle_menu');
        for (let i = 0; i < profileMenus.length; i++) {
            if (profileToggled) {
                profileMenus[i].classList.add('show');
            } else {
                profileMenus[i].classList.remove('show');
            }
        }
    }, [profileToggled]);

    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <Link className="navbar-brand ps-3" to={'/'}>Mini pos</Link>
            <button onClick={handleSidebar} className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
            <ul className="navbar-nav ml-auto align-items-center">
                <span className="text-white">admin</span>
                <li className="nav-item dropdown">
                    <a onClick={handleProfileToggle} className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end right-0 profile_toggle_menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#!">Settings</a></li>
                        <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;