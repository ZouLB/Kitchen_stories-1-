import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import VideoPlayer from 'vue-video-player'

import './assets/css/cssreset.css'
import './assets/css/iconfont.css'

import $ from 'jquery'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
//修改mint.ui的样式
import './assets/css/weui.css';


//定义Vue可以使用VueResource
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Mint)
Vue.use(VideoPlayer)

import router from './js/router.js'
import store from './store/store.js'

new Vue({
  el: '#app',
  render: h => h(App),
	router,
	store
	
	//使用数据的方式，通过计算属性
//	computed:{
//		n(){
//			//获取store里面的数值
//			return this.$store.state.num
//		}
//	}
	
})
