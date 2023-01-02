


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
        },
    }
}


function nav() {
    return [
        { text: '基础', link: '/base/index' },
        { text: '框架', link: '/framework/index' },
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
