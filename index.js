/**
 * This function receives a string as parameter and
 * checks if it is a valid IPv4 address.
 *
 * An IPv4 address has the format: x . x . x . x where x is called
 * an octet and must be a decimal value between 0 and 255.
 *
 * Examples:
 * ```
 * isV4('0.0.0.0') // true
 * isV4('255.255.255.255') // true
 *
 * ```
 * @param {string} ip
 * @returns {boolean}
 */
function isV4(ip) {
  if (typeof ip !== 'string') return false

  const ipArr = ip.split('.')

  if (ipArr.length !== 4) return false

  const ipv4 = new RegExp(
    /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/
  )

  return ipArr.every((cell) => ipv4.test(cell))
}

/**
 * This function receives a string as parameter and
 * checks if it is a valid IPv6 address.
 *
 * An IPv6 address has the format x : x : x : x : x : x : x : x, where
 * x is called a segment and can be any hexadecimal value between 0 and FFFF.
 *
 * Examples:
 * ```
 * isV6('0:0:0:0:0:0:0:0') // true
 * isV6('FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF') // true
 * ```
 * @param {string} ip
 * @returns {boolean}
 */
function isV6(ip) {
  if (typeof ip !== 'string') return false

  const ipArr = ip.split(':')

  if (ipArr.length !== 8) return false

  const ipv6 = new RegExp(/^(([0-9|a-f|A-F]){1,4})$/)

  return ipArr.every((cell) => ipv6.test(cell))
}

module.exports = { isV4, isV6 }
