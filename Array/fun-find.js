/**
 * 从对象数组A中找到符合条件的对象
 */
var users = [
  {
    name: 'mike'
  }, {
    name: 'john'
  }, {
    name: 'tom'
  }
]
var user;
user = users.find(function(user) {
  return user.name === 'tom'
})
console.log(user)