const data = require("./lib/data/rwanda.min.json")

const normalized = (name) => {
  return name.toLowerCase()
}

/**
 *  @param {string} [province]
 * @returns {array} placecodes
 */

exports.PlaceCodesByProvince = (province) => {
  return data.filter(place => normalized(place["province_name"]).includes(normalized(province)))
}


/**
 * @param {string} [province]
 * @param {string} [district]
 * @returns {array} placecodes
 */
exports.PlaceCodesByDistrict = (province, district) => {
  let districts = []
  data.forEach(location => {
    if (normalized(location["province_name"]).includes(normalized(province))
      && normalized(location["district_name"]) == normalized(district)) {
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
  data.forEach(location => {
    if (normalized(location["province_name"]).includes(normalized(province))
      && normalized(location["district_name"]) == normalized(district)
      && normalized(location["sector_name"]) == normalized(sector)) {
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
  data.forEach(location => {
    if (normalized(location["province_name"]).includes(normalized(province))
    && normalized(location["district_name"]) == normalized(district)
    && normalized(location["sector_name"]) == normalized(sector)
      && normalized(location["cell_name"]) == normalized(cell)) {
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
  data.forEach(location => {
    if (normalized(location["province_name"]).includes(normalized(province))
    && normalized(location["district_name"]) == normalized(district)
    && normalized(location["sector_name"]) == normalized(sector)
      && normalized(location["cell_name"]) == normalized(cell)
      && normalized(location["village_name"]) == normalized(village)) {
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
  data.forEach(location => {
    if (location["province_code"] == code
      || location["district_code"] == code
      || location["sector_code"] == code
      || location["cell_code"] == code
      || location["village_code"] == code) {
      place.push(location)
    }
  })
  return place
}
