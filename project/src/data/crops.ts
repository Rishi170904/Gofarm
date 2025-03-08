export const crops = [
  {
    name: "Rice",
    conditions: {
      soil_ph: { min: 6.0, max: 7.0 },
      soil_moisture: { min: 60, max: 90 },
      humidity: { min: 60, max: 85 },
      rainfall: { min: 100, max: 200 },
      soil_types: ["clayey", "loamy"],
      nitrogen: { min: 80, max: 120 },
      potassium: { min: 40, max: 60 },
      phosphorus: { min: 20, max: 30 }
    }
  },
  {
    name: "Cotton",
    conditions: {
      soil_ph: { min: 6.0, max: 8.0 },
      soil_moisture: { min: 50, max: 70 },
      humidity: { min: 50, max: 75 },
      rainfall: { min: 60, max: 110 },
      soil_types: ["black cotton soil", "loamy"],
      nitrogen: { min: 60, max: 100 },
      potassium: { min: 30, max: 50 },
      phosphorus: { min: 15, max: 25 }
    }
  },
  {
    name: "Turmeric",
    conditions: {
      soil_ph: { min: 6.5, max: 7.5 },
      soil_moisture: { min: 70, max: 85 },
      humidity: { min: 70, max: 90 },
      rainfall: { min: 150, max: 250 },
      soil_types: ["loamy", "red soil"],
      nitrogen: { min: 100, max: 140 },
      potassium: { min: 50, max: 70 },
      phosphorus: { min: 25, max: 35 }
    }
  },
  {
    name: "Chilli",
    conditions: {
      soil_ph: { min: 6.0, max: 7.0 },
      soil_moisture: { min: 60, max: 80 },
      humidity: { min: 65, max: 85 },
      rainfall: { min: 85, max: 150 },
      soil_types: ["sandy loam", "clay loam"],
      nitrogen: { min: 70, max: 110 },
      potassium: { min: 35, max: 55 },
      phosphorus: { min: 18, max: 28 }
    }
  },
  {
    name: "Maize",
    conditions: {
      soil_ph: { min: 5.5, max: 7.5 },
      soil_moisture: { min: 55, max: 75 },
      humidity: { min: 55, max: 80 },
      rainfall: { min: 70, max: 120 },
      soil_types: ["loamy", "sandy loam"],
      nitrogen: { min: 90, max: 130 },
      potassium: { min: 45, max: 65 },
      phosphorus: { min: 22, max: 32 }
    }
  },
  {
    name: "Groundnut",
    conditions: {
      soil_ph: { min: 6.0, max: 7.5 },
      soil_moisture: { min: 50, max: 70 },
      humidity: { min: 50, max: 75 },
      rainfall: { min: 50, max: 100 },
      soil_types: ["sandy loam", "red soil"],
      nitrogen: { min: 50, max: 90 },
      potassium: { min: 25, max: 45 },
      phosphorus: { min: 12, max: 22 }
    }
  },
  {
    name: "Sorghum",
    conditions: {
      soil_ph: { min: 5.5, max: 8.5 },
      soil_moisture: { min: 45, max: 65 },
      humidity: { min: 45, max: 70 },
      rainfall: { min: 45, max: 90 },
      soil_types: ["black soil", "loamy"],
      nitrogen: { min: 40, max: 80 },
      potassium: { min: 20, max: 40 },
      phosphorus: { min: 10, max: 20 }
    }
  },
  {
    name: "Green Gram",
    conditions: {
      soil_ph: { min: 6.2, max: 7.2 },
      soil_moisture: { min: 55, max: 75 },
      humidity: { min: 60, max: 80 },
      rainfall: { min: 60, max: 110 },
      soil_types: ["sandy loam", "black soil"],
      nitrogen: { min: 45, max: 85 },
      potassium: { min: 22, max: 42 },
      phosphorus: { min: 11, max: 21 }
    }
  },
  {
    name: "Sugarcane",
    conditions: {
      soil_ph: { min: 6.5, max: 7.5 },
      soil_moisture: { min: 70, max: 90 },
      humidity: { min: 70, max: 90 },
      rainfall: { min: 150, max: 250 },
      soil_types: ["loamy", "clay loam"],
      nitrogen: { min: 120, max: 160 },
      potassium: { min: 60, max: 80 },
      phosphorus: { min: 30, max: 40 }
    }
  },
  {
    name: "Red Gram",
    conditions: {
      soil_ph: { min: 6.0, max: 7.0 },
      soil_moisture: { min: 50, max: 70 },
      humidity: { min: 55, max: 75 },
      rainfall: { min: 55, max: 100 },
      soil_types: ["black soil", "red soil"],
      nitrogen: { min: 55, max: 95 },
      potassium: { min: 27, max: 47 },
      phosphorus: { min: 13, max: 23 }
    }
  }
];