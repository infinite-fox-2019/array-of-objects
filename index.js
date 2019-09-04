var arr = []
function createObj (name,phase,gender){
let data = {
  name : name,
  phase : phase,
  gender : gender
}
arr.push(data)
}

function getData (name) {
  for (let i = 0; i< arr.length;i++){
    for (let j = 0; j<Object.values(arr[i]).length; j++ ){
     if (Object.values(arr[i])[j] === name){
       return arr[i]
     }
   }
  }
}

createObj('Akbar',1,'male')
createObj('Icha',1,'female')

console.log(arr)
console.log('------------------')
console.log(getData('Icha'))
