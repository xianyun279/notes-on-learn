


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
            '/js/': sidebarJs(),
            '/react/': sidebarReact(),
            '/life/': sidebarLife(),
        },
    }
}


function nav() {
    return [
        { text: 'JS', link: '/js/index', activeMatch: '/js/' },
        { text: 'CSS', link: '/css/index', activeMatch: '/css/' },
        { text: 'React', link: '/react/index', activeMatch: '/react/' },
        { text: 'LIFE', link: '/life/index', activeMatch: '/life/' },
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

function sidebarJs() {
    return [
        {
            text: '常用',
            collapsible: true,
            items: [
                { text: 'js-utils', link: '/js/utils' },
            ]
        }
    ]
}

function sidebarReact() {
    return [
        {
            text: '常用',
            collapsible: true,
            items: [
                { text: 'js-utils', link: '/react/details' },
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
