var arr = []
function createObj(name, phase, gender){
  let obj = {}
  obj.name = name
  obj.phase = phase
  obj.gender = gender
  arr.push(obj)
}

function getData(name){
  for(let i=0 ; i<arr.length ; i++){
    if(name == arr[i].name){
      return arr[i]
    }
  }
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
console.log(arr)

console.log(getData('Akbar'))
console.log(getData('Icha'))
