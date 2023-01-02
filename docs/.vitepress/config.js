// -- start vuepress-sidebar-atuo
// const {getChildren} = require("vuepress-sidebar-atuo")
const fs = require('fs')
const path = require('path')
function getChildren(path, title, sort = false) {
    let root = []
    readDirSync(path, root)
    console.log('root11', root)
    const category = root[0].split('/docs/')[1].split('/')[0]; // 类别react
    console.log('category', category)
    root = root.map(item => {
        const p = '/' + item.split('/')[2] + '/' + item.split('/')[3];
        return p.split('.')[0]
    })
    //排序
    // if (sort) {
    //     let sortList = []
    //     let nosortList = []
    //     root.forEach(item => {
    //         if (Number(item.replace(".md", "").match(/[^-]*$/))) {
    //             sortList.push(item)
    //         } else {
    //             nosortList.push(item)
    //         }
    //     })
    //     root = sortList.sort(function (a, b) {
    //         return a.replace(".md", "").match(/[^-]*$/) - b.replace(".md", "").match(/[^-]*$/)
    //     }).concat(nosortList)
    // }
    const res = [
        {
            text: title ||  category,
            collapsible: true,
            items: [
                // { text: 'details', link: '/react/details' },
            ]
        }
    ]

    res[0].items = root.map(item => {
        return { text: item.split('/' + category + '/')[1], link: item }
    })

    return res;
}
function readDirSync(path, root) {
    var pa = fs.readdirSync(path);
    pa.forEach(function (ele, index) {
        var info = fs.statSync(path + "/" + ele)
        if (info.isDirectory()) {
            readDirSync(path + ele, root)
        } else {
            if (checkFileType(ele)) {
                root.push(prefixPath(path, ele))
            }
        }
    })
}
function checkFileType(path) {
    return path.includes(".md")
}
function prefixPath(basePath, dirPath) {
    let index = basePath.indexOf("/")
    // 去除一级目录地址
    console.log('basePath', basePath)
    basePath = basePath.slice(index, path.length)
    // replace用于处理windows电脑的路径用\表示的问题
    return path.join(basePath, dirPath).replace(/\\/g, "/")
}


// --end vuepress-sidebar-atuo

// 目录用变量统一表示了吧。。。

module.exports = {
    lang: 'en-US',
    title: '闲云的网络笔记',
    lastUpdated: true,
    themeConfig: {
        logo: '/logo.jpg',
        nav: nav(),
        search: false,
        sidebar: {
            '/base/': getChildren('./docs/base/', 'Base'),
            '/framework/': getChildren('./docs/framework/', 'Framework'),
            '/react/': getChildren('./docs/react/', 'React'),
        },
    }
}


function nav() {
    return [
        { text: 'React', link: '/react/index' },
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
                { text: 'js-utils', link: '/base/js-utils' }
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
                // { text: 'React', link: '/framework/React' },
            ]
        }
    ]
}


function sidebarReact() {
    return [
        {
            text: 'React',
            collapsible: true,
            items: [
                { text: 'details', link: '/react/details' },
                // { text: 'React', link: '/framework/React' },
            ]
        }
    ]
}