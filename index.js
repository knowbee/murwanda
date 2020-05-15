const data = require("./data")

const upperCase = (value) => {
  return [...value][0].toUpperCase() + [...value.toLowerCase()].slice(1,).join("")
}

exports.PlacesCodeByProvince = (province) => {
  return data["rwanda"].filter(place => place["Province"].includes(upperCase(province)))
}

exports.PlacesCodeByDistrict = (province, district) => {
  let districts = []
  data["rwanda"].forEach(location => {
    if (location["Province"].includes(upperCase(province))
      && location["District"].includes(upperCase(district))) {
      districts.push(location)
    }
  })
  return districts
}

exports.PlacesCodeBySector = (province, district, sector) => {
  let sectors = []
  data["rwanda"].forEach(location => {
    if (location["Province"].includes(upperCase(province))
      && location["District"].includes(upperCase(district))
      && location["Sector"].includes(upperCase(sector))) {
      sectors.push(location)
    }
  })
  return sectors
}


exports.PlacesCodeByCell = (province, district, sector, cell) => {
  let cells = []
  data["rwanda"].forEach(location => {
    if (location["Province"].includes(upperCase(province))
      && location["District"].includes(upperCase(district))
      && location["Sector"].includes(upperCase(sector))
      && location["Cell"].includes(upperCase(cell))) {
      cells.push(location)
    }
  })
  return cells
}


exports.PlacesCodeByVillage = (province, district, sector, cell, village) => {
  let villages = []
  data["rwanda"].forEach(location => {
    if (location["Province"].includes(upperCase(province))
      && location["District"].includes(upperCase(district))
      && location["Sector"].includes(upperCase(sector))
      && location["Cell"].includes(upperCase(cell))
      && location["Village"].includes(upperCase(village))) {
      villages.push(location)
    }
  })
  return villages
}

exports.PlacesCodeByCode = (code) => {
  let place = []
  data["rwanda"].forEach(location => {
    if (location["Prov_ID"] == code
      || location["Distr_ID"] == code
      || location["Sector_ID"] == code
      || location["Cell_ID"] == code
      || location["Village_ID"] == code) {
      place.push(location)
    }
  })
  return place
}
