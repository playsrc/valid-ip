const { isV4, isV6 } = require('..')

describe('IPv4 Tests', () => {
  it('should be only strings', () => {
    expect(isV4(0)).toBe(false)
    expect(isV4(true)).toBe(false)
    expect(isV4({ a: 'b', b: 'c' })).toBe(false)
    expect(isV4(['a', 'b', 'c'])).toBe(false)
  })

  it('should allow only non-empty cells', () => {
    expect(isV4('')).toBe(false)
    expect(isV4('....')).toBe(false)
    expect(isV4(' . . . . ')).toBe(false)
    expect(isV4('1.1.1. .1')).toBe(false)
  })

  it('should have exactly 4 cells', () => {
    expect(isV4('1.1.1')).toBe(false)
    expect(isV4('1.1.1.1.1')).toBe(false)
    expect(isV4('1.1.1.1')).toBe(true)
  })

  it('should be composed of integers', () => {
    expect(isV4('a.b.c.e')).toBe(false)
    expect(isV4('192.16a.1bc.1de')).toBe(false)
    expect(isV4('-1.168.1.255')).toBe(false)
    expect(isV4('001.01.10.10')).toBe(false)
    expect(isV4('00.0.0.0')).toBe(false)
    expect(isV4('0,8.75.0.0.0')).toBe(false)
  })

  it('should be in range of 0 - 255', () => {
    expect(isV4('192.168.1.1000')).toBe(false)
    expect(isV4('255.255.255.255')).toBe(true)
    expect(isV4('0.0.0.0')).toBe(true)
    expect(isV4('139.73.128.35')).toBe(true)
    expect(isV4('228.145.53.230')).toBe(true)
    expect(isV4('72.46.96.79')).toBe(true)
    expect(isV4('117.249.163.178')).toBe(true)
    expect(isV4('249.142.41.136')).toBe(true)
    expect(isV4('150.198.146.53')).toBe(true)
    expect(isV4('146.29.59.250')).toBe(true)
    expect(isV4('77.125.68.147')).toBe(true)
    expect(isV4('204.145.18.39')).toBe(true)
    expect(isV4('87.4.5.173')).toBe(true)
  })
})

describe('IPv6 Tests', () => {
  it('should be only strings', () => {
    expect(isV6(0)).toBe(false)
    expect(isV6(true)).toBe(false)
    expect(isV6({ a: 'b', b: 'c' })).toBe(false)
    expect(isV6(['a', 'b', 'c'])).toBe(false)
  })

  it('should allow only non-empty cells', () => {
    expect(isV6('')).toBe(false)
    expect(isV6(':::::::')).toBe(false)
    expect(isV6(' : : : : : : : ')).toBe(false)
    expect(isV6('fadd:9ca3:ea40:3800:6b7f::69b1:06dc')).toBe(false)
  })

  it('should have exactly 8 cells', () => {
    expect(isV6('1:1:1:1:1:1:1:1')).toBe(true)
    expect(isV6('1:1:1:1:1:1:1')).toBe(false)
    expect(isV6('1:1:1:1:1:1:1:1:1')).toBe(false)
  })

  it('should be in range of 0-9 a-f A-F', () => {
    expect(isV6('fggd:9ca3:ea40:hjl0:6b7f:2741:iolk:06dc')).toBe(false)
    expect(isV6('fadd:9ca3:ea40:3800:6b7f:2741:69b1:06dc')).toBe(true)
    expect(isV6('54ef:8d1e:77bc:c2cb:aa46:7cb5:75b5:1fcb')).toBe(true)
    expect(isV6('8f46:D117:8a33:60bb:b0d6:91c3:ac54:417b')).toBe(true)
    expect(isV6('79cb:46b6:1a63:1065:d3df:f60b:0822:81f9')).toBe(true)
    expect(isV6('81aa:f2ce:301f:ABCD:7024:103e:838b:bf94')).toBe(true)
    expect(isV6('eac9:1211:5a5f:ddd0:38b6:5f05:9bdf:c1a6')).toBe(true)
    expect(isV6('3b57:56e6:f89a:c0ce:09da:e9d3:cda5:3fae')).toBe(true)
    expect(isV6('67dd:6c49:4a9c:4065:5aa9:982e:09f9:c3f6')).toBe(true)
    expect(isV6('ae65:f4c8:19ba:f0b9:55a8:3f33:edc8:af25')).toBe(true)
    expect(isV6('ad07:9d45:e9b8:1ea5:5738:6edb:f359:df10')).toBe(true)
  })
})
