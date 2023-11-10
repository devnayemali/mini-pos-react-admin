const LocalData = (key) => {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error getting data from localStorage:', error);
        return null;
    }
}
export default LocalData;