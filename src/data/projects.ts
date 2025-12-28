export interface Project {
    id: string
    title: string
    description: string
    image: string
    tags: string[]
    link: string
    platform: 'android' | 'pc' | 'web'
}

export const games: Project[] = [
    {
        id: 'mulayim-firarda',
        title: 'Mülayim Firarda',
        description: 'Mülayim escapes from prison and faces a long, dangerous road ahead. How long will he survive? This was my first game!',
        image: '/images/MulayimFirarda/image1.webp',
        tags: ['Unity', 'C#', 'Android'],
        link: 'https://play.google.com/store/apps/details?id=com.DGames.MlayimFirarda&hl=tr',
        platform: 'android',
    },
    {
        id: 'alt-f4-2d',
        title: 'ALT F4 2D',
        description: 'Looks innocent but will test your patience! A challenging game that\'s perfect if you like a good challenge. Don\'t give up!',
        image: '/images/AltF42D/image1.webp',
        tags: ['Unity', 'C#', 'Android'],
        link: 'https://play.google.com/store/apps/details?id=com.T.A.Games.ALTF42D&hl=tr',
        platform: 'android',
    },
    {
        id: 'bunny-hop',
        title: 'Bunny Hop',
        description: 'Need to relax from a tiring day? This sweet game fits into busy workdays. But don\'t be fooled - it\'s not as easy as it looks!',
        image: '/images/BunnyHop/bunny1.png',
        tags: ['Unity', 'C#', 'PC'],
        link: 'https://tunahan-akargul.itch.io/bunny-hop',
        platform: 'pc',
    },
]

export const sites: Project[] = [
    {
        id: 'apimeet',
        title: 'ApiMeet',
        description: 'Unlock seamless API connectivity! One platform for endless API connections, ready-made templates, powerful workflows, and automation with schedulers.',
        image: '/images/ApiMeet/apimeet.png',
        tags: ['Vue.js', 'API Integration', 'SaaS'],
        link: 'https://apimeet.com',
        platform: 'web',
    },
    {
        id: 'wordwise',
        title: 'WordWise',
        description: 'Want to improve your vocabulary? Write words with their meanings and save them to review anytime. Perfect for language learners!',
        image: '/images/Wordwise/wordwiseLogo.png',
        tags: ['JavaScript', 'HTML/CSS', 'Mobile Web'],
        link: 'https://wordwise.site',
        platform: 'web',
    },
    {
        id: 'picsap',
        title: 'Picsap',
        description: 'Edit your photos easily online. No ads, no payments - just simple, free photo editing right in your browser.',
        image: '/images/Picsap/picsap.png',
        tags: ['JavaScript', 'Canvas API', 'Web App'],
        link: 'https://www.picsap.com',
        platform: 'web',
    },
    {
        id: 'todo-list',
        title: 'To Do List',
        description: 'My first ever website! A simple and clean to-do list application to help you organize your tasks and boost productivity.',
        image: '/images/todo.png',
        tags: ['JavaScript', 'HTML/CSS', 'Utility'],
        link: '/todo/index.html',
        platform: 'web',
    },
]

export const skills = [
    'Unity',
    'C#',
    'JavaScript',
    'TypeScript',
    'Vue.js',
    'HTML5',
    'CSS3',
    'Game Development',
    'Frontend Development',
    'Mobile Games',
    'Web Design',
]

export const socialLinks = [
    {
        name: 'GitHub',
        icon: 'mdi-github',
        url: 'https://github.com/tunahan-akargul',
    },
    {
        name: 'Linkedin',
        icon: 'mdi-linkedin',
        url: 'https://www.linkedin.com/in/tunahan-akargul/'
    },
    {
        name: 'Work',
        icon: 'mdi-briefcase',
        url: 'https://apimeet.com/',
    },
]
