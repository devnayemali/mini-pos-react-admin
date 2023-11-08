import Navbar from '../partials/Navbar';
import Sidebar from '../partials/Sidebar';
import Footer from '../partials/Footer';
import { Outlet } from 'react-router-dom';

const Master = () => {
    return (
        <>
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            <Outlet />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Master;