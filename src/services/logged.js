export const logged = () => {
    const token = localStorage.getItem('token');
    if (token !== null) {
        return true;
    }
    return false;
};
export const logout = () => {
    const token = localStorage.removeItem('token');
    if (token !== null) {
        return false;
    }
    return true;
};
