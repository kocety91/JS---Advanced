

function timeWallks(value1,value2,value3){
    let stepsNumber = Number(value1);
    let stepsMetersHr = Number(value2);
    let studentSpeed = Number(value3);

    let distanceMeters = stepsNumber * stepsMetersHr;
    let speedMetersSec = studentSpeed / 3.6;
    let time = distanceMeters / speedMetersSec;
    let rest = Math.floor(distanceMeters / 500);
  
    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600);
    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + (timeSec < 10 ? "0" : "") + timeSec);
}



timeWallks(4000, 0.60, 5);