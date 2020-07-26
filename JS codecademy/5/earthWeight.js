function calculateWeight(earthWeight, planet){
    planet = planet.toLowerCase();
    if (planet === 'mercury'){
        return (earthWeight * 0.378);
    }else if (planet === 'venus'){
        return (earthWeight * 0.907);
    }else if(planet === 'mars'){
        return (earthWeight * 0.377);
    }else if(planet === 'jupiter'){
        return (earthWeight * 2.36);
    }else if(planet === 'saturn'){
        return (earthWeight * 0.916);
    }else{
        return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
    }
}

console.log(calculateWeight(100, 'Jupiter'));