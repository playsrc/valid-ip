# Valid IP Library

![npm](https://img.shields.io/npm/dt/valid-ip)
![npm](https://img.shields.io/npm/v/valid-ip)
[![Node.js CI](https://github.com/mateusabelli/valid-ip/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/mateusabelli/valid-ip/actions/workflows/node.js.yml)
[![NPM Package](https://github.com/mateusabelli/valid-ip/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/mateusabelli/valid-ip/actions/workflows/npm-publish.yml)

**valid-ip** is a small and reliable **IPv4** and **IPv6** validation library.

- [Installation](#installation)
- [Documentation](#documentation)
- [References](#references)
- [License](#license)

## Installation

```
npm i valid-ip
```

## Documentation

### Example

```javascript
const { isV4, isV6 } = require('valid-ip')

isV4('175.21.195.5') // true

isV6('5b93:c18f:27e6:f322:530a:1a5d:74c8:e2c2') // true
```

### How it works

The functions receives a string parameter and process the value to validate if it matches the following rules:

An IPv4 address has the format: x . x . x . x where x is called
an octet and must be a decimal value between 0 and 255.

- No leading 0
- In range of (0 - 255)
- Has exactly 4 cells
- Has an integer in each cell

An IPv6 address has the format x : x : x : x : x : x : x : x, where
x is called a segment and can be any hexadecimal value between 0 and FFFF.

- Can be composed to just one 0
- In hexadecimal range of (0000 - FFFF)
- Has exactly 8 cells
- No cells are empty

## References

- https://www.youtube.com/watch?v=EB5FAwHqpm4
- https://www.ibm.com/docs/en/ts3500-tape-library?topic=functionality-ipv4-ipv6-address-formats
- https://stackoverflow.com/questions/5284147/validating-ipv4-addresses-with-regexp
- https://regex101.com/

## License

MIT License
