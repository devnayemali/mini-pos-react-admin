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
        {
            text: 'Category',
            url: '#',
            subMenu: [
                { text: 'Category list', url: '/category/list' },
                { text: 'Add new', url: '/category/create' },
            ]
        },
        {
            text: 'Category 2',
            url: '#',
            subMenu: [
                { text: 'Category 2 list', url: '/category2/list' },
                { text: 'Add new 2', url: '/category2/add' },
            ]
        },
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
                                <Link
                                    className={`nav-link ${activeMenu === index ? 'active' : ''}`}
                                    onClick={() => handleMenu(index)}
                                    to={menuItem.url}
                                >
                                    {menuItem.text}{' '}
                                    {menuItem.subMenu && (
                                        <i
                                            className={`fas fa-chevron-${activeMenu === index ? 'up' : 'down'
                                                }`}
                                        ></i>
                                    )}
                                </Link>
                                {menuItem.subMenu && (
                                    <ul style={{ display: activeMenu === index ? 'block' : 'none' }}>
                                        {menuItem.subMenu.map((subMenuItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link to={subMenuItem.url}>{subMenuItem.text}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
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
