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
export function isV4(ip: string): boolean

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
export function isV6(ip: string): boolean
