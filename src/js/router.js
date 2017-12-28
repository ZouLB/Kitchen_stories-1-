import VueRouter from 'vue-router'

import home from '../component/page/home.vue'
import tips from '../component/page/tips.vue'
import sort from '../component/page/sort.vue'
import myhome from '../component/page/myhome.vue'
import shop from '../component/page/shop.vue'
import about from '../component/page/about.vue'
import setting from '../component/page/setting.vue'

import sortlink from '../component/page/sort-link.vue'
import details from '../component/page/details.vue'
import welcome from '../component/page/welcome.vue'
import video from '../component/page/video.vue'
import login from '../component/page/login.vue'

export default new VueRouter({
	routes:[
		{path:'/home',component:home},
		{path:'/tips',component:tips},
		{path:'/sort',component:sort},
		{path:'/myhome',component:myhome},
		{path:'/shop',component:shop},
		{path:'/about',component:about},
		{path:'/setting',component:setting},
		{path:'/',redirect:'/home'},
		
		{path:'/sort-link/:id',component:sortlink},
		{path:'/details/:id',component:details},
		{path:'/welcome',component:welcome},
		{path:'/video',component:video},
		{path:'/login',component:login}
	]
})
