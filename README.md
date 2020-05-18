# murwanda

[![Build Status](https://travis-ci.com/knowbee/murwanda.svg?token=yN9jXnk59suszMqNsJJb&branch=master)](https://travis-ci.com/knowbee/murwanda)
[![npm](https://img.shields.io/npm/dt/murwanda.svg)](https://www.npmjs.com/package/murwanda)
[![Dependency Status](https://david-dm.org/knowbee/murwanda.svg)](https://david-dm.org/knowbee/murwanda)
[![npm](https://img.shields.io/npm/v/murwanda.svg)](https://www.npmjs.com/package/murwanda)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

murwanda is an alternative to [rwanda](https://nodei.co/npm/rwanda/), with this package you get access to place codes for all locations(provinces,districs,sectors,cells,villages) from Rwanda


## Install

```cli
npm install murwanda
```

or

```cli
yarn add murwanda
```


## Example

```js
const { PlaceCodesByProvince, PlaceCodesByCode } = require("murwanda");

console.log(PlaceCodesByProvince("South"));
console.log(PlaceCodesByCode("102130307")) // 102130307 : village code
// [
// {
//     province_code: '1',
//     province_name: 'Kigali City',
//     district_code: '102',
//     district_name: 'Gasabo',
//     sector_code: '010213',
//     sector_name: 'Remera',
//     cell_code: '1021303',
//     cell_name: 'Rukiri I',
//     village_code: '102130307',
//     village_name: 'Urumuri'
//   }
// ]


```

## Usage

```js
const { PlaceCodesByProvince, PlaceCodesByDistrict, PlaceCodesBySector, PlaceCodesByCell, PlaceCodesByVillage, PlaceCodesByCode } = require("murwanda");
```

All inputs are case-insensitive.
## Methods


#### PlaceCodesByProvince(province)

  Returns array of all places(province, districts, sectors, cells, villages) and their respective codes from the given province.

#### PlaceCodesByDistrict(province, district)

  Returns array of all places(province, district, sectors, cells, villages) and their respective codes from the given district.

#### PlaceCodesBySector(province, district, sector)

  Returns array of all places(province, district, sector, cells, villages) and their respective codes.

#### PlaceCodesByCell(province, district, sector, cell)

 Returns array of all places(province, district, sector, cell, villages) and their respective codes.

#### PlaceCodesByVillage(province, district, sector, cell, village)


 Returns array of all places(province, district, sector, cell, village) and their respective codes.


#### PlaceCodesByCode(code)


 Returns array of all places(province, district, sector, cell, village) and their respective codes.

# Contribution

- Please before making a PR, read first this [Contributing Guideline](./CONTRIBUTING.md)

## License

MIT

## Author

Igwaneza Bruce
