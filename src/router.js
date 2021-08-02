import { createRouter,createWebHistory} from "vue-router";
import Home from './components/Home.vue'
import Random from './components/Random.vue'
import Animation from './components/Animation.vue'
import Animation2 from './components/Animation2.vue'
import Animation3 from './components/Animation3.vue'
import Animation4 from './components/Animation4.vue'
import Animation5 from './components/Animation5.vue'
import Animation6 from './components/Animation6.vue'
import Animation7 from './components/Animation7.vue'
import Swiper from './components/Swiper.vue'
import Timer from './components/Timer.vue'

// 路由信息
const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/random",
        name: "random",
        component: Random,
    },
    {
        path: "/animation",
        name: "animation",
        component: Animation,
    },
    {
        path: "/animation2",
        name: "animation2",
        component: Animation2,
    },
    {
        path: "/animation3",
        name: "animation3",
        component: Animation3,
    },
    {
        path: "/animation4",
        name: "animation4",
        component: Animation4,
    },
    {
        path: "/animation5",
        name: "animation5",
        component: Animation5,
    },
    {
        path: "/animation6",
        name: "animation6",
        component: Animation6,
    },
    {
        path: "/animation7",
        name: "animation7",
        component: Animation7,
    },
    {
        path: "/swiper",
        name: "swiper",
        component: Swiper,
    },
    {
        path: "/timer",
        name: "timer",
        component: Timer,
    }
];

// 导出路由
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;