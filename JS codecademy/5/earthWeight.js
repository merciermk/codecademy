function earthWeight(earthWeight, planet){
    planet = planet.toLowerCase();
    if (planet === 'mercury'){
        console.log(planet);
        return (earthWeight * 0.378);

    }
    console.log(planet);
}

console.log(earthWeight(72, 'MercUry'));