// Create Array fo Objects
// Dipadana Putu

// Release 0
var arr = [];

function createObj(name, phase, gender){
  arr.push({
    name : name,
    phase : phase,
    gender : gender
  })
}

createObj('akbar',1,'male');
createObj('dipa',1,'male');

console.log(arr)

// Release 1
function getData(name){
  for(var i = 0; i < arr.length; i++){
    if(arr[i].name == name){
      return arr[i];
    }
  }
}

console.log(getData('akbar'))