// -- start vuepress-sidebar-atuo
// const {getChildren} = require("vuepress-sidebar-atuo")
const fs = require('fs')
const path = require('path')
function getChildren(path, title, sort = false) {
    let root = { text: title, items: [] }
    readDirSync(path, root)
    return root.items;
}
/**
 root :[
     {
      dirName: 'xxx';
     childern: [{
         children: []
     }]
 } 
 ]
 */
function readDirSync(path, root) {
    var pa = fs.readdirSync(path);
    pa.forEach(function (ele, index) {
        if (ele.indexOf('index') < 0 && ele.indexOf('docsbase') < 0) {
            if (!root.items) {
                root.items = [];
            }
            var info = fs.statSync(path + "/" + ele)
            if (info.isDirectory()) {
                const temp = {
                    text: ele,
                    collapsible: true,
                    items: []
                }
                root.items.push(temp)
                readDirSync(path + ele, temp)
            } else {
                if (ele.includes(".md")) {
                    let link = String(path + '/' + ele).split('docs')[1]
                    link = link.replace('//', '/')
                    root.items.push({ text: ele.split('.md')[0], link: link })
                }
            }
        }
    })
}



// 目录用变量统一表示了吧。。。

module.exports = {
    lang: 'en-US',
    title: '笔记',
    lastUpdated: true,
    themeConfig: {
        logo: '/logo.jpg',
        nav: nav(),
        search: false,
        sidebar: {
            '/javascript/': getChildren('./docs/javascript/'),
            '/基础/': getChildren('./docs/基础/'),
            '/框架/': getChildren('./docs/框架/'),
            '/react/': getChildren('./docs/react/'),
            '/算法/': getChildren('./docs/算法/'),
            '/业务/': getChildren('./docs/业务/'),
        },
    }
}


function nav() {
    return [
        { text: 'javascript', link: '/javascript/index' },
        { text: '算法', link: '/算法/index' },
        { text: 'React', link: '/react/index' },
        { text: '基础', link: '/基础/index' },
        { text: '框架', link: '/框架/index' },
        { text: '业务', link: '/业务/index' },
    ]
}
<<<<<<< HEAD
=======

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
            ]
        }
    ]
}


// function sidebarReact() {
//     return [
//         {
//             text: 'React',
//             collapsible: true,
//             items: [
//                 { text: 'details', link: '/react/details' },
//                 // { text: 'React', link: '/framework/React' },
//             ]
//         }
//     ]
// }
>>>>>>> d54c029eda2c284a0cda5e724390e058f02c165e
