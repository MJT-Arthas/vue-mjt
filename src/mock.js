import Mock from 'mockjs'
// 获取 mock.Random 对象
const Random = Mock.Random;
//使用mockjs模拟数据

//1.
const getMockData = function () {
  let list = []
  for (let i = 0; i < 10; i++) {
    let newObject = {
      name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      cfirst: Random.cfirst(), //模拟姓氏
      natural: Random.natural(10, 30), //返回一个随机的自然数
      clast: Random.clast(),//模拟名字
      age: Random.csentence(5, 10), // 生成一条随机的中文句子 ( min, max )
      data: Random.date("yyyy-MM-dd"),// Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      time: Random.time(),//时间
      image: Random.image('200x100', '#4A7BF7', 'Hello'), //模拟图片 宽高不指定则随机
      city: Random.city(true), //生成在某个省份的某个城市 city()生成随机城市
      province: Random.province(),//生成随机省份
      url: Random.url(), //生成随机URL(每次运行结果不同)
      ip: Random.ip()   //  "74.97.41.159" 生成随机IP(每次运行结果不同)
    }
    list.push(newObject)
  }
  return list
}

//2.
const getMockOther = function () {
  let list = []
  for (let i = 0; i < 10; i++) {
    let newObject = {
      name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      cfirst: Random.cfirst(), //模拟姓氏
      natural: Random.natural(10, 30), //返回一个随机的自然数
      clast: Random.clast(),//模拟名字
      age: Random.csentence(5, 10), // 生成一条随机的中文句子 ( min, max )
      data: Random.date("yyyy-MM-dd"),// Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      time: Random.time(),//时间
      image: Random.image('200x100', '#4A7BF7', 'Hello'), //模拟图片 宽高不指定则随机
      city: Random.city(true), //生成在某个省份的某个城市 city()生成随机城市
      province: Random.province(),//生成随机省份
      url: Random.url(), //生成随机URL(每次运行结果不同)
      ip: Random.ip()   //  "74.97.41.159" 生成随机IP(每次运行结果不同)
    }
    list.push(newObject)
  }
  return list
}
Mock.mock('/api/data', 'get', getMockData)   //1.
Mock.mock('/api/other', 'post', getMockOther)  //2.