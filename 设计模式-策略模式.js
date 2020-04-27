
// 策略
var strategies = {
  checkRole: function(value) {
    return value === 'juejin'
  },
  checkGrade: function(value) {
    return value >= 1
  },
  checkJob: function(value) {
    return jobList.indexOf(value) > 1
  },
  checkEatType: function(value) {
    return value === 'eat melons'
  }
}

var Validator = function() {
  this.cache = []

  // 添加策略事件
  this.add = function(value, method) {
    this.cache.push(function() {
      return strategies[method](value)
    })
  }

  // 检查
  this.check = function() {
    for (let i = 0; i < this.cache.length; i++) {
      let valiFn = this.cache[i]
      var data = valiFn()         // 开始检查
      if(!data) {
        return false
      }
      return true
    }
  }
}

// 校验掘金用户，等级1级以上
var compose1 = function() {
  var validator = new Validator()
  const data1 = {
    role: 'juejin',
    grade: 3
  }
  validator.add(data1.role, 'checkRole')
  validator.add(data1.grade, 'checkGrade')

  const result = validator.check()
  return result
}

// 校验掘金用户，前端开发
var compose2 = function() {
  var validator = new Validator()
  const data2 = {
    role: 'juejin',
    job: 'FE'
  }
  validator.add(data2.role, 'checkRole')
  validator.add(data2.job, 'checkJob')
  
  const result = validator.check()
  return result
}

思路：
1. 单独抽离校验规则；
2. 在构造函数中，处理规则的组合，并校验执行；
3. 在调用时，直接传入需要校验的规则组合，并拿到结果。

优点：
可以很轻易实现不同需求场景下，函数的混合组合调用。

reference
https://juejin.im/post/5e0eaff4e51d45413b7b77f3#heading-9
