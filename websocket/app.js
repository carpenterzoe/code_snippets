var ws = require('nodejs-websocket')

// 创建websocket服务端
// conn 客户端的连接
var server = ws.createServer(function(conn) {

  // 客户端发消息来，服务端会触发这个事件
  // 当接收到消息，要做一些事情，就是这里的回调
  conn.on('text', function(str){
    console.log(str)
    conn.sendText(str)
  })

  conn.on('error', function(err) {
    console.log(err)
  })

}).listen('56565', '127.0.0.1')