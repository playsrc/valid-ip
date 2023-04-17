function isV4(ip) {
  if (typeof ip !== 'string') return false

  const ipArr = ip.split('.')

  if (ipArr.length !== 4) return false

  const ipv4 = new RegExp(
    /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/
  )

  return ipArr.every((cell) => ipv4.test(cell))
}

function isV6(ip) {
  if (typeof ip !== 'string') return false

  const ipArr = ip.split(':')

  if (ipArr.length !== 8) return false

  const ipv6 = new RegExp(/^(([0-9|a-f|A-F]){1,4})$/)

  return ipArr.every((cell) => ipv6.test(cell))
}

module.exports = { isV4, isV6 }
