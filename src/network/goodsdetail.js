import request from "network/request.js"
// 商品基础
export function goodsdetailRequest(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  })
}
// 商品推荐信息
export function goodsRecommendRequest() {
  return request({
    url: "/Recommend"
  })
}

// 抽离出去用于导入，整理信息的类。
export class GoodsInfo {
  constructor(itemInfo, columns, shopInfo) {
    this.title = itemInfo.title
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountlabel = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.SalesAndcollection = columns
    this.shopservices = shopInfo.services
  }
}
// 抽离出去用于导入，整理店铺信息的类。
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
    this.shopUrl = shopInfo.shopUrl
    this.fans = shopInfo.cFans;
  }
}

// 抽离出去用于导入，整理商品参数的类。
export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
