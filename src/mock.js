import { Random as _Random, mock } from 'mockjs';
// 获取 mock.Random 对象
const Random = _Random;
//使用mockjs模拟数据 
mock('/blog/headerNav', (req, res) => {
    //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据     
        
            let title=[
                {
                    id:1,
                    name: "首页",
                    url:"/"
                },
                {
                    id:2,
                    name: "分类",
                    url:"/types"
                },
                {
                    id:3,
                    name: "标签",
                    url:"/tags"
                },
                {
                    id:4,
                    name: "归档",
                    url:"/archives"
                },
                {
                    id:5,
                    name: "关于我",
                    url:"/about"
                },
                
            ]
    return {
        titles: title
    }
})
mock(RegExp('/blog/search' + ".*"), "get",(req, res) => {
    //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据     
            let search=[
                {
                    id:1,
                    title:"cxuexi",
                    test:"hahahhaa"
                },
                {
                    id:2,
                    title:"cxuexi",
                    test:"hahahhaa"
                },{
                    id:3,
                    title:"cxuexi",
                    test:"hahahhaa"
                },{
                    id:4,
                    title:"cxuexi",
                    test:"hahahhaa"
                },{
                    id:1,
                    title:"cxuexi",
                    test:"hahahhaa"
                },
                
            ]
    return {
        searchData: search
    }
})
mock('/blog/singnin', (req, res) => {
    //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据     
        
            let user=[
                {
                    id:1,
                    name: "路小野",
                    userAvatar: "/",
                    
                }
                
            ]
    return {
        user: user
    }
})
mock('/blog/userCard', (req, res) => {
    //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据     
            let user=
            {
                id:1,
                name: "路小野",
                //avatar: "/img/avatar.png",
                github: "https://github.com/luxiaoice",
            }
    return {
        user: user
    }
})
mock('/blog/recentArticle',(req,res) => {
    let recentArticles =
    [
        {   
            id:1,
            name : "wow法师的基本操作实用指南",
            url: ""

        },
        {
            id:2,
            name:"java核心技术详解",
            url: ""
        },
        {
            id:3,
            name:"读代码简洁之道",
            url: ""
        },
        {
            id:4,
            name:"看看风景",
            url: ""
        },
    ]
    return{
        recentArticles:recentArticles
    }
})
mock('/blog/hotArticle',(req,res) => {
    let hotArticles =
    [
        {   
            id:1,
            name : "wow法师的基本操作实用指南",
            url: ""

        },
        {
            id:2,
            name:"java核心技术详解",
            url: ""
        },
        {
            id:3,
            name:"读代码简洁之道",
            url: ""
        },
        {
            id:4,
            name:"看看风景",
            url: ""
        },
    ]
    return{
        hotArticles:hotArticles
    }
})
mock('/blog/tags',(req,res) => {
    let tags =
    [
        {   
            id:1,
            name : "代码人生",
            url: ""

        },
        {
            id:2,
            name:"生活感悟",
            url: ""
        },
        {
            id:3,
            name:"实用工具",
            url: ""
        },
        {
            id:4,
            name:"风景如画",
            url: ""
        },
    ]
    return{
        tags:tags
    }
})