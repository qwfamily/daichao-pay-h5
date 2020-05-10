import { login, logout, getInfo, reLogin } from '@/api/user'
import { getToken, setToken, removeToken, getTokenType, setTokenType, removeTokenType } from '@/utils/auth'

const getDefaultState = () => {
	return {
		token: getToken(),
		phoneNumber: '',
		tokenType: getTokenType(),
		info: {},
	}
}

const state = getDefaultState()

const mutations = {
	RESET_STATE: (state) => {
		Object.assign(state, getDefaultState())
	},
	SET_TOKEN: (state, token) => {
		state.token = token
	},
	SET_TOKEN_TYPE: (state, tokenType) => {
		state.tokenType = tokenType
	},
	SET_PHONE_NUMBER: (state, phoneNumber) => {
		state.phoneNumber = phoneNumber
	},
	SET_INFO: (state, info) => {
		state.info = info
	}
}

const actions = {

	// user login
	login({ commit }, userInfo) {
		return new Promise((resolve, reject) => {
			login(userInfo).then(response => {
				const { data } = response
				commit('SET_TOKEN', data.access_token)
				setToken(data.access_token)
				commit('SET_TOKEN_TYPE', data.token_type)
				setTokenType(data.token_type)
				resolve()
			}).catch(error => {
				reject(error)
			})
		})
	},

	//重新登录
	reLogin({ commit }) {
		return new Promise((resolve, reject) => {
			reLogin().then(response => {
				const { data } = response
				commit('SET_TOKEN', data.access_token)
				setToken(data.access_token)
				commit('SET_TOKEN_TYPE', data.token_type)
				setTokenType(data.token_type)
				resolve()
			}).catch(error => {
				reject(error)
			})
		})
	},

	// get token from url
	setTokenFromURLParam({ commit }, token){
		if(token){
			commit('SET_TOKEN', token)
			setToken(token)
		}else{
			token = getToken()
			commit('SET_TOKEN', token)
		}
	},

	// get user info
	getInfo({ commit, state }) {
		return new Promise((resolve, reject) => {
			getInfo().then(response => {
				const { data } = response
				if (!data) {
					reject('Verification failed, please Login again.')
				}
				commit('SET_INFO', data)
				commit('SET_PHONE_NUMBER', data.phone_number)
				resolve(data)
			}).catch(error => {
				reject(error)
			})
		})
	},

	setInfo({ commit, state },data) {
		commit('SET_INFO', data)
	},

	// user logout
	logout({ commit, state, dispatch }) {
		return new Promise((resolve, reject) => {
			logout().then(() => {
				commit('SET_TOKEN', '')
				commit('SET_TOKEN_TYPE', '')
				commit('SET_PHONE_NUMBER', '')
				commit('SET_INFO', {})
				removeToken()
				removeTokenType()

				resolve()
			}).catch(error => {
				reject(error)
			})
		})
	},

	// remove token
	resetToken({ commit }) {
		return new Promise(resolve => {
			commit('SET_TOKEN', '')
			removeToken()

			commit('SET_TOKEN_TYPE', '')
			removeTokenType()
			resolve()
		})
	},
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
