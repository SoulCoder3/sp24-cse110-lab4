let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(let s in statistics) {
    if(s.startsWith('r') || (statistics[s] % 2 != 0)) {
        console.log(statistics[s]);
    }
}