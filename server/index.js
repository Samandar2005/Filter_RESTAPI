import express from "express";

const app = express();
const port = 3001;

app.use(express.static("public"));

let dataBase = [
  {
    id: 1,
    img: "house1.jpeg",
    price: 2200,
    bedrooms: 7,
    bathRooms: 4,
    propertyType: "house",
    wifi: true,
    ac: true,
    smoking: false,
    washer: true,
    hostLanguage: "english",
    name: "The Metropolitan Manor",
  },
  {
    id: 2,
    img: "house2.webp",
    price: 2700,
    bedrooms: 9,
    bathRooms: 6,
    propertyType: "house",
    wifi: true,
    ac: true,
    smoking: true,
    washer: true,
    hostLanguage: "english",
    name: "The Loft Life",
  },
  {
    id: 3,
    img: "house3.jpeg",
    price: 1800,
    bedrooms: 5,
    bathRooms: 3,
    propertyType: "house",
    wifi: false,
    ac: false,
    smoking: true,
    washer: true,
    hostLanguage: "english",
    name: "The Contemporary Chambers",
  },
  {
    id: 4,
    img: "house4.jpeg",
    price: 1600,
    bedrooms: 3,
    bathRooms: 2,
    propertyType: "house",
    wifi: false,
    ac: true,
    smoking: true,
    washer: false,
    hostLanguage: "english",
    name: "The Urban Haven",
  },
  {
    id: 5,
    img: "house5.jpg",
    price: 1500,
    bedrooms: 3,
    bathRooms: 3,
    propertyType: "house",
    wifi: false,
    ac: false,
    smoking: true,
    washer: false,
    hostLanguage: "spanish",
    name: "The Industrial Residence",
  },
  {
    id: 6,
    img: "house6.jpg",
    price: 1500,
    bedrooms: 2,
    bathRooms: 1,
    propertyType: "house",
    wifi: false,
    ac: false,
    smoking: false,
    washer: false,
    hostLanguage: "spanish",
    name: "The Modern Loft",
  },
  {
    id: 7,
    img: "house7.jpg",
    price: 1400,
    bedrooms: 3,
    bathRooms: 3,
    propertyType: "house",
    wifi: true,
    ac: true,
    smoking: true,
    washer: true,
    hostLanguage: "spanish",
    name: "The Highrise Hideaway",
  },
  {
    id: 8,
    img: "house8.jpeg",
    price: 1900,
    bedrooms: 3,
    bathRooms: 4,
    propertyType: "house",
    wifi: true,
    ac: true,
    smoking: true,
    washer: true,
    hostLanguage: "spanish",
    name: "The Velvet Vista",
  },
  {
    id: 9,
    img: "house9.jpg",
    price: 1850,
    bedrooms: 4,
    bathRooms: 4,
    propertyType: "house",
    wifi: true,
    ac: true,
    smoking: true,
    washer: true,
    hostLanguage: "french",
    name: "The Iris Indigo",
  },
  {
    id: 10,
    img: "house10.jpeg",
    price: 2650,
    bedrooms: 8,
    bathRooms: 5,
    propertyType: "house",
    wifi: true,
    ac: true,
    smoking: false,
    washer: true,
    hostLanguage: "french",
    name: "The Celestial Citadel",
  },
  {
    id: 11,
    img: "apart1.jpeg",
    price: 1350,
    bedrooms: 3,
    bathRooms: 2,
    propertyType: "apartment",
    wifi: true,
    ac: true,
    smoking: true,
    washer: false,
    hostLanguage: "french",
    name: "The Amethyst Arbour",
  },
  {
    id: 12,
    img: "apart2.webp",
    price: 1550,
    bedrooms: 2,
    bathRooms: 2,
    propertyType: "apartment",
    wifi: true,
    ac: true,
    smoking: false,
    washer: false,
    hostLanguage: "french",
    name: "The Radiant Retreat",
  },
  {
    id: 13,
    img: "apart3.jpg",
    price: 2200,
    bedrooms: 7,
    bathRooms: 4,
    propertyType: "apartment",
    wifi: true,
    ac: true,
    smoking: false,
    washer: true,
    hostLanguage: "french",
    name: "The Majestic Mile",
  },
  {
    id: 14,
    img: "apart3.jpeg",
    price: 1250,
    bedrooms: 2,
    bathRooms: 2,
    propertyType: "apartment",
    wifi: true,
    ac: true,
    smoking: false,
    washer: false,
    hostLanguage: "french",
    name: "The Regal Residency",
  },
  {
    id: 15,
    img: "apart5.jpeg",
    price: 850,
    bedrooms: 1,
    bathRooms: 1,
    propertyType: "apartment",
    wifi: false,
    ac: false,
    smoking: true,
    washer: false,
    hostLanguage: "russian",
    name: "The Signature Suite",
  },
  {
    id: 16,
    img: "apart6.jpeg",
    price: 700,
    bedrooms: 1,
    bathRooms: 1,
    propertyType: "apartment",
    wifi: false,
    ac: false,
    smoking: false,
    washer: false,
    hostLanguage: "russian",
    name: "The Prestige Palace",
  },
  {
    id: 17,
    img: "apart7.jpeg",
    price: 900,
    bedrooms: 1,
    bathRooms: 1,
    propertyType: "apartment",
    wifi: true,
    ac: true,
    smoking: false,
    washer: false,
    hostLanguage: "russian",
    name: "The Stylish Studio",
  },
  {
    id: 18,
    img: "apart8.jpeg",
    price: 1350,
    bedrooms: 2,
    bathRooms: 2,
    propertyType: "apartment",
    wifi: false,
    ac: false,
    smoking: true,
    washer: false,
    hostLanguage: "russian",
    name: "The Urban Utopia",
  },
  {
    id: 19,
    img: "apart9.jpeg",
    price: 1400,
    bedrooms: 4,
    bathRooms: 2,
    propertyType: "apartment",
    wifi: true,
    ac: true,
    smoking: false,
    washer: false,
    hostLanguage: "english",
    name: "Modern Heights",
  },
  {
    id: 20,
    img: "apart10.jpeg",
    price: 2400,
    bedrooms: 3,
    bathRooms: 2,
    propertyType: "apartment",
    wifi: true,
    ac: true,
    smoking: true,
    washer: false,
    hostLanguage: "english",
    name: "Riverwalk Commons",
  },
];

