import { Link } from "react-router-dom";
import LocalData from "../../Utility/LocalData";
import { useEffect, useState } from "react";

const Sidebar = () => {
    const [userName, setUserName] = useState('');
    const [activeMenu, setActiveMenu] = useState(null);

    useEffect(() => {
        const userData = LocalData('userData');
        if (userData && userData.name) {
            setUserName(userData.name);
        }
    }, []);

    const menuItems = [
        { text: 'Category', subMenu: ['Category list', 'Add new'] },
        { text: 'Category 2', subMenu: ['Category 2 list', 'Add new 2'] },
        // Add more dynamic menu items as needed
    ];

    const handleMenu = (index) => {
        setActiveMenu((prevActiveMenu) => (prevActiveMenu === index ? null : index));
    };

    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <Link className="nav-link" to={'/'}>
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                        Dashboard
                    </Link>
                    <div className="sb-sidenav-menu-heading">Features</div>
                    <ul className="sidebar-nav">
                        {menuItems.map((menuItem, index) => (
                            <li key={index}>
                                <Link className="nav-link" onClick={() => handleMenu(index)} href="#" >
                                    {menuItem.text} {activeMenu === index ? <i className="fas fa-chevron-right"></i> : <i className="fas fa-chevron-down"></i> }
                                </Link>
                                <ul style={{ display: activeMenu === index ? 'block' : 'none' }}>
                                    {menuItem.subMenu.map((subMenuItem, subIndex) => (
                                        <li key={subIndex}>
                                            <Link to="#">{subMenuItem}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
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
