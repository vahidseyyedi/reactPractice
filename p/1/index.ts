type Planet = {
    name: string;
    orbit: number;
}

const seconodInErth: number = 31557600;

const planets: Planet[] = [
    { name: "Mercury", orbit: 0.2408467 },
    { name: "Venus", orbit: 0.61519726 },
    { name: "Earth", orbit: 1.0 },
    { name: "Mars", orbit: 1.8808158 },
    { name: "Jupiter", orbit: 11.862615 },
    { name: "Saturn", orbit: 29.447498 },
    { name: "Uranus", orbit: 84.016846 },
    { name: "Neptune", orbit: 164.79132 },
]

function result(age:number , planet:number):void{
    const calc:number = calcAgeSec(age) / (orbit(planet) * seconodInErth);
    console.log(planets[planet-1].name + ":" + calc);
}

function calcAgeSec(num:number):number{
    return num*seconodInErth;
}

function orbit(num:number):number{
    const i = num -1;
    return planets[i].orbit;
}

result(20 , 4);