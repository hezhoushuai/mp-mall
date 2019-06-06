class request {
  constructor(baseURL){
    this.baseUrl = baseURL
  }

  baseRequest(args, methods) {
    return new Promise((resolve, reject) => {
      wx.showLoading({
        title: '加载中...',
        mask: true
      })
      wx.request({
        url: this.baseUrl + args.url,
        data: args.data === undefined ? "" : args.data,
        header: {},
        method: methods,
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          resolve(res)
        },
        fail: function (res) {
          reject(res)
        },
        complete: function (res) {
          wx.hideLoading()
        },
      })
    })
  }

  get({url, data}){
    return this.baseRequest({url, data}, "GET")
  }

  post(url, data){
    return this.baseRequest({url, data}, "POST")
  }
}

const ajax = new request("http://www.xiongmaoyouxuan.com")

export const HotSearchList = () => {
  return ajax.get({ url: "/api/search/home" })
}

export const handleDoSearch = (word, sort) => {
  return ajax.get({ url: `/api/search?word=${word}&sort=${sort}` })
}

// 根据id获取详情页数据
export const getDataById = (id) => {
  return ajax.get({ url: `/api/detail?id=${id}`})
} 

// 请求mall页面分类列表
export const getMallList = () => {
  return ajax.get({ url: "/api/tabs?sa="})
}

// 请求mall页面的详细分类数据
export const getMallDetailList = (id) => {
  return ajax.get({ url: `/api/tab/${id}?start=0`})
}

// cateGery页面通过id获取商品信息
export const getGoodsFormId = (id, sortId = 0) => {
  return ajax.get({ url: `/api/category/${id}/items?start=0&sort=${sortId}` })
}