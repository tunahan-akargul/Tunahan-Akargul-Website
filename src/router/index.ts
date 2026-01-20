import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutView.vue'),
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('@/views/BlogView.vue'),
    },
    {
        path: '/blog/docker-connection',
        name: 'docker-blog-post',
        component: () => import('@/views/DockerBlogPostView.vue'),
    },
    {
        path: '/blog/api-integration',
        name: 'api-blog-post',
        component: () => import('@/views/ApiBlogPostView.vue'),
    },
    {
        path: '/blog/prompt-engineering',
        name: 'prompt-engineering-blog-post',
        component: () => import('@/views/PromptEngineeringBlogPostView.vue'),
    },
    {
        path: '/games',
        name: 'games',
        component: () => import('@/views/GamesView.vue'),
    },
    {
        path: '/sites',
        name: 'sites',
        component: () => import('@/views/SitesView.vue'),
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/ContactView.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
})

export default router