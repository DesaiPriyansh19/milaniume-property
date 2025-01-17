export const PropertyInitialData = {
  id: "",
  PropertyName: "",
  PropertyType: [],
  PropertyStatus: "",
  ForSale: true,
  ForRent: false,
  Featured: false,
  Verified: false,
  Prices: {
    SalesPrice: "",
    RentPrice: "",
  },
  PropertyDetails: {
    Bedrooms: "",
    Bathrooms: "",
    Sqft: "",
  },
  Landmark: "",
  Address: "",
  PinCode: "",
  City: "",
  ContactDetails: {
    ContactEmail: "",
    ContactPhone: "",
  },
  PropertyPhotos: [],
  AllResidential: {
    FlatApartment: false,
    IndependentBuilderFloor: false,
    IndependentHouseVilla: false,
    ResidentialPlot: false,
    FarmHouse: false,
    Other: false,
  },
  AllCommercial: {
    ReadyToMoveOffices: false,
    BareShallOffices: false,
    ShopsRetail: false,
    CommercialInstLand: false,
    Warehouse: false,
    ColdStorage: false,
    Other: false,
  },
  AllIndustrial: {
    WareHouse: false,
    HeavyManufacturing: false,
    LightManufacturing: false,
    DistributionWarehouse: false,
    GeneralWarehouse: false,
    FlexSpace: false,
    ShowroomBuildings: false,
    ResearchAndDevelopment: false,
    DataCenter: false,
  },
  AllPlotLand: {
    ResidentialPlot: false,
    CommercialPlot: false,
    IndustrialPlot: false,
    AgriculturalLand: false,
    NonAgriculturalLand: false,
    WeekendVillaSite: false,
  },
  ResidentialAvailabilityType: {
    LowRiseApartment: false,
    Bungalow: false,
    Penthouse: false,
    RowHouse: false,
    HighRiseApartment: false,
    WeekendVillas: false,
    Tenament: false,
    Building: false,
  },
  BhkScheme: {
    oneBHK: false,
    twoBHK: false,
    threeBHK: false,
    fourBHK: false,
    fiveBHK: false,
    sixBHK: false,
    aboveSixBHK: false,
    duplex: false,
    pg: false,
  },
  CommercialPropertyFeatures: {
    BossCabin: false,
    ManagerCabin: false,
    WorkStation: false,
    Pantry: false,
    Reception: false,
    WaitingArea: false,
    CarParking: false,
  },
  Condition: {
    BuildingSite: false,
    StructuralFrameBuildingEnvelope: false,
    Roofing: false,
    Plumbing: false,
    Heating: false,
    AirConditioningVentilation: false,
    Electrical: false,
    VerticalTransportation: false,
    LifeSafetyFireProtection: false,
    InteriorElements: false,
    FullyFurnished: false,
    Furnished: false,
    SemiFurnished: false,
    KitchenFix: false,
    FixFurnished: false,
    Unfurnished: false,
  },
  ResidentAvailable: {
    ForFamily: false,
    ForExecutive: false,
    ForBachlore: false,
  },
  Amenities: {
    WaterSupply247: false,
    SeniorCitizenSitting: false,
    BanquetHall: false,
    HomeTheatre: false,
    IndoorsGame: false,
    OutdoorsGame: false,
    VisitorParking: false,
    AllottedParking: false,
    Lift: false,
    PowerBackup: false,
    GasLine: false,
    SwimmingPool: false,
    Garden: false,
    ChildrenPlayArea: false,
    ClubHouse: false,
    CCTV: false,
  },
  Facing: {
    East: false,
    North: false,
    NorthEast: false,
    NorthWest: false,
    South: false,
    SouthEast: false,
    SouthWest: false,
    West: false,
  },
  PropertyDescription: "",
};


export const deepMerge = (target, source) => {
    for (const key in source) {
      if (
        source[key] &&
        typeof source[key] === "object" &&
        !Array.isArray(source[key])
      ) {
        target[key] = deepMerge(target[key] || {}, source[key]);
      } else {
        target[key] = source[key];
      }
    }
    return target;
  };
  