export function isValidUsername (str) {
  const validMap = ['admin', 'editor']
  return validMap.indexOf(str.trim()) >= 0
}

export function isValidURL (url) {
  const urlRegex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlRegex.test(url)
}

export function isValidEmail (email) {
  const emailRegex = /^([A-Za-z0-9_\-.])+@(163.com|qq.com|42du.cn|gmail.com)$/
  return emailRegex.test(email)
}

export function isValidPhone (phone) {
  const phoneRegex = /^1[3-9](\d{9})$/
  return phoneRegex.test(phone)
}
