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

createObj('Akbar',1,'male');
createObj('Dipa',1,'male');
createObj('Ripti',2,'female');

console.log(arr)

// Release 1
function getData(name){
  for(var i = 0; i < arr.length; i++){
    if(arr[i].name == name){
      return arr[i];
    }
  }
  return 'Data yang diminta tidak ada';
}

console.log(getData('Akbar'))