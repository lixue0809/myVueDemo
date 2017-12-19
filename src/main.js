// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
////////////以下是后引入的
import Loading from './components/loading'
import store from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/less/app.less'
import './assets/less/base.less'
Vue.use(VueAxios, axios)
Vue.use(Loading);
Vue.config.productionTip = false
import Mint from 'mint-ui';
Vue.use(Mint);


// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// import App from './App.vue'
// Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App
	},
	render: (createElement) => createElement(App)
})