var rule = {
	title: '花猪TV[V2]', // csp_AppYsV2
	写源:'into',
	host: 'http://121.62.19.139:771',
	homeUrl:'/addons/apptov4/app.php/v1/home/cateData?id=5',
	url: '/addons/apptov4/app.php/v1/vod/getLists?type_id=fyclass&area=&lang=&year=&order=&type_name=&page=fypage&pageSize=21',
	filter_url:'&class={{fl.class}}&area={{fl.area}}&lang={{fl.lang}}&year={{fl.year}}',
	filter: {
		"1":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"Netflix","v":"Netflix"},{"n":"仙侠","v":"仙侠"},{"n":"剧情","v":"剧情"},{"n":"科幻","v":"科幻"},{"n":"动作","v":"动作"},{"n":"喜剧","v":"喜剧"},{"n":"爱情","v":"爱情"},{"n":"冒险","v":"冒险"},{"n":"儿童","v":"儿童"},{"n":"歌舞","v":"歌舞"},{"n":"音乐","v":"音乐"},{"n":"奇幻","v":"奇幻"},{"n":"动画","v":"动画"},{"n":"恐怖","v":"恐怖"},{"n":"惊悚","v":"惊悚"},{"n":"丧尸","v":"丧尸"},{"n":"战争","v":"战争"},{"n":"传记","v":"传记"},{"n":"纪录","v":"纪录"},{"n":"犯罪","v":"犯罪"},{"n":"悬疑","v":"悬疑"},{"n":"西部","v":"西部"},{"n":"灾难","v":"灾难"},{"n":"古装","v":"古装"},{"n":"武侠","v":"武侠"},{"n":"家庭","v":"家庭"},{"n":"短片","v":"短片"},{"n":"校园","v":"校园"},{"n":"文艺","v":"文艺"},{"n":"运动","v":"运动"},{"n":"青春","v":"青春"},{"n":"同性","v":"同性"},{"n":"励志","v":"励志"},{"n":"人性","v":"人性"},{"n":"美食","v":"美食"},{"n":"女性","v":"女性"},{"n":"治愈","v":"治愈"},{"n":"历史","v":"历史"},{"n":"真人秀","v":"真人秀"},{"n":"脱口秀","v":"脱口秀"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"德国","v":"德国"},{"n":"印度","v":"印度"},{"n":"泰国","v":"泰国"},{"n":"丹麦","v":"丹麦"},{"n":"瑞典","v":"瑞典"},{"n":"巴西","v":"巴西"},{"n":"加拿大","v":"加拿大"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"意大利","v":"意大利"},{"n":"比利时","v":"比利时"},{"n":"爱尔兰","v":"爱尔兰"},{"n":"西班牙","v":"西班牙"},{"n":"澳大利亚","v":"澳大利亚"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"英语","v":"英语"},{"n":"法语","v":"法语"},{"n":"国语","v":"国语"},{"n":"粤语","v":"粤语"},{"n":"日语","v":"日语"},{"n":"韩语","v":"韩语"},{"n":"泰语","v":"泰语"},{"n":"德语","v":"德语"},{"n":"俄语","v":"俄语"},{"n":"闽南语","v":"闽南语"},{"n":"丹麦语","v":"丹麦语"},{"n":"波兰语","v":"波兰语"},{"n":"瑞典语","v":"瑞典语"},{"n":"印地语","v":"印地语"},{"n":"挪威语","v":"挪威语"},{"n":"意大利语","v":"意大利语"},{"n":"西班牙语","v":"西班牙语"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"}]}],
		"2":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"Netflix","v":"Netflix"},{"n":"剧情","v":"剧情"},{"n":"丧尸","v":"丧尸"},{"n":"仙侠","v":"仙侠"},{"n":"穿越","v":"穿越"},{"n":"惊悚","v":"惊悚"},{"n":"恐怖","v":"恐怖"},{"n":"言情","v":"言情"},{"n":"科幻","v":"科幻"},{"n":"动作","v":"动作"},{"n":"喜剧","v":"喜剧"},{"n":"爱情","v":"爱情"},{"n":"偶像","v":"偶像"},{"n":"都市","v":"都市"},{"n":"军旅","v":"军旅"},{"n":"谍战","v":"谍战"},{"n":"罪案","v":"罪案"},{"n":"宫廷","v":"宫廷"},{"n":"冒险","v":"冒险"},{"n":"儿童","v":"儿童"},{"n":"歌舞","v":"歌舞"},{"n":"音乐","v":"音乐"},{"n":"奇幻","v":"奇幻"},{"n":"动画","v":"动画"},{"n":"战争","v":"战争"},{"n":"传记","v":"传记"},{"n":"记录","v":"记录"},{"n":"犯罪","v":"犯罪"},{"n":"悬疑","v":"悬疑"},{"n":"西部","v":"西部"},{"n":"灾难","v":"灾难"},{"n":"古装","v":"古装"},{"n":"武侠","v":"武侠"},{"n":"家庭","v":"家庭"},{"n":"短片","v":"短片"},{"n":"校园","v":"校园"},{"n":"文艺","v":"文艺"},{"n":"运动","v":"运动"},{"n":"青春","v":"青春"},{"n":"同性","v":"同性"},{"n":"励志","v":"励志"},{"n":"人性","v":"人性"},{"n":"美食","v":"美食"},{"n":"女性","v":"女性"},{"n":"治愈","v":"治愈"},{"n":"历史","v":"历史"},{"n":"真人秀","v":"真人秀"},{"n":"脱口秀","v":"脱口秀"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"香港","v":"香港"},{"n":"韩国","v":"韩国"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"法国","v":"法国"},{"n":"英国","v":"英国"},{"n":"德国","v":"德国"},{"n":"台湾","v":"台湾"},{"n":"泰国","v":"泰国"},{"n":"印度","v":"印度"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"}]}],
		"4":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"Netflix","v":"Netflix"},{"n":"热血","v":"热血"},{"n":"科幻","v":"科幻"},{"n":"美少女","v":"美少女"},{"n":"魔幻","v":"魔幻"},{"n":"经典","v":"经典"},{"n":"励志","v":"励志"},{"n":"少儿","v":"少儿"},{"n":"冒险","v":"冒险"},{"n":"搞笑","v":"搞笑"},{"n":"推理","v":"推理"},{"n":"恋爱","v":"恋爱"},{"n":"治愈","v":"治愈"},{"n":"幻想","v":"幻想"},{"n":"校园","v":"校园"},{"n":"动物","v":"动物"},{"n":"机战","v":"机战"},{"n":"亲子","v":"亲子"},{"n":"儿歌","v":"儿歌"},{"n":"运动","v":"运动"},{"n":"悬疑","v":"悬疑"},{"n":"怪物","v":"怪物"},{"n":"战争","v":"战争"},{"n":"益智","v":"益智"},{"n":"青春","v":"青春"},{"n":"童话","v":"童话"},{"n":"竞技","v":"竞技"},{"n":"动作","v":"动作"},{"n":"社会","v":"社会"},{"n":"友情","v":"友情"},{"n":"真人版","v":"真人版"},{"n":"电影版","v":"电影版"},{"n":"OVA版","v":"OVA版"},{"n":"TV版","v":"TV版"},{"n":"新番动画","v":"新番动画"},{"n":"完结动画","v":"完结动画"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"日本","v":"日本"},{"n":"欧美","v":"欧美"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"更早","v":"更早"}]}],
		"3":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"YouTube","v":"YouTube"},{"n":"脱口秀","v":"脱口秀"},{"n":"真人秀","v":"真人秀"},{"n":"选秀","v":"选秀"},{"n":"八卦","v":"八卦"},{"n":"访谈","v":"访谈"},{"n":"情感","v":"情感"},{"n":"生活","v":"生活"},{"n":"晚会","v":"晚会"},{"n":"搞笑","v":"搞笑"},{"n":"音乐","v":"音乐"},{"n":"时尚","v":"时尚"},{"n":"游戏","v":"游戏"},{"n":"少儿","v":"少儿"},{"n":"体育","v":"体育"},{"n":"纪实","v":"纪实"},{"n":"科教","v":"科教"},{"n":"曲艺","v":"曲艺"},{"n":"歌舞","v":"歌舞"},{"n":"财经","v":"财经"},{"n":"汽车","v":"汽车"},{"n":"播报","v":"播报"},{"n":"其他","v":"其他"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"韩国","v":"韩国"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"美国","v":"美国"},{"n":"其它","v":"其它"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"},{"n":"1999","v":"1999"}]}]
	},
	detailUrl:'/addons/apptov4/app.php/v1/vod/getVod?id=fyid',
	searchUrl: '/addons/apptov4/app.php/v1/vod/getVodSearch?wd=**&page=fypage&type',
	searchable: 2,
	quickSearch: 0,
	filterable:1,//是否启用分类筛选,
	headers:{'User-Agent':'Dart/2.19 (dart:io)'},
	timeout:10000,
	class_name:'电影&剧集&动漫&综艺', // 分类筛选 /api.php/app/nav
	class_url:'1&2&4&3',
	play_parse:true,
    lazy:'',
    //lazy:'js:input=/m3u8|mp4|flv/.test(input)?{jx:0,url:input,parse:0}:{jx:1,url:input,parse:1}',
	limit:6,
	// 推荐:'json:items;*;*;*;*',
	推荐:'json:data.sections[0].items;*;*;*;*',
	一级:'json:data.data;vod_name;vod_pic;vod_remarks;vod_id',
	二级:'js:try{let html=request(input);html=JSON.parse(html);let node=html.data;VOD={vod_id:node["vod_id"],vod_name:node["vod_name"],vod_pic:node["vod_pic"],type_name:node["vod_class"],vod_year:node["vod_year"],vod_area:node["vod_area"],vod_remarks:node["vod_remarks"],vod_actor:node["vod_actor"],vod_director:node["vod_director"],vod_content:node["vod_content"].strip()};let episodes=node.vod_play_list;let playFrom=[];let playMapALL=[];episodes.forEach(function(ep){let source=ep["urls"];playFrom.append(ep["player_info"]["from"]);let playMap=[];if(!playMapALL.hasOwnProperty(source)){playMapALL[source]=[]};source.forEach(function(ep1){playMap.append(ep1["name"]+"$"+ep1["url"])});playMapALL.append(playMap.join("#"))});let vod_play_url=[];vod_play_url=playMapALL.join("$$$");let vod_play_from=playFrom.join("$$$");VOD["vod_play_from"]=vod_play_from;VOD["vod_play_url"]=vod_play_url}catch(e){log("获取二级详情页发生错误:"+e.message)}',
	搜索:'*',
}