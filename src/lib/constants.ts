import BaklavaImage from '../assets/images/image-baklava-desktop.jpg';
import SaltedCaramelBrownieImage from '../assets/images/image-brownie-desktop.jpg';
import RedVelvetCakeImage from '../assets/images/image-cake-desktop.jpg';
import BruleeImage from '../assets/images/image-creme-brulee-desktop.jpg';
import MacaronImage from '../assets/images/image-macaron-desktop.jpg';
import LemonMeringueImage from '../assets/images/image-meringue-desktop.jpg';
import VanillaPannaCottaImage from '../assets/images/image-panna-cotta-desktop.jpg';
import TiramisuImage from '../assets/images/image-tiramisu-desktop.jpg';
import WaffleImage from '../assets/images/image-waffle-desktop.jpg';
import { ProductType } from './types';


export const PRODUCTS: ProductType[] = [
    {
       id: 1,
       "image": WaffleImage,
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50
    },
    {
         id: 2,
        "image": BruleeImage,
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
     },
     {
      id: 3,
        "image": MacaronImage,
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
     },
     {
      id: 4,
        "image": TiramisuImage,
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50
     },
     {
      id: 5,
        "image": BaklavaImage,
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
     },
     {
      id: 6,
        "image": LemonMeringueImage,
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
     },
     {
      id: 7,
        "image": RedVelvetCakeImage,
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
     },
     {
      id: 8,
        "image": SaltedCaramelBrownieImage,
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
     },
     {
      id: 9,
        "image": VanillaPannaCottaImage,
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
     }
];