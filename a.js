class Apply {
  constructor () {
    this.id = "UUID";
    this.expiredDate = "YYYY/MM/DD hh:mm:ss" // 過期日期
  }
}

class User {
  constructor () {
    this.id = "UUID";
    this.name = "名字"; // 顯示名稱
    this.phone = "0987654321" // unique
    this.email = "信箱"; // unique
    this.address = "地址";
    this.score = 0; // 等級積分
  }
}

class Category {
  constructor () {
    this.id = "UUID";
    this.name = "某分類"; // 顯示名稱
  }
}

class Equipment {
  constructor () {
    this.id = "UUID";
    this.name = "某設備"; // 顯示名稱
    this.categories = ["UUID"]; // 分類 tag
    this.orderId = "UUID"; // 與訂單連結，NULL 代表未被租用
  }
}

class Order {
  constructor () {
    this.id = "UUID";
    this.status = 0 // 訂單狀態
    // -1: 訂單取消, 0: 訂單成立, 1: 進行中 (等待付款), 2: 進行中 (等待領取), 3: 進行中 (使用中), 4: 逾期 (等待歸還), 5: 訂單完成 (設備已歸還)
    // TODO: define status
    this.paymentStatus = 0 // 付款狀態
    // -2: 已退款, -1: 已放棄, 0: 未付款, 1: 已付款, 2: 已關帳
    // TODO: define payment status
    this.paymentDate = "YYYY/MM/DD hh:mm:ss" // 付款日期
    this.submitDate = "YYYY/MM/DD hh:mm:ss" // 訂單建立日期
    this.returnDate = "YYYY/MM/DD hh:mm:ss" // 歸還日期
    this.totalAmount = 0 // 總金額
    this.userId = "UUID" // 客戶
    this.equipmentIds = ["UUID"] // 設備
    this.comment = "" // 備註
    // TODO: 是否允許一筆訂單不同設備，不同的歸還日期。
    // TODO: 特殊定單的金額該如何計算
  }
}

const main = () => {}