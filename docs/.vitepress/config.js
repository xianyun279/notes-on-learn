


module.exports = {
    lang: 'en-US',
    title: '闲云',
    description: 'Vite & Vue powered static site generator.',

    lastUpdated: true,

    themeConfig: {
        logo: '/public/logo.jpg',
        nav: nav(),
        search: false,
        sidebar: {
            '/css/': sidebarCss(),
            '/life/': sidebarLife(),
        },
    }
}


function nav() {
    return [
        { text: 'LIFE', link: '/life/index', activeMatch: '/life/' }, // life首页
        { text: 'CSS', link: '/css/index', activeMatch: '/css/' }, // life首页
    ]
}

function sidebarCss() {
    return [
        {
            text: '常用',
            collapsible: true,
            items: [
                { text: '案例', link: '/css/demo' },
                { text: 'SVG', link: '/css/svg' },
                { text: 'Animation', link: '/css/animation' },
            ]
        },
        {
            text: '随笔',
            collapsible: true,
            items: [
                { text: '此刻想法', link: '/css/thought' },
            ]
        },
    ]
}

function sidebarLife() {
    return [
        {
            text: '随笔',
            collapsible: true,
            items: [
                { text: '随手记', link: '/life/note' },
                { text: '感想', link: '/life/thought' },
            ]
        }
    ]
}
