
// 遍历数组，叠加 promise.then 链式调用

let chain = [
  {
    resolved: (res) => console.log(res, 'resolved  111'),
    rejected: () => console.log('rejected 111')
  },
  {
    resolved: () => console.log('resolved  222'),
    rejected: () => console.log('rejected 222')
  },
  {
    resolved: () => console.log('resolved  333'),
    rejected: () => console.log('rejected 333')
  },
  {
    resolved: () => console.log('resolved  444'),
    rejected: () => console.log('rejected 444')
  }
]

let config = 'I am axios config'
let promise = Promise.resolve(config)

while (chain.length) {
  const { resolved, rejected } = chain.shift()

  promise = promise.then( resolved, rejected )
}

// reference  ts重构axios教程 8.3小节  7分钟处
