import { $host, $authHost } from ".";
import { jwtDecode } from "jwt-decode"

export const registration = async (nickname, email, password) => {
    const {data} = await $host.post('api/user/registration', {nickname, email, password, role: 'ADMIN'})
    return jwtDecode(data.token)
}
export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    return jwtDecode(data.token)
}
export const check = async () => {
    const response = await $host.post('api/user/registration')
    return response
}