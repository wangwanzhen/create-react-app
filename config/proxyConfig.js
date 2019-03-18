const urlData = {
	test:'http://rap.yaomaitong.net/mockjsdata/13/',
	daily:'https://ksh-api.yaomaitong.net/',
  dev:'https://ksh-api-dev.yaomaitong.net/',
  publish:'https://ksh-api.yaomaitong.cn/'
}
let url = urlData.daily
if(process.env.NODE_ENV==='test'){
  url = urlData.test
} else if(process.env.NODE_ENV==='publish'){
  url = urlData.publish
}else if(process.env.NODE_ENV==='dev'){
  url = urlData.dev
}
module.exports = {
	proxy: {
        '/api': {    //将www.exaple.com印射为/apis
            target: url,  // 接口域名
            changeOrigin: true,  //是否跨域
            pathRewrite: {
                '^/api': '/'   //需要rewrite的,
            }
        }
  }
}
