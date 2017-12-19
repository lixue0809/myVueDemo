import Vue from 'vue';
import Vuex from 'vuex';
import {
	SHOW_LOADING,
	HIDE_LOADING
} from './type';
// 引入 axios
import axios from 'axios'
Vue.use(Vuex);

// const state = {
// 	loading: false
// }

// const mutations = {
// 	[SHOW_LOADING](state) {
// 		state.loading = true;
// 	},
// 	[HIDE_LOADING](state) {
// 		state.loading = false;
// 	}
// }

// const getters = {

// }

// const actions = {

// }


// export default new Vuex.Store({
// 	state,
// 	mutations,
// 	getters,
// 	actions

// })

// store.js

const store = new Vuex.Store({
	// 定义状态
	state: {
		test01: {
			name: 'lixue'
		},
		test02: {
			tell: '12312345678'
		}
	},
	actions: {
		// 封装一个 ajax 方法
		saveForm(context) {
			axios({
				method: 'post',
				url: '/user',
				data: context.state.test02
			})
		}
	}
})
export default store