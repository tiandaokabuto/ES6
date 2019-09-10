/**
 * 计算对象数组中每个电脑的操作系统是否可用，
 * 大于16位的操作系统表示可用
 * every 类似 &&
 * some 类似 ||
 */
var computers = [
  {
    name: 'Apple',
    ram: 16
  }, {
    name: 'lenovo',
    ram: 32
  }, {
    name: 'IBM',
    ram: 4
  }
];
var everyFlag = computers.every(function(computer){
  return computer.ram >= 16
})
var someFlag = computers.some(function(computer){
  return computer.ram >= 16
})
console.log(everyFlag,someFlag)
/**
 * 假定有一个注册页面，判断所有input内容的长度是否大于0
 */