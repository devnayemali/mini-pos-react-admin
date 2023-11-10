const GlobalFunction = {
    logout() {
        localStorage.removeItem('userData');
        localStorage.removeItem('authToken');
        window.location.reload();
    }
}

export default GlobalFunction;