import nonvegItemimage from "../images/pizza1.webp";
import vegPizzaItem from "../images/vegPizza.jpg";
import cake from "../images/cake.jpg";
import coke from "../images/coke.webp";

export const nonVegPizzaList = [
  {
    name: "Non Veg Supreme",
    image: nonvegItemimage,
    price: {
      Regular: 190,
      Medium: 325,
      Large: 425,
    },
  },
  {
    name: "chicken Tikka",
    image: nonvegItemimage,
    price: {
      Regular: 210,
      Medium: 370,
      Large: 500,
    },
  },
  {
    name: "Peppar Barbeque Chicken",
    image: nonvegItemimage,
    price: {
      Regular: 220,
      Medium: 380,
      Large: 525,
    },
  },
];

export const vegPizzaList = [
  {
    name: "Deluxe veggie",
    image: vegPizzaItem,
    price: {
      Regular: 150,

      Medium: 200,
      Large: 325,
    },
  },
  {
    name: "Panner Tikka",
    image: vegPizzaItem,
    price: {
      Regular: 160,
      Medium: 290,
      Large: 340,
    },
  },
  {
    name: "Cheese and corn",
    image: vegPizzaItem,
    price: {
      Regular: 175,
      Medium: 375,
      Large: 475,
    },
  },
];
export const vegToppings = [
  {
    name: "Black olive",
    price: 20,
  },
  {
    name: "Capsicum",
    price: 25,
  },
  {
    name: "Paneer",
    price: 35,
  },
  {
    name: "Mushroom",
    price: 30,
  },
  {
    name: "Fresh Tomato",
    price: 10,
  },
];



export const sides = [
  {
    name: "Cold drink",
    image: coke,
    price: 55,
  },
  {
    name: "Mousse Cake",
    image: cake,
    price: 90,
  },
];

 export const crusts = [
  "New hand tossed",
  "Wheat thin crust",
  "Cheese Burst",
  "Fresh pan pizza",
];