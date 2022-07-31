


module.exports = {
    lang: 'en-US',
    title: '闲云',
    description: 'Vite & Vue powered static site generator.',

    lastUpdated: true,

    themeConfig: {
        logo: '/logo.jpg',
        nav: nav(),
        search: false,
        sidebar: {
            '/base/': sidebarBase(),
            '/framework/': sidebarFramework(),
            '/life/': sidebarLife(),
        },
    }
}


function nav() {
    return [
        { text: 'base', link: '/base/index' },
        { text: 'framework', link: '/framework/index' },
        // { text: 'React', link: '/react/index', activeMatch: '/react/' },
        { text: 'LIFE', link: '/life/index' },
    ]
}

function sidebarBase() {
    return [
        {
            text: '基础',
            collapsible: true,
            items: [
                { text: '案例', link: '/base/css-demo' },
                { text: 'js-utils', link: '/base/js-utils' },
            ]
        },
    ]
}

function sidebarFramework() {
    return [
        {
            text: '框架',
            collapsible: true,
            items: [
                { text: 'test-svg', link: '/framework/svg' },
            ]
        }
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
