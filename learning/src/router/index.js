import { createMemoryHistory, createRouter } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import JavaView from '../views/JavaView.vue';
import PythonView from '../views/PythonView.vue';
import JavascriptView from '../views/JavascriptView.vue';



const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/contact', component: ContactView },
  { path: '/java', component: JavaView },
  { path: '/python', component: PythonView },
  { path: '/javascript', component: JavascriptView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
