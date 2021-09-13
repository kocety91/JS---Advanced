

function daysOfweek(day){

    let dayOfWeek;

    if (day == 'Monday'){
        return dayOfWeek = 1;
    }
    else if(day == 'Tuesday'){
        return dayOfWeek = 2;
    }
    else if(day == 'Wednesday'){
        return dayOfWeek =3;
    }
    else if(day == 'Thursday'){
        return dayOfWeek = 4;
    }
    else if(day == 'Friday'){
        return dayOfWeek = 5;
    }
    else if(day == 'Saturday'){
        return dayOfWeek = 6;
    }
    else if(day == 'Sunday'){
        return dayOfWeek = 7;
    }
    else{
        return dayOfWeek = 'error';
    }
}

let dayOfWeek2 = daysOfweek('dhsadkasdasd');

console.log(dayOfWeek2);