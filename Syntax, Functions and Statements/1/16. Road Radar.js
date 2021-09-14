

function speedLimit(input1,input2){
    switch (input2) {
        case 'motorway':
            if(input1 - 130 > 0 && input1 - 130 < 21){
            console.log(`The speed is ${input1 - 130} km/h faster than the allowed speed of 130 - speeding`);
            }else if(input1 - 130 > 21 && input1 - 130 < 41){
                console.log(`The speed is ${input1 - 130} km/h faster than the allowed speed of 130 - excessive speeding`);
            }else if(input1 - 130>0){
                console.log(`The speed is ${input1 - 130} km/h faster than the allowed speed of 130 - reckless driving`);
            }else{
                console.log(`Driving ${input1} km/h in a 130 zone`);
            }
                
            
            break;

        case 'interstate':
            if(input1 - 90 > 0 && input1 - 90 < 21){
            console.log(`The speed is ${input1 - 90} km/h faster than the allowed speed of 90 - speeding`);
            }else if(input1 - 90 > 21 && input1 - 90 < 41){
                console.log(`The speed is ${input1 - 90} km/h faster than the allowed speed of 90 - excessive speeding`);
            }else if(speed - 90>0){
                console.log(`The speed is ${input1 - 90} km/h faster than the allowed speed of 90 - reckless driving`);
            }else{
                console.log(`Driving ${input1} km/h in a 90 zone`);
            }
            
            break;

        case 'city':
            if(input1 - 50 > 0 && input1 - 50 < 21){
            console.log(`The speed is ${input1 - 50} km/h faster than the allowed speed of 50 - speeding`);
            }else if(input1 - 50 > 21 && input1 - 50 < 41){
                console.log(`The speed is ${input1 - 50} km/h faster than the allowed speed of 50 - excessive speeding`);
            }else if(input1 - 50>0){
                console.log(`The speed is ${input1 - 50} km/h faster than the allowed speed of 50 - reckless driving`);
                
            }else{
                console.log(`Driving ${input1} km/h in a 50 zone`);
            }
            break;

        case 'residential':
            if(input1 - 20 > 0 && input1 - 20 < 21){
            console.log(`The speed is ${input1 - 20} km/h faster than the allowed speed of 20 - speeding`);
            }else if(input1 - 20 > 21 && input1 - 20 < 41){
                console.log(`The speed is ${input1 - 20} km/h faster than the allowed speed of 20 - excessive speeding`);
            }else if(speed - 20>0){
                    console.log(`The speed is ${input1 - 20} km/h faster than the allowed speed of 20 - reckless driving`);
                    
            }else{
                console.log(`Driving ${input1} km/h in a 20 zone`);
            }
            break;
    
    }
}


speedLimit(40, 'city');

