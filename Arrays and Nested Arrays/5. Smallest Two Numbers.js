

function smallNums(params) {
   let smallest = params.sort((a,b) => a-b);
   console.log(smallest[0]);
   console.log(smallest[1]);
}

smallNums([30, 15, 50, 5]);