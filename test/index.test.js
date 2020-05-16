const { PlaceCodesByCode, PlaceCodesByProvince, PlaceCodesByDistrict, PlaceCodesBySector, PlaceCodesByCell, PlaceCodesByVillage } = require("../index")
const chai = require("chai");
const expect = chai.expect;

describe("Murwanda", async () => {
  describe("getting place codes by province", () => {
    it("should return array of place codes from the given province", function () {
      const placesbyprovince = PlaceCodesByProvince("South");
      expect(typeof (placesbyprovince)).to.equal("object");
    });
    it("should return length of places by province of south to equal 3501", function () {
      const placesbyprovince = PlaceCodesByProvince("South");
      const length = placesbyprovince.length;
      expect(length).to.equal(3501);
    });

  });
  describe("getting place codes by district", () => {
    it("should return array of place codes from the given district", function () {
      const placesbydistrict = PlaceCodesByDistrict("South", "Huye");
      expect(typeof (placesbydistrict)).to.equal("object");
    });
    it("should return length of places by district of huye to equal 508", function () {
      const placesbydistrict = PlaceCodesByDistrict("South", "Huye");
      const length = placesbydistrict.length;
      expect(length).to.equal(508);
    });

  });

  describe("getting place codes by sector", () => {
    it("should return array of place codes from the given sector", function () {
      const placesbysector = PlaceCodesBySector("South", "Huye", "Tumba");
      expect(typeof (placesbysector)).to.equal("object");
    });
    it("should return length of places by sector of huye to equal 33", function () {
      const placesbysector = PlaceCodesBySector("South", "Huye", "Tumba");
      const length = placesbysector.length;
      expect(length).to.equal(33);
    });

  });

  describe("getting place codes by cell", () => {
    it("should return array of place codes from the given cell", function () {
      const placesbycell = PlaceCodesByCell("Kigali", "Gasabo", "Remera", "Rukiri I");
      expect(typeof (placesbycell)).to.equal("object");
    });
    it("should return length of places by cell of Rukiri I to equal 7", function () {
      const placesbycell = PlaceCodesByCell("Kigali", "Gasabo", "Remera", "Rukiri I");
      const length = placesbycell.length;
      expect(length).to.equal(7);
    });

  });
  describe("getting place codes by village", () => {
    it("should return array of place codes from the given village", function () {
      const placesbyvillage = PlaceCodesByVillage("Kigali", "Gasabo", "Remera", "Rukiri I", "Urumuri");
      expect(typeof (placesbyvillage)).to.equal("object");
    });
    it("should return length of places by village of Rukiri I to equal 5", function () {
      const placesbyvillage = PlaceCodesByVillage("Kigali", "Gasabo", "Remera", "Rukiri I", "Urumuri");
      const length = placesbyvillage.length;
      expect(length).to.equal(1);
    });
  });

  describe("getting place codes by code", () => {
    it("should return array of place codes from the given code", function () {
      const placesbycode = PlaceCodesByCode("102130307");
      expect(typeof (placesbycode)).to.equal("object");
    });
    it("should return length of places by code of 507150505 to equal 1", function () {
      const placesbycode = PlaceCodesByCode("507150505");
      const length = placesbycode.length;
      expect(length).to.equal(1);
    });
  });
});
