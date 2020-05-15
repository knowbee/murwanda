const { PlacesCodeByCode, PlacesCodeByProvince, PlacesCodeByDistrict, PlacesCodeBySector, PlacesCodeByCell, PlacesCodeByVillage } = require("./index")


console.log(PlacesCodeByCode("11030308"))
console.log(PlacesCodeByProvince("South"))
console.log(PlacesCodeByDistrict("South", "Huye"))
console.log(PlacesCodeBySector("South", "Huye", "Tumba"))
console.log(PlacesCodeByCell("South", "Huye", "Tumba", "Cyimana"))
console.log(PlacesCodeByVillage("South", "Huye", "Tumba", "Cyimana", "Amahoro"))
