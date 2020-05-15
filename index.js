const data = require("./lib/data/data.min.js")

const upperCase = (name) => {
  if (name && name.includes(" ")) {
    newName = name.split(" ");
    return `${newName[0].charAt(0).toUpperCase()}${newName[0]
      .substring(1)
      .toLowerCase()} ${newName[1]}`;
  } else {
    return name && name.length > 2
      ? `${name.charAt(0).toUpperCase()}${name.substring(1).toLowerCase()}`
      : undefined;
  }
}

/**
 *  @param {string} [province]
 * @returns {array} placecodes
 */

exports.PlaceCodesByProvince = (province) => {
  return data["rwanda"].filter(place => place["Province"].includes(upperCase(province)))
}


/**
 * @param {string} [province]
 * @param {string} [district]
 * @returns {array} placecodes
 */
exports.PlaceCodesByDistrict = (province, district) => {
  let districts = []
  data["rwanda"].forEach(location => {
    if (location["Province"].includes(upperCase(province))
      && location["District"] == upperCase(district)) {
      districts.push(location)
    }
  })
  return districts
}

/**
 * @param {string} [province]
 * @param {string} [district]
 * @param {string} [sector]
 * @returns {array} placecodes
 */
exports.PlaceCodesBySector = (province, district, sector) => {
  let sectors = []
  data["rwanda"].forEach(location => {
    if (location["Province"].includes(upperCase(province))
      && location["District"] == upperCase(district)
      && location["Sector"] == upperCase(sector)) {
      sectors.push(location)
    }
  })
  return sectors
}

/**
 * @param {string} [province]
 * @param {string} [district]
 * @param {string} [sector]
 * @param {string} [cell]
 * @returns {array} placecodes
 */
exports.PlaceCodesByCell = (province, district, sector, cell) => {
  let cells = []
  data["rwanda"].forEach(location => {
    if (location["Province"].includes(upperCase(province))
      && location["District"] == upperCase(district)
      && location["Sector"] == upperCase(sector)
      && location["Cell"] == upperCase(cell)) {
      cells.push(location)
    }
  })
  return cells
}

/**
 * @param {string} [province]
 * @param {string} [district]
 * @param {string} [sector]
 * @param {string} [cell]
 * @param {string} [village]
 * @returns {array} placecodes
 */
exports.PlaceCodesByVillage = (province, district, sector, cell, village) => {
  let villages = []
  data["rwanda"].forEach(location => {
    if (location["Province"].includes(upperCase(province))
      && location["District"] == upperCase(district)
      && location["Sector"] == upperCase(sector)
      && location["Cell"] == upperCase(cell)
      && location["Village"] == upperCase(village)) {
      villages.push(location)
    }
  })
  return villages
}

/**
 * @param {string} [code]
 * @returns {array} placecodes
 */
exports.PlaceCodesByCode = (code) => {
  let place = []
  data["rwanda"].forEach(location => {
    if (location["Prov_CODE"] == code
      || location["Distr_CODE"] == code
      || location["Sector_CODE"] == code
      || location["Cell_CODE"] == code
      || location["Village_CODE"] == code) {
      place.push(location)
    }
  })
  return place
}
