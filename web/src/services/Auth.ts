export const isAuth = () => {
    const token = sessionStorage.getItem('token');

    if (token)
        return true;
}