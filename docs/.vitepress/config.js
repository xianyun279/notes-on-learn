


module.exports = {
    lang: 'en-US',
    title: '此刻的唯一',
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
        { text: '基础', link: '/base/index' },
        { text: '框架', link: '/framework/index' },
        { text: 'LIFE', link: '/life/index' },
    ]
}

function sidebarBase() {
    return [
        {
            text: '基础',
            collapsible: true,
            items: [
                { text: 'css-demo', link: '/base/css-demo' },
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
                { text: 'Qwik', link: '/framework/Qwik' },
                
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
                { text: '强者', link: '/life/强者' },
            ]
        }
    ]
}
