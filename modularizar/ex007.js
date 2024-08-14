//Escreva um programa em JavaScript que utilize a biblioteca convert para converter dias em minutos 
//e gigabytes em bytes.

import convert from "convert"

function diasEmMinutos(dias){
    return convert(dias, "days").to("minutes");

}

function gigabytesEmBytes(gigabytes){
    return convert(gigabytes, "gigabytes").to("bytes");
}

const dias = Number(5);
const gigabytes = Number(2);

console.log(`${dias} dias são em ${diasEmMinutos(dias)} minutos`);
console.log(`${gigabytes} gigabytes são em ${gigabytesEmBytes(gigabytes)} bytes`);