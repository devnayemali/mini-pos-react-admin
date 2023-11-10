import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Navbar = () => {

    const [sidebarToggled, setSidebarToggled] = useState(false);
    const [profileToggled, setProfileToggled] = useState(false);

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

    const handleSidebar = () => {
        setSidebarToggled(!sidebarToggled);
    }

    const handleProfileToggle = () => {
        setProfileToggled(!profileToggled)
    }

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, logout"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.post('http://127.0.0.1:8000/api/logout')
                    .then(function () {
                        localStorage.removeItem('userData');
                        localStorage.removeItem('authToken');
                        window.location.reload();
                    }).catch(function (errors) {
                        console.log(errors);
                    });

                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        });
    }



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
                        <li><button onClick={handleLogout} className="dropdown-item">Logout</button></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;