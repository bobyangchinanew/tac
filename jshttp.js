//./jshttp(改).js
{
//"spider":"./top98_1.jar",
"sites" : [
{"key":"ikanbot","name":"🏆爱看机器人","type":3,"api":"./js/lf_ikanbot3_1_min.js"},
{"key":"ikanbotsq","name":"😰爱看机器人🆘","type":3,"api":"./lib/drpy2.min.js","ext":"./js/ikanbotsq.js"},{"key":"量子资源網","name":"🏆量子资源lz","type":1,"api":"http://cj.lziapi.com/api.php/provide/vod/","playUrl":"","searchable":1,"quickSearch":1,"categories":["国产剧","国产动漫","泰国剧","台湾剧","香港剧","欧美剧","韩国剧","日本剧","动漫","体育","剧情片","动作片","爱情片","喜剧片"]},
{"key":"drpy","name":"豆瓣🍭🔎","type":3,"api":"./lib/drpy2.min.js","ext":"./js/豆瓣.js"},
{"key":"drpy2","name":"豆瓣2🍭🔎","type":3,"api":"./lib/drpy2.min.js","ext":"./js/drpy.js"},
{"key":"drpy__豆瓣","name":"豆瓣🏛[DRPY]🔎","type":3,"api":"https://raw.githubusercontent.com/hjdhnx/dr_py/main/libs/drpy2.min.js","ext":"https://raw.githubusercontent.com/hjdhnx/dr_py/main/js/drpy.js"},
{"key":"独播库","name":"🛩独播库🔎","type":3,"api":"./lib/drpy2.min.js","ext":"./js/独播库.js","playerType":"1"},
{"key":"泥巴","name":"🏆泥巴🔎","type":3,"api":"csp_Nbys","searchable":1,"filterable":1,"jar":"./top98_1.jar"},
{"key":"映迷影院","name":"🇹🇼映迷(繁體)🔎","type":3,"api":"./lib/drpy2.min.js","ext":"./js/映迷影院.js"}
],
"lives": [
    {
      "name": "直播源",
      "type": 0,
      "url": "./直播源(1).txt",
      "epg": "https://epg.112114.xyz/?ch={name}&date={date}",
      "logo": "https://epg.112114.xyz/logo/{name}.png"
    },    
    {
      "name": "FongMi",
      "type": 1,
      "url": "https://raw.githubusercontent.com/FongMi/CatVodSpider/main/json/live.json",
      "epg": "http://epg.51zmt.top:8000/api/diyp/?ch={epg}&date={date}",
      "logo": "http://epg.51zmt.top:8000/{logo}"
    },
    {
      "name": "台灣",
      "type": 0,
      "url": "./live.txt",
      "epg": "https://epg.112114.xyz/?ch={name}&date={date}",
      "logo": "https://epg.112114.xyz/logo/{name}.png"
    },
        {
      "name": "直播1",
      "type": 0,
      "url": "http://home.jundie.top:81/Cat/tv/live.txt",
      "epg": "https://epg.112114.xyz/?ch={name}&date={date}",
      "logo": "https://epg.112114.xyz/logo/{name}.png"
    },
    {
      "name": "直播2",
      "type": 0,
      "url": "https://dashu0754.com/api/v3/file/get/111/%E6%82%9F%E7%A9%BA.txt?sign=Vh_6WlBWzq1GeV88r1QjRQE9DCNcz5rBZpmSMo_q_y8%3D%3A0",
      "epg": "https://epg.112114.xyz/?ch={name}&date={date}",
      "logo": "https://epg.112114.xyz/logo/{name}.png"
    }
  ],
"rules": [ 
{"host":"*", "rule":["douyinvod.com", "/video/tos/cn/"]}, 
{"host":"*", "rule":["default.365yg.com", "/video/tos/cn/"]}, 
{"host":"*","rule":["ysting.ysxs8.vip","m4a"]},
{"host":"*", "rule":["/m3u8.php?path=", ".m3u8"]}, 
{"host":"*", "rule":["/API.php?time=", "key=", "path=", ".m3u8"]}, 
{"host":"*", "rule":["oss-cn-m3u8", "myqcloud.com.zh188.net", "?url=", ".m3u8"]}, 
{"host":"*", "rule":["iesdouyin.com/aweme", "video_id="]},
{"host":"*", "rule":["douyin.com/aweme", "video_id="]},
{"host":"*", "rule":["huoshan.com", "/item/video/"]}, 
{"host":"*", "rule":["http((?!http).){12,}?\\.(m3u8|mp4|flv|avi|mkv|rm|wmv|mpg|m4a)\\?.*"]}, 
{"host":"*", "rule":["http((?!http).){12,}\\.(m3u8|mp4|flv|avi|mkv|rm|wmv|mpg|m4a)"]},
{"host":"*", "rule":["aliyundrive.net", "response-content-disposition=", ".m3u8"]}, 
{"host":"*", "rule":["aliyundrive.net", "response-content-disposition=", ".mp4"]}, 
{"host":"*", "rule":["aliyundrive.net", "response-content-disposition=", ".mkv"]}, 
{"host":"www.007ts.me", "rule":["hls.pchj.net", ".m3u8"]},
{"host":"www.agemys.cc","rule":["cdn-tos","obj/tos-cn"]},
{"host":"zjmiao.com","rule":["play.videomiao.vip/API.php","time="]},
{"host":"www.djuu.com","rule":["mp4.djuu.com","m4a"]},
{"host":"www.sharenice.net","rule":["huoshan.com","/item/video/"],"filter":[]},
{"host":"www.sharenice.net","rule":["sovv.qianpailive.com","vid="],"filter":[]},
{"host":"www.sharenice.net","rule":["douyin.com","/play/"]},
{"host":"m.ysxs8.vip","rule":["ysting.ysxs8.vip:81","xmcdn.com"],"filter":[]},
{"host":"hdmoli.com","rule":[".m3u8"]},
{"host":"https://api.live.bilibili.com","rule":["bilivideo.com","/index.m3u8"],"filter":["data.bilibili.com/log/web","i0.hdslb.com/bfs/live/"]},
{"host":"www.agemys.cc","rule":["cdn-tos","obj/tos-cn"]},
{"host":"www.fun4k.com","rule":["https://hd.ijycnd.com/play","index.m3u8"]},
{"host":"zjmiao.com","rule":["play.videomiao.vip/API.php","time=","key=","path="]}
],
"parses":[
//{"name":"解析聚合","type":3,"url":"Demo"},
//{"name":"Web聚合","type":3,"url":"Web"},
{"name":"愛奇藝芒果","type":0,"url":"https://jx.zhanlangbu.com/?url="},
{"name":"優酷","type":1,"url":"http://27.124.4.42:4567/jhjson/ceshi.php?url="},
{"name":"騰訊","type":1,"url":"http://xn--wnup5g.xn--z7x900a.love:63/Art1/analysis.php?v=","ext":{"flag":["qq","腾讯","企鹅","IQiYi","qiyi","爱奇艺","奇艺","youku","YouKu","优酷","sohu","SoHu","搜狐","letv","LeShi","乐视","imgo","mgtv","MangGuo","芒果","SLYS4k","BYGA","luanzi","AliS","dxzy","bilibili","QEYSS","xigua","西瓜视频","腾讯视频","奇艺视频","优酷视频","芒果视频","乐视视频"]}},
{"name":"3号线","type":0,"url":"https://jx.xmflv.com/?url="},
{"name":"4号线","type":0,"url":"https://chaxun.truechat365.com/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"5号线","type":0,"url":"https://jx.bozrc.com:4433/player/?url="},
{"name":"6号线","type":0,"url":"https://jx.parwix.com:4433/player/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"7号线","type":0,"url":"https://jx.parwix.com:4433/player/analysis.php?v=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"8号线","type":0,"url":"https://h5.freejson.xyz/player/?url="},
{"name":"9号线","url":"https://www.8090g.cn/?url="},
{"name":"10号线","type":1,"url":"http://json.youguo520.top/fufeng/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"],"header":{"User-Agent":"Dart/2.14(dart:io)"}}},
{"name":"11号线","type":1,"url":"https://jx.4kdv.com/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"12号线","type":0,"url":"https://jx.m3u8.tv/jiexi/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"13号线","type":0,"url":"https://www.ckmov.com/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"14号线","type":1,"url":"https://api.jiexi.la/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"15号线","type":0,"url":"https://www.nxflv.com/?url="},
{"name":"16号线","type":0,"url":"https://jx.jsonplayer.com/player/?url="},
{"name":"17号线","type":0,"url":"https://www.yemu.xyz/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"18号线","type":0,"url":"https://jx.ccabc.cc/byg/?url="},
{"name":"19号线","type":0,"url":"https://jx.zhanlangbu.com/?url=","ext":{"header":{"User-Agent":"okhttp/4.1.0"},"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"20号线","type":1,"url":"http://lanlan.ckflv.cn/?url=","ext":{"flag":["qiyi","qq","letv","sohu","youku","mgtv","bilibili","wasu","xigua","1905"]}},
{"name":"21号线","type":0,"url":"https://okjx.cc/?url="},
{"name":"22号线","type":0,"url":"http://jx.ivito.cn/?url="},
{"name":"23号线","type":0,"url":"https://dm.xbqgx.com/?url="},
{"name":"24号线","type":0,"url":"https://vip.bljiex.com/?v="},
{"name":"25号线","type":0,"url":"http://pandown.pro/app/ysmjx.php?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"],"header":{"User-Agent":"okhttp/4.1.0"}}}],
"flags":["youku","qq","iqiyi","qiyi","letv","sohu","tudou","pptv","mgtv","wasu"],
"wallpaper":"./黑色.jpeg",
    "ads": [
        "https://vip.ffzy",
        "https://vip.lz",
        "https://hd.lz",
       "vip.ffzyad.com",
        "iqiyi.hbuioo.com",
        "https://lf1-cdn-tos.bytegoofy.com/obj/tos-cn-i-dy/455ccf9e8ae744378118e4bd289288dd",
        "mimg.0c1q0l.cn",
        "www.googletagmanager.com",
        "www.google-analytics.com",
        "mc.usihnbcq.cn",
        "mg.g1mm3d.cn",
        "mscs.svaeuzh.cn",
        "cnzz.hhttm.top",
        "tp.vinuxhome.com",
        "cnzz.mmstat.com",
        "www.baihuillq.com",
        "s23.cnzz.com",
        "z3.cnzz.com",
        "c.cnzz.com",
        "stj.v1vo.top",
        "z12.cnzz.com",
        "img.mosflower.cn",
        "tips.gamevvip.com",
        "ehwe.yhdtns.com",
        "xdn.cqqc3.com",
        "www.jixunkyy.cn",
        "sp.chemacid.cn",
        "hm.baidu.com",
        "s9.cnzz.com",
        "z6.cnzz.com",
        "um.cavuc.com",
        "mav.mavuz.com",
        "wofwk.aoidf3.com",
        "z5.cnzz.com",
        "xc.hubeijieshikj.cn",
        "tj.tianwenhu.com",
        "xg.gars57.cn",
        "k.jinxiuzhilv.com",
        "cdn.bootcss.com",
        "ppl.xunzhuo123.com",
        "xomk.jiangjunmh.top",
        "img.xunzhuo123.com",
        "z1.cnzz.com",
        "s13.cnzz.com",
        "xg.huataisangao.cn",
        "z7.cnzz.com",
        "xg.huataisangao.cn",
        "z2.cnzz.com",
        "s96.cnzz.com",
        "q11.cnzz.com",
        "thy.dacedsfa.cn",
        "xg.whsbpw.cn",
        "s19.cnzz.com",
        "z8.cnzz.com",
        "s4.cnzz.com",
        "f5w.as12df.top",
        "ae01.alicdn.com",
        "www.92424.cn",
        "k.wudejia.com",
        "vivovip.mmszxc.top",
        "qiu.xixiqiu.com",
        "cdnjs.hnfenxun.com",
        "cms.qdwght.com"
    ]
}