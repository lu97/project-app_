import girl1 from "./sources/icons/girl1.svg";
import girl3 from "./sources/icons/girl3.svg";
import girl4 from "./sources/icons/girl4.svg";
import girl5 from "./sources/icons/girl5.svg";
import girl6 from "./sources/icons/girl6.svg";
import girl7 from "./sources/icons/girl7.svg";
import girl8 from "./sources/icons/girl8.svg";
import girl9 from "./sources/icons/girl9.svg";
import girl10 from "./sources/icons/girl10.svg";
import girl11 from "./sources/icons/girl11.svg";
import avocados from "./sources/icons/avocados.svg";
import banana from "./sources/icons/banana.svg";
import blueberry from "./sources/icons/blueberry.svg";
import broccoli from "./sources/icons/broccoli.svg";
import carrot from "./sources/icons/carrot.svg";
import chilli from "./sources/icons/chilli.svg";
import corn from "./sources/icons/corn.svg";
import food from "./sources/icons/food.svg";
import garlic from "./sources/icons/garlic.svg";

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return  Math.floor(Math.random() * (max - min)) + min;
}
export function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export const imageData=[girl1, girl3, girl4, girl5, girl6, girl7, girl8, girl9, girl10, girl11];
export const fruitsImageData=[banana, avocados, blueberry, broccoli, carrot, chilli, corn, food, garlic]


export function isNotEmpty(array){
    return array && array.length > 0
}

export function isEmpty(array){
    return !isNotEmpty(array)
}