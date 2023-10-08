const express=require('express');
const router=express.Router();
//引入mock
var Mock=require('mockjs');

const citys=require('./data/city/data.json');

const { v4 } = require('uuid')

router.get('/',(req,res)=>{
    res.send('测试成功');
})

router.get('/mock',(req,res)=>{
    /* const data=Mock.mock({
        "id+1":1,
        "string|1-10":"★",
        "num|1-100":100,
        "boolean|1":true,
        "object|2": {
            "310000": "上海市",
            "320000": "江苏省",
            "330000": "浙江省",
            "340000": "安徽省"
          },
        str:"@word(5)",
        ch:"@cword(3)"
    }) */

    const data=Mock.mock({
        "list|10":[{
            'id|+1':1,
            'title':'@cword(3,8)',
            'huxing|1':['一室一厅','两室一厅','三室两厅']
        }]
    })
    res.send(data)
})

router.get('/banner',(req,res)=>{
    const data=Mock.mock({
        status:200,
        'banner|3':[{
            'id|+1':1,
            'imgUrl|+1':[
                'http://iwenwiki.com/api/livable/banner/banner1.png',
                'http://iwenwiki.com/api/livable/banner/banner2.png',
                'http://iwenwiki.com/api/livable/banner/banner3.png'
            ]
        }]
    })

    res.send(data)
})


router.get('/hothouse',(req,res)=>{
    let city=req.query.city||'北京';
    res.send(Mock.mock({
        status:200,
        'list|5':[{
            'id|+1':1,
            address:city+'-@cword(3,8)',
            'huxing|1':['一室一厅',"两室一厅","三室两厅"],
            'type|1':['整租','合租'],
            'price|2000-10000':1,
            'area|50-120.2':1,  //总面积
            'imgUrl|+1':[
                'http://iwenwiki.com/api/livable/shop/z1.jpg',
                'http://iwenwiki.com/api/livable/details/2.jpg',
                'http://iwenwiki.com/api/livable/shop/z2.jpg',
                'http://iwenwiki.com/api/livable/details/4.jpg',
                'http://iwenwiki.com/api/livable/shop/z3.jpg',
                'http://iwenwiki.com/api/livable/details/6.jpg'
            ]
        }]
    }))
})

router.get('/selectCity',(req,res)=>{
    res.send({
        status:200,
        data:citys
    })
})


/**
 * 搜索房源接口
 * params: 当前城市、搜索关键字、请求页码
 * city：城市
 * val：搜索关键词
 * page:页码
 * http://localhost:7788/search?city=北京&val=123&page=
 */
router.get('/search', (req, res) => {
    let { city, val, page = 0 } = req.query;
    res.send(Mock.mock({
        success: true,
        nextPage: +page + 1,
        'list|10': [{ //生成10条数据
            'img|1': [  //随机取一个图片
                'http://iwenwiki.com/api/livable/search/1.jpg',
                'http://iwenwiki.com/api/livable/search/2.JPG',
                'http://iwenwiki.com/api/livable/search/3.jpg',
                'http://iwenwiki.com/api/livable/search/4.JPG',
                'http://iwenwiki.com/api/livable/search/5.jpg',
                'http://iwenwiki.com/api/livable/search/6.jpg'
            ],
            // temptitle:,//生成文字描述
            // 'id|+1': 100,//id 自增
            id:function(){
                return v4();
            },//id自增
            title: city + val + '- @cword(5,8)',//房源信息
            'total|6-30': 1,//总楼层高度，随机获取一个楼层 20
            'current|1-30': 1,//楼层  1-32层  30
            floor: function () { //楼层  楼层/总高   14/24
                if (this.total >= this.current) {  //30>20
                    return `${this.current}/${this.total}`  //20/30
                } else {
                    return `${this.total}/${this.current}`
                }
            },
            'huxing|1': ['一室一厅', '两室一厅', '三室两厅'],//户型
            'area|40-140': 1,//总面积
            'type|1': ['整租', '合租'],//出租类型
            'price|3000-20000': 1 //租金
        }]
    }))

})


module.exports=router;