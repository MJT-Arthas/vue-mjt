/**
 * 过滤特殊字符
 *
 */
export function stripScript(str) {
  var pattern = new RegExp(
    "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？·]"
  );
  var rs = "";
  for (var i = 0; i < str.length; i++) {
    rs = rs + str.substr(i, 1).replace(pattern, "");
  }
  return rs;
}
/**
 *
 * 邮箱验证
 */
export function checkMail(str) {
  let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  return !reg.test(str);
}

/**
 * 密码至少包含1个大写字母，1个小写字母和1个数字
 */
export function checkPassword(str) {
  let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
  return !reg.test(str);
}
/**
 * 验证码验证
 */
export function checkCode(str) {
  let reg = /^\d{6}$/;
  return !reg.test(str);
}
