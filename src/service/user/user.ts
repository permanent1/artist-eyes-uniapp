import { http } from '@/utils/http'
export interface IUser {
	id: number
	username: string
	nickname: string
	gender: string
	avatar: string
  cellphone: string
	email: string
	state: string
}

export interface IWXUser {
	openid: string
	session_key: string
	encryptedData: string
	iv: string
}

/** 用户信息传给后端解析手机号登录或注册 */
export const postWXLoginAPI = (wxUser: IWXUser) => {
  return http.post('/auth/wx/cellphone/token', {
		openid: wxUser.openid,
		session_key: wxUser.session_key,
		encryptedData: wxUser.encryptedData,
		iv: wxUser.iv,
	})
}

// 获取当前登录用户信息
export const loggedUserInfoAPI = (user: IUser) => {
  return http.get('/users/me')
}
