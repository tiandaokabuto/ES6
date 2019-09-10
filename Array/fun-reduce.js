/**
 * 计算数组中所有值的总和
 */
var nums = [10, 20, 30];
var sum = 0
var sum = nums.reduce(function(sum,num){
  return num + sum;
},0)
console.log(sum)
/**
 * 将数组中对象的某个属性抽离到另外一个数组中
 */
var colors = [
  {
    color: 'red'
  }, {
    color: 'blue'
  }, {
    color: 'green'
  }
];
var colors2 = colors.reduce(function(colors2,color){
  colors2.push(color.color)
  return colors2
},[])
console.log(colors2)
/**
 * 判断字符串中括号是否对称
 */
var str = ")()()()(())"
var result = str.split("").reduce(function(result,char){
  if(result < 0){
    return result;
  }else if(char === "("){
    result ++;
  } else if (char === ")"){
    result --;
  }
  return result;
},0)
console.log(result)