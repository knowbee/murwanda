# murwanda

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
console.log(PlaceCodesByCode("12130307")) // 12130307 : village code
// [
//   {
//     District: 'Gasabo',
//     Village_ID: '12130307',
//     Cell_ID: '121303',
//     Sector_ID: '1213',
//     Distr_ID: '12',
//     Prov_ID: '1',
//     Village: 'Urumuri',
//     Cell: 'Rukiri I',
//     Sector: 'Remera',
//     Province: 'Kigali Town/Umujyi wa Kigali'
//   }
// ]


```
## Methods

- [PlaceCodesByProvince()](#PlaceCodesByProvince)
- [PlaceCodesByDistrict()](#PlaceCodesByDistrict)
- [PlaceCodesBySector()](#PlaceCodesBySector)
- [PlaceCodesByCell()](#PlaceCodesByCell)
- [PlaceCodesByVillage()](#PlaceCodesByVillage)
- [PlaceCodesByCode()](#PlaceCodesByCode)
## Usage

```js
const { PlaceCodesByProvince, PlaceCodesByDistrict, PlaceCodesBySector, PlaceCodesByCell, PlaceCodesByVillage, PlaceCodesByCode } = require("murwanda");
```

All inputs are case-insensitive.

### PlaceCodesByProvince(province)

  Returns array of all places(province, districts, sectors, cells, villages) and their respective codes from the given province.

### PlaceCodesByDistrict(province, district)

  Returns array of all places(province, district, sectors, cells, villages) and their respective codes from the given district.

### PlaceCodesBySector(province, district, sector)

  Returns array of all places(province, district, sector, cells, villages) and their respective codes.

### PlaceCodesByCell(province, district, sector, cell)

 Returns array of all places(province, district, sector, cell, villages) and their respective codes.

### PlaceCodesByVillage()


 Returns array of all places(province, district, sector, cell, village) and their respective codes.

# Contribution

- Please before making a PR, read first this [Contributing Guideline](./CONTRIBUTING.md)

## License

MIT

## Author

Igwaneza Bruce
