const data = require("./data")

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

exports.PlaceCodesByProvince = (province) => {
  return data["rwanda"].filter(place => place["Province"].includes(upperCase(province)))
}

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

exports.PlaceCodesByCode = (code) => {
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