const filterDataHandler = ({ price, propertyType, bedrooms, bathRooms, wifi, ac, smoking, washer}) => {
  let tempData = [...dataBase];
  const minPrice = JSON.parse(price)[0];
  const maxPrice = JSON.parse(price)[1];
  tempData = tempData.filter(
    (properties) => properties.price >= minPrice && properties.price <= maxPrice
  );

  if (propertyType !== "any") {
    tempData = tempData.filter(
      (properties) => properties.propertyType === propertyType
    );
  }

  if (bedrooms !== "any") {
    if(+bedrooms < 6) {
      tempData = tempData.filter((pro) => pro.bedrooms === +bedrooms)
    }
    else {
      tempData = tempData.filter((pro) => pro.bedrooms >= +bedrooms)
    } 
  }

  if (bathRooms !== "any") {
    if(+bathRooms < 6) {
      tempData = tempData.filter((pro) => pro.bathRooms === +bathRooms)
    }
    else {
      tempData = tempData.filter((pro) => pro.bathRooms >= +bathRooms)
    } 
  }

  if (JSON.parse(wifi)) {
    tempData = tempData.filter((pro) => pro.wifi)
  }
  if (JSON.parse(washer)) {
    tempData = tempData.filter((pro) => pro.washer)
  }
  if (JSON.parse(ac)) {
    tempData = tempData.filter((pro) => pro.ac)
  }
  if (JSON.parse(smoking)) {
    tempData = tempData.filter((pro) => pro.smoking)
  }


  return tempData;
};

app.get("/properties", (req, res) => {
  const params = req.query;
  const filteredData = filterDataHandler(params);
  res.send(filteredData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
