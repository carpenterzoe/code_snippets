let arr = [
  {
    id: 1,
    title: '第一个标题',
    msg: '哈哈哈'
  },
  {
    id: 2,
    title: '第二个标题',
    msg: '呼呼'
  },
  {
    id: 3,
    title: '第三个标题',
    msg: '吱吱吱'
  }
]

// 数组中提取某个字段
let titleArr = arr.map( item => item.title )

console.log(titleArr, 'titleArr') // [ '第一个标题', '第二个标题', '第三个标题' ] 'titleArr'

// 数组中提取多个有效字段 （注意写法
let res = arr.map( ({id, msg}) => ({ id, msg }) )

console.log(res, 'res') // [ { id: 1, msg: '哈哈哈' }, { id: 2, msg: '呼呼' }, { id: 3, msg: '吱吱吱' } ] 'res'

/*
  可能会出现如下错误写法

  error 1 箭头函数的参数如果是item，可以不用()扩起来。如果是解构的对象，则需要()
  let res1 = arr.map( {id, msg} => { id, msg } )

  error 2 箭头函数右侧，如果{id, msg} 整体是一个对象返回值，也需要()括起来。否则会被解析为花括号代码块。
  let res2 = arr.map( ({id, msg}) => { id, msg } )
*/
