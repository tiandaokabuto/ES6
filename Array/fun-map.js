/**
 * 把数值数组A的值以双倍形式保存到数组B
 */
var nums1 = [1, 2, 3];
var nums2 = [];
// ES5
for (let i = 0; i < nums1.length; i++) {
  nums2.push(nums1[i]*2);
}
console.log(nums2);
// ES6 map 需要返回值，最终得到的是一个新的数组
var double = nums1.map(function(num){
  return num*2;
})
console.log(double)

/**
 * 把对象数组A中的某个属性的值存到数组B里面去
 */
var a = [
  {
    att1: "1",
    att2: "2"
  },
  {
    att1: "3",
    att2: "4"
  }
]
var atts = a.map(function (att){
  return att.att1
})
console.log(atts)