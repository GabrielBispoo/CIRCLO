import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [

  { path: '/', 
    component: HomeView,
    meta: {
      title: 'CIRCLO - Home'
    } 
  }  
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router
