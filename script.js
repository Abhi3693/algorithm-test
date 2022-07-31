// Input time unit
const input = 13;

// Time unit required to generate single initity
const theatre = 5;
const pub = 4;
const commercial = 10;

// returns money per time unit
const theatreReturnsPerUnit = 1500;
const pubReturnsPerUnit = 1000;
const commercialReturnsPerUnit = 3000;

let case1 = {T: 0, P: 0, C: 0};
let case2 = {T: 0, P: 0, C: 0};
let case3 = {T: 0, P: 0, C: 0};

let prevValue1 = 0;
let prevValue2 = 0;
let prevValue3 = 0;

let case1Returns = 0;
let case2Returns = 0;
let case3Returns = 0;


function higestReturns() {
  let remained = 0;
  for(let i = 1; i <= input; i++) {

    case1Returns = case1Returns + ((case1.T * theatreReturnsPerUnit) + (case1.P * pubReturnsPerUnit) + (case1.C * commercialReturnsPerUnit));
    case2Returns = case2Returns + ((case2.T * theatreReturnsPerUnit) + (case2.P * pubReturnsPerUnit) + (case2.C * commercialReturnsPerUnit));
    case3Returns = case3Returns + ((case3.T * theatreReturnsPerUnit) + (case3.P * pubReturnsPerUnit) + (case3.C * commercialReturnsPerUnit));

    if ((prevValue1 - i) % pub === 0 && remained >= pub && remained < theatre) {
      case1.P = case1.P + 1;
      prevValue = i;
    }

    if(i % theatre === 0) {
      case1.T = case1.T + 1;
      prevValue1 = i
      remained = input - i;
    }
    
    if(i % pub === 0) {
      case2.P = case2.P + 1;
      prevValue2 = i
    }

    if(i % commercial === 0) {
      case3.C = case3.C + 1;
      prevValue3 = i
    }
  }

  return handleReturn(
    {total: case1, earnings: case1Returns }, 
    {total: case2, earnings: case2Returns }, 
    {total: case3, earnings: case3Returns }, 
  )
}  

function handleReturn(...arr) {
  let sortedArr = [...arr].sort((a, b) => b.earnings - a.earnings);
  let final = {earnings: sortedArr[0].earnings, solution: [sortedArr[0].total]};

  if (sortedArr[0].earnings === sortedArr[1].earnings) {
    sortedArr.forEach((elm, i) => {
      
      if(sortedArr[i+1] && elm.earnings === sortedArr[i+1].earnings) {
        if (sortedArr[i+1] && elm.earnings === sortedArr[i+1].earnings) {
          final.solution.push(sortedArr[i+1].total);
        }
      }
    });
  }
  return final;
}


let result = higestReturns(input)
console.log(result);
  
