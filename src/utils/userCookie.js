import Cookies from 'js-cookie';

/**
 * 设置用户信息
 * @param {*} info 
 * @returns 
 */
export function setUserInfo(info) {
    const arr = Object.entries(info);
    for (let i = 0; i < arr.length; i++) {
        Cookies.set(arr[i][0], arr[i][1]);
    }
    return true;
}

/**
 * 获取用户信息
 * @returns 
 */
export function getUserInfo() {
    return {
        username: Cookies.get('username'),
        appkey: Cookies.get('appkey'),
        role: Cookies.get('role'),
        email: Cookies.get('email'),
    }
}

/**
 * 移除cookie
 * @returns 
 */
export function removeUserInfo() {
    Cookies.remove('username');
    Cookies.remove('appkey');
    Cookies.remove('role');
    Cookies.remove('email');
    return true;
}