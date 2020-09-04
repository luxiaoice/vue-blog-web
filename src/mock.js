import { Random as _Random, mock } from 'mockjs';
// 获取 mock.Random 对象
const Random = _Random;
//使用mockjs模拟数据 

mock('/blog/getHeaderNav', (req, res) => {
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
                    name: "留言板",
                    url:"/comment"
                },
                {
                    id:6,
                    name: "关于",
                    url:"/about"
                },
                
            ]
    return {
        titles: title,
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
mock('/blog/getUserCard', (req, res) => {
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
mock('/blog/getRecentArticle',(req,res) => {
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
mock('/blog/getHotArticle',(req,res) => {
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
mock('/blog/getTags',(req,res) => {
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
mock(RegExp('/blog/getHomeIndex'+ ".*"),'post',(params) => {
    let currentPage = JSON.parse(params.body).params.currentPage;
    let indexData =
    [
        {   
            id:1,
            title : "出师表",
            author: "诸葛亮",
            picture:"",
            heat:99,
            commentsNumber:6,
            type:"文言文",
            content: "《出师表》出自于《三国志·诸葛亮传》卷三十五，是三国时期（227年）汉丞相诸葛亮在决定北上伐魏、夺取长安（今汉长安城遗址）之前给后主刘禅上书的表文。这篇表文以议论为主，兼用记叙和抒情。以恳切委婉的言辞劝勉后主要广开言路、严明赏罚、亲贤远佞，以此兴复汉室 还于旧都；同时也表达自己以身许国，忠贞不二的思想。全文既不借助于华丽的辞藻，又不引用古老的典故，多以四字句行文。此篇文章入选人教版初中语文九年级下册教科书。"

        },
        {   
            id:2,
            title : "出师表",
            author: "诸葛亮",
            picture:"",
            heat:99,
            commentsNumber:6,
            type:"文言文",
            content: "《出师表》出自于《三国志·诸葛亮传》卷三十五，是三国时期（227年）汉丞相诸葛亮在决定北上伐魏、夺取长安（今汉长安城遗址）之前给后主刘禅上书的表文。这篇表文以议论为主，兼用记叙和抒情。以恳切委婉的言辞劝勉后主要广开言路、严明赏罚、亲贤远佞，以此兴复汉室 还于旧都；同时也表达自己以身许国，忠贞不二的思想。全文既不借助于华丽的辞藻，又不引用古老的典故，多以四字句行文。此篇文章入选人教版初中语文九年级下册教科书。"

        },
        {   
            id:3,
            title : "出师表",
            author: "诸葛亮",
            picture:"",
            heat:99,
            commentsNumber:6,
            type:"文言文",
            content: "《出师表》出自于《三国志·诸葛亮传》卷三十五，是三国时期（227年）汉丞相诸葛亮在决定北上伐魏、夺取长安（今汉长安城遗址）之前给后主刘禅上书的表文。这篇表文以议论为主，兼用记叙和抒情。以恳切委婉的言辞劝勉后主要广开言路、严明赏罚、亲贤远佞，以此兴复汉室 还于旧都；同时也表达自己以身许国，忠贞不二的思想。全文既不借助于华丽的辞藻，又不引用古老的典故，多以四字句行文。此篇文章入选人教版初中语文九年级下册教科书。"

        },
        {   
            id:4,
            title : "出师表",
            author: "诸葛亮",
            picture:"",
            heat:77,
            commentsNumber:6,
            type:"文言文",
            content: "《出师表》出自于《三国志·诸葛亮传》卷三十五，是三国时期（227年）汉丞相诸葛亮在决定北上伐魏、夺取长安（今汉长安城遗址）之前给后主刘禅上书的表文。这篇表文以议论为主，兼用记叙和抒情。以恳切委婉的言辞劝勉后主要广开言路、严明赏罚、亲贤远佞，以此兴复汉室 还于旧都；同时也表达自己以身许国，忠贞不二的思想。全文既不借助于华丽的辞藻，又不引用古老的典故，多以四字句行文。此篇文章入选人教版初中语文九年级下册教科书。"

        },
        {   
            id:5,
            title : "出师表",
            author: "诸葛亮",
            picture:"",
            heat:98,
            commentsNumber:6,
            type:"文言文",
            content: "《出师表》出自于《三国志·诸葛亮传》卷三十五，是三国时期（227年）汉丞相诸葛亮在决定北上伐魏、夺取长安（今汉长安城遗址）之前给后主刘禅上书的表文。这篇表文以议论为主，兼用记叙和抒情。以恳切委婉的言辞劝勉后主要广开言路、严明赏罚、亲贤远佞，以此兴复汉室 还于旧都；同时也表达自己以身许国，忠贞不二的思想。全文既不借助于华丽的辞藻，又不引用古老的典故，多以四字句行文。此篇文章入选人教版初中语文九年级下册教科书。"

        },
    ]
    let pages = {
        //当前页
        currentPage:currentPage,
        //一页多少个
        pageSize:3,
        //总页数
        totalPageNum: indexData.length%3==0?indexData.length/3:parseInt(indexData.length/3+1),
        //总个数
        //totalNum: indexData.length,
        //是否有下一页
        //hasPrev:true,
        //hasNext:true,
    }
    
    let newIndexData= indexData.slice((pages.currentPage-1)*pages.pageSize,(pages.currentPage)*pages.pageSize)
    
    return{
        indexData : {
            pages,
            newIndexData
        }
    }
})
mock('/blog/getTypes',(req,res) => {
    let types =
    [
        {   
            id:1,
            name : "代码人生",
            url: "/types/coding",
            count:2

        },
        {
            id:2,
            name:"生活感悟",
            url: "/types/lifeInsights",
            count:3
        },
        {
            id:3,
            name:"实用工具",
            url: "/types/utilities",
            count:6
        },
        {
            id:4,
            name:"风景如画",
            url: "/types/picturesque",
            count:8
        },
    ]
    return{
        types:types
    }
})
mock(RegExp('/blog/getType'+ ".*"),'post',(params) => {
    let paramsData = JSON.parse(params.body).params;
    let indexData =
    [
        {   
            id:1,
            title : "出师表",
            author: "诸葛亮",
            picture:"",
            heat:99,
            commentsNumber:6,
            type:"文言文",
            content: "《出师表》出自于《三国志·诸葛亮传》卷三十五，是三国时期（227年）汉丞相诸葛亮在决定北上伐魏、夺取长安（今汉长安城遗址）之前给后主刘禅上书的表文。这篇表文以议论为主，兼用记叙和抒情。以恳切委婉的言辞劝勉后主要广开言路、严明赏罚、亲贤远佞，以此兴复汉室 还于旧都；同时也表达自己以身许国，忠贞不二的思想。全文既不借助于华丽的辞藻，又不引用古老的典故，多以四字句行文。此篇文章入选人教版初中语文九年级下册教科书。"

        },
        {   
            id:2,
            title : "出师表",
            author: "诸葛亮",
            picture:"",
            heat:99,
            commentsNumber:6,
            type:"风景如画",
            content: "《出师表》出自于《三国志·诸葛亮传》卷三十五，是三国时期（227年）汉丞相诸葛亮在决定北上伐魏、夺取长安（今汉长安城遗址）之前给后主刘禅上书的表文。这篇表文以议论为主，兼用记叙和抒情。以恳切委婉的言辞劝勉后主要广开言路、严明赏罚、亲贤远佞，以此兴复汉室 还于旧都；同时也表达自己以身许国，忠贞不二的思想。全文既不借助于华丽的辞藻，又不引用古老的典故，多以四字句行文。此篇文章入选人教版初中语文九年级下册教科书。"

        },
        {   
            id:3,
            title : "出师表",
            author: "诸葛亮",
            picture:"",
            heat:99,
            commentsNumber:6,
            type:"实用工具",
            content: "《出师表》出自于《三国志·诸葛亮传》卷三十五，是三国时期（227年）汉丞相诸葛亮在决定北上伐魏、夺取长安（今汉长安城遗址）之前给后主刘禅上书的表文。这篇表文以议论为主，兼用记叙和抒情。以恳切委婉的言辞劝勉后主要广开言路、严明赏罚、亲贤远佞，以此兴复汉室 还于旧都；同时也表达自己以身许国，忠贞不二的思想。全文既不借助于华丽的辞藻，又不引用古老的典故，多以四字句行文。此篇文章入选人教版初中语文九年级下册教科书。"

        },
        {   
            id:4,
            title : "出师表",
            author: "诸葛亮",
            picture:"",
            heat:77,
            commentsNumber:6,
            type:"生活感悟",
            content: "《出师表》出自于《三国志·诸葛亮传》卷三十五，是三国时期（227年）汉丞相诸葛亮在决定北上伐魏、夺取长安（今汉长安城遗址）之前给后主刘禅上书的表文。这篇表文以议论为主，兼用记叙和抒情。以恳切委婉的言辞劝勉后主要广开言路、严明赏罚、亲贤远佞，以此兴复汉室 还于旧都；同时也表达自己以身许国，忠贞不二的思想。全文既不借助于华丽的辞藻，又不引用古老的典故，多以四字句行文。此篇文章入选人教版初中语文九年级下册教科书。"

        },
        {   
            id:5,
            title : "出师表",
            author: "诸葛亮",
            picture:"",
            heat:98,
            commentsNumber:6,
            type:"代码人生",
            content: "《出师表》出自于《三国志·诸葛亮传》卷三十五，是三国时期（227年）汉丞相诸葛亮在决定北上伐魏、夺取长安（今汉长安城遗址）之前给后主刘禅上书的表文。这篇表文以议论为主，兼用记叙和抒情。以恳切委婉的言辞劝勉后主要广开言路、严明赏罚、亲贤远佞，以此兴复汉室 还于旧都；同时也表达自己以身许国，忠贞不二的思想。全文既不借助于华丽的辞藻，又不引用古老的典故，多以四字句行文。此篇文章入选人教版初中语文九年级下册教科书。"

        },
        {   
            id:6,
            title : "出师表",
            author: "诸葛亮",
            picture:"",
            heat:98,
            commentsNumber:6,
            type:"代码人生",
            content: "《出师表》出自于《三国志·诸葛亮传》卷三十五，是三国时期（227年）汉丞相诸葛亮在决定北上伐魏、夺取长安（今汉长安城遗址）之前给后主刘禅上书的表文。这篇表文以议论为主，兼用记叙和抒情。以恳切委婉的言辞劝勉后主要广开言路、严明赏罚、亲贤远佞，以此兴复汉室 还于旧都；同时也表达自己以身许国，忠贞不二的思想。全文既不借助于华丽的辞藻，又不引用古老的典故，多以四字句行文。此篇文章入选人教版初中语文九年级下册教科书。"

        },
        {   
            id:7,
            title : "出师表",
            author: "诸葛亮",
            picture:"",
            heat:98,
            commentsNumber:6,
            type:"代码人生",
            content: "《出师表》出自于《三国志·诸葛亮传》卷三十五，是三国时期（227年）汉丞相诸葛亮在决定北上伐魏、夺取长安（今汉长安城遗址）之前给后主刘禅上书的表文。这篇表文以议论为主，兼用记叙和抒情。以恳切委婉的言辞劝勉后主要广开言路、严明赏罚、亲贤远佞，以此兴复汉室 还于旧都；同时也表达自己以身许国，忠贞不二的思想。全文既不借助于华丽的辞藻，又不引用古老的典故，多以四字句行文。此篇文章入选人教版初中语文九年级下册教科书。"

        },
        {   
            id:8,
            title : "出师表",
            author: "诸葛亮",
            picture:"",
            heat:98,
            commentsNumber:6,
            type:"代码人生",
            content: "《出师表》出自于《三国志·诸葛亮传》卷三十五，是三国时期（227年）汉丞相诸葛亮在决定北上伐魏、夺取长安（今汉长安城遗址）之前给后主刘禅上书的表文。这篇表文以议论为主，兼用记叙和抒情。以恳切委婉的言辞劝勉后主要广开言路、严明赏罚、亲贤远佞，以此兴复汉室 还于旧都；同时也表达自己以身许国，忠贞不二的思想。全文既不借助于华丽的辞藻，又不引用古老的典故，多以四字句行文。此篇文章入选人教版初中语文九年级下册教科书。"

        },
    ]
    let searchIndexDate=indexData.filter(indexData => indexData.type === paramsData.type)
    let pages = {
        //当前页
        currentPage:paramsData.currentPage,
        //一页多少个
        pageSize:3,
        //总页数
        totalPageNum: searchIndexDate.length%3==0?searchIndexDate.length/3:parseInt(searchIndexDate.length/3)+1,
        //总个数
        //totalNum: indexData.length,
        //是否有下一页
        //hasPrev:true,
        //hasNext:true,
    }
    let newIndexData= searchIndexDate.slice((pages.currentPage-1)*pages.pageSize,(pages.currentPage)*pages.pageSize)
    return{
        indexData : {
            pages,
            newIndexData
        }
    }
})
mock('/blog/getTags',(req,res) => {
    let tags =
    [
        {   
            id:1,
            name : "hi",
            url: "/tags/hi",
            count:2

        },
        {
            id:2,
            name:"vue",
            url: "/tags/vue",
            count:3
        },
        {
            id:3,
            name:"css",
            url: "/tags/css",
            count:6
        },
        {
            id:4,
            name:"java",
            url: "/tags/java",
            count:8
        },
    ]
    return{
        tags:tags
    }
})
mock(RegExp('/blog/getTag'+ ".*"),'post',(params) => {
    let paramsData = JSON.parse(params.body).params;
    let indexData =
    [
        {   
            id:1,
            title : "出师表",
            author: "诸葛亮",
            picture:"",
            heat:99,
            commentsNumber:6,
            tag:"java",
            content: "《出师表》出自于《三国志·诸葛亮传》卷三十五，是三国时期（227年）汉丞相诸葛亮在决定北上伐魏、夺取长安（今汉长安城遗址）之前给后主刘禅上书的表文。这篇表文以议论为主，兼用记叙和抒情。以恳切委婉的言辞劝勉后主要广开言路、严明赏罚、亲贤远佞，以此兴复汉室 还于旧都；同时也表达自己以身许国，忠贞不二的思想。全文既不借助于华丽的辞藻，又不引用古老的典故，多以四字句行文。此篇文章入选人教版初中语文九年级下册教科书。"

        },
        {   
            id:2,
            title : "出师表",
            author: "诸葛亮",
            picture:"",
            heat:99,
            commentsNumber:6,
            tag:"java",
            content: "《出师表》出自于《三国志·诸葛亮传》卷三十五，是三国时期（227年）汉丞相诸葛亮在决定北上伐魏、夺取长安（今汉长安城遗址）之前给后主刘禅上书的表文。这篇表文以议论为主，兼用记叙和抒情。以恳切委婉的言辞劝勉后主要广开言路、严明赏罚、亲贤远佞，以此兴复汉室 还于旧都；同时也表达自己以身许国，忠贞不二的思想。全文既不借助于华丽的辞藻，又不引用古老的典故，多以四字句行文。此篇文章入选人教版初中语文九年级下册教科书。"

        },
        {   
            id:3,
            title : "出师表",
            author: "诸葛亮",
            picture:"",
            heat:99,
            commentsNumber:6,
            tag:"java",
            content: "《出师表》出自于《三国志·诸葛亮传》卷三十五，是三国时期（227年）汉丞相诸葛亮在决定北上伐魏、夺取长安（今汉长安城遗址）之前给后主刘禅上书的表文。这篇表文以议论为主，兼用记叙和抒情。以恳切委婉的言辞劝勉后主要广开言路、严明赏罚、亲贤远佞，以此兴复汉室 还于旧都；同时也表达自己以身许国，忠贞不二的思想。全文既不借助于华丽的辞藻，又不引用古老的典故，多以四字句行文。此篇文章入选人教版初中语文九年级下册教科书。"

        },
        {   
            id:4,
            title : "出师表",
            author: "诸葛亮",
            picture:"",
            heat:77,
            commentsNumber:6,
            tagç:"hi",
            content: "《出师表》出自于《三国志·诸葛亮传》卷三十五，是三国时期（227年）汉丞相诸葛亮在决定北上伐魏、夺取长安（今汉长安城遗址）之前给后主刘禅上书的表文。这篇表文以议论为主，兼用记叙和抒情。以恳切委婉的言辞劝勉后主要广开言路、严明赏罚、亲贤远佞，以此兴复汉室 还于旧都；同时也表达自己以身许国，忠贞不二的思想。全文既不借助于华丽的辞藻，又不引用古老的典故，多以四字句行文。此篇文章入选人教版初中语文九年级下册教科书。"

        },
        {   
            id:5,
            title : "出师表",
            author: "诸葛亮",
            picture:"",
            heat:98,
            commentsNumber:6,
            tag:"java",
            content: "《出师表》出自于《三国志·诸葛亮传》卷三十五，是三国时期（227年）汉丞相诸葛亮在决定北上伐魏、夺取长安（今汉长安城遗址）之前给后主刘禅上书的表文。这篇表文以议论为主，兼用记叙和抒情。以恳切委婉的言辞劝勉后主要广开言路、严明赏罚、亲贤远佞，以此兴复汉室 还于旧都；同时也表达自己以身许国，忠贞不二的思想。全文既不借助于华丽的辞藻，又不引用古老的典故，多以四字句行文。此篇文章入选人教版初中语文九年级下册教科书。"

        },
        {   
            id:6,
            title : "出师表",
            author: "诸葛亮",
            picture:"",
            heat:98,
            commentsNumber:6,
            tag:"java",
            content: "《出师表》出自于《三国志·诸葛亮传》卷三十五，是三国时期（227年）汉丞相诸葛亮在决定北上伐魏、夺取长安（今汉长安城遗址）之前给后主刘禅上书的表文。这篇表文以议论为主，兼用记叙和抒情。以恳切委婉的言辞劝勉后主要广开言路、严明赏罚、亲贤远佞，以此兴复汉室 还于旧都；同时也表达自己以身许国，忠贞不二的思想。全文既不借助于华丽的辞藻，又不引用古老的典故，多以四字句行文。此篇文章入选人教版初中语文九年级下册教科书。"

        },
        {   
            id:7,
            title : "出师表",
            author: "诸葛亮",
            picture:"",
            heat:98,
            commentsNumber:6,
            tag:"vue",
            content: "《出师表》出自于《三国志·诸葛亮传》卷三十五，是三国时期（227年）汉丞相诸葛亮在决定北上伐魏、夺取长安（今汉长安城遗址）之前给后主刘禅上书的表文。这篇表文以议论为主，兼用记叙和抒情。以恳切委婉的言辞劝勉后主要广开言路、严明赏罚、亲贤远佞，以此兴复汉室 还于旧都；同时也表达自己以身许国，忠贞不二的思想。全文既不借助于华丽的辞藻，又不引用古老的典故，多以四字句行文。此篇文章入选人教版初中语文九年级下册教科书。"

        },
        {   
            id:8,
            title : "出师表",
            author: "诸葛亮",
            picture:"",
            heat:98,
            commentsNumber:6,
            tag:"css",
            content: "《出师表》出自于《三国志·诸葛亮传》卷三十五，是三国时期（227年）汉丞相诸葛亮在决定北上伐魏、夺取长安（今汉长安城遗址）之前给后主刘禅上书的表文。这篇表文以议论为主，兼用记叙和抒情。以恳切委婉的言辞劝勉后主要广开言路、严明赏罚、亲贤远佞，以此兴复汉室 还于旧都；同时也表达自己以身许国，忠贞不二的思想。全文既不借助于华丽的辞藻，又不引用古老的典故，多以四字句行文。此篇文章入选人教版初中语文九年级下册教科书。"

        },
    ]
    let searchIndexDate=indexData.filter(indexData => indexData.tag === paramsData.tag)
    let pages = {
        //当前页
        currentPage:paramsData.currentPage,
        //一页多少个
        pageSize:3,
        //总页数
        totalPageNum: searchIndexDate.length%3==0?searchIndexDate.length/3:parseInt(searchIndexDate.length/3)+1,
        //总个数
        //totalNum: indexData.length,
        //是否有下一页
        //hasPrev:true,
        //hasNext:true,
    }
    let newIndexData= searchIndexDate.slice((pages.currentPage-1)*pages.pageSize,(pages.currentPage)*pages.pageSize)
    return{
        indexData : {
            pages,
            newIndexData
        }
    }
})
mock('/blog/getArchives',(req,res) => {
    let archivesItem =
    [
        {   
            id:1,
            title : "出师表出师表出师表出师表出师表",
            url: "",
            date:"2020年8月29日 12:43:23"

        },
        {
            id:2,
            title:"vuevuevuevuevue",
            url: "",
            date:"2020年8月29日 12:43:23"
        },
        {
            id:3,
            title:"css",
            url: "",
            date:"2020年8月29日 12:43:23"
        },
        {
            id:4,
            title:"java",
            url: "",
            date:"2020年8月29日 12:43:23"
        },
    ]
    return{
        archivesItem:archivesItem
    }
})
mock(RegExp('/blog/getComment'+ ".*"),'post',(params) => {
    let currentPage = JSON.parse(params.body).params.currentPage;
    let commentData =
    [
        {   
            id:1,
            userId:"11",
            name:"小白",
            date:"2020年2月9日 20:23:23",
            ip:"192.134.143.21",
            ipaddress:"北京市",
            comment:"今天天气真好，天气晴朗很适合户外运动，但是我不想出去因为我想写代码写代码让我快乐",
            subComments:[
                {
                    id:11,
                    userId:"12",
                    targetUserId:11,
                    name:"小白hh",
                    date:"2020年2月9日 20:23:23",
                    ip:"192.134.143.21",
                    ipaddress:"北京市",
                    comment:"写代码不是真的快乐",
                },
                {
                    id:12,
                    userId:"11",
                    targetUserId:11,
                    name:"小白bb",
                    date:"2020年2月9日 20:23:23",
                    ip:"192.134.143.21",
                    ipaddress:"北京市",
                    comment:"写代码不是真的快乐",
                }
            ]

        },
        {   
            id:2,
            userId:"11",
            name:"小白",
            date:"2020年2月9日 20:23:23",
            ip:"192.134.143.21",
            ipaddress:"北京市",
            comment:"今天天气真好，天气晴朗很适合户外运动，但是我不想出去因为我想写代码写代码让我快乐",
            subComments:[
                {
                    id:13,
                    userId:"12",
                    targetUserId:11,
                    name:"小白hh",
                    date:"2020年2月9日 20:23:23",
                    ip:"192.134.143.21",
                    ipaddress:"北京市",
                    comment:"写代码不是真的快乐",
                },
                {
                    id:23,
                    userId:"11",
                    targetUserId:11,
                    name:"小白bb",
                    date:"2020年2月9日 20:23:23",
                    ip:"192.134.143.21",
                    ipaddress:"北京市",
                    comment:"写代码不是真的快乐",
                }
            ]

        },
        {   
            id:3,
            userId:"11",
            name:"小白",
            date:"2020年2月9日 20:23:23",
            ip:"192.134.143.21",
            ipaddress:"北京市",
            comment:"今天天气真好，天气晴朗很适合户外运动，但是我不想出去因为我想写代码写代码让我快乐",
            subComments:[
                {
                    id:15,
                    userId:"12",
                    targetUserId:11,
                    name:"小白hh",
                    date:"2020年2月9日 20:23:23",
                    ip:"192.134.143.21",
                    ipaddress:"北京市",
                    comment:"写代码不是真的快乐",
                },
                {
                    id:25,
                    userId:"11",
                    targetUserId:11,
                    name:"小白bb",
                    date:"2020年2月9日 20:23:23",
                    ip:"192.134.143.21",
                    ipaddress:"北京市",
                    comment:"写代码不是真的快乐",
                }
            ]

        },
        {   
            id:4,
            userId:"11",
            name:"小白",
            date:"2020年2月9日 20:23:23",
            ip:"192.134.143.21",
            ipaddress:"北京市",
            comment:"今天天气真好，天气晴朗很适合户外运动，但是我不想出去因为我想写代码写代码让我快乐",
            subComments:[
                {
                    id:16,
                    userId:"12",
                    targetUserId:11,
                    name:"小白hh",
                    date:"2020年2月9日 20:23:23",
                    ip:"192.134.143.21",
                    ipaddress:"北京市",
                    comment:"写代码不是真的快乐",
                },
                {
                    id:26,
                    userId:"11",
                    targetUserId:11,
                    name:"小白bb",
                    date:"2020年2月9日 20:23:23",
                    ip:"192.134.143.21",
                    ipaddress:"北京市",
                    comment:"写代码不是真的快乐",
                }
            ]

        },
        {   
            id:5,
            userId:"11",
            name:"小白",
            date:"2020年2月9日 20:23:23",
            ip:"192.134.143.21",
            ipaddress:"北京市",
            comment:"今天天气真好，天气晴朗很适合户外运动，但是我不想出去因为我想写代码写代码让我快乐",
            subComments:[
                {
                    id:17,
                    userId:"12",
                    targetUserId:11,
                    name:"小白hh",
                    date:"2020年2月9日 20:23:23",
                    ip:"192.134.143.21",
                    ipaddress:"北京市",
                    comment:"写代码不是真的快乐",
                },
                {
                    id:27,
                    userId:"11",
                    targetUserId:11,
                    name:"小白bb",
                    date:"2020年2月9日 20:23:23",
                    ip:"192.134.143.21",
                    ipaddress:"北京市",
                    comment:"写代码不是真的快乐",
                }
            ]

        },
    ]
    let pages = {
        //当前页
        currentPage:currentPage,
        //一页多少个
        pageSize:3,
        //总页数
        totalPageNum: commentData.length%3==0?commentData.length/3:parseInt(commentData.length/3+1),
        //总个数
        //totalNum: indexData.length,
        //是否有下一页
        //hasPrev:true,
        //hasNext:true,
    }
    
    let newcommentData= commentData.slice((pages.currentPage-1)*pages.pageSize,(pages.currentPage)*pages.pageSize)
    
    return{
        commentData : {
            pages,
            newcommentData
        }
    }
})