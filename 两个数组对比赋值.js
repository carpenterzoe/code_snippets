let shortArr = [
  { id: 1, check: true, num: 999 },
  { id: 2, check: true, num: 88 }
]

let longArr = [
  { id: 1, check: false, num: 0 },
  { id: 2, check: true, num: 3 },
  { id: 3, check: true, num: 211 },
  { id: 4, check: true, num: 986 }
]


// 遍历选中的数组，取出id
let idArr = shortArr.map(item => item.id)

// 遍历原始数组，数据初始化
for (let i = 0; i < longArr.length; i++) {
  longArr[i].check = false
  longArr.num = 0
}

// 再次遍历原始数组，查找id是否在新数组中，是则赋值
for (let i = 0; i < longArr.length; i++) {
  let index = idArr.indexOf(longArr[i].id)
  if (idArr.indexOf(longArr[i].id) !== -1) {
    longArr[i].check = shortArr[index].check
    longArr[i].num = shortArr[index].num
  }
}

console.log(longArr)