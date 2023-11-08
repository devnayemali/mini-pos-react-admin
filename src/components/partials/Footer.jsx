const Footer = () => {
    return (
        <footer className="py-2 bg-light mt-auto">
            <div className="container-fluid px-4">
                <div className="d-flex align-items-center justify-content-between small">
                    <div className="text-muted">Copyright &copy; devnayemali {new Date().getFullYear()} | version: 0.1.0</div>
                    <div>
                        Design & Develop by <a target="_blank" rel="noreferrer" href="https://github.com/devnayemali">devnayemali</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;