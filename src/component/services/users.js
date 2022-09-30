import users from './common/data'
import { getMothod, postMethod, putMethod, deleteMethod } from './common/rest'

const login = function (params) {
    const { userName, passWord } = params
    if (!userName || !passWord) return false
    let user = users.find((x) => x.userName === userName && x.passWord === passWord)
    if (user) {
        localStorage.setItem('user_login', JSON.stringify(user))
        return true
    }
}
const logout = function () {
    localStorage.removeItem('user_login')
    return true
}
const exportObject = {
    login, logout
};
export default exportObject;

